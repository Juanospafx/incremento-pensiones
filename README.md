# Calculadora de Incremento de Pensión por Sobrevivencia

Aplicación web para estimar el capital técnico necesario (CTN), el excedente disponible y el posible incremento mensual de una pensión por sobrevivencia en la República Dominicana.

El cálculo se realiza completamente en el navegador a partir del Salario Promedio Indexado (SPI), el saldo de la Cuenta de Capitalización Individual (CCI), los aportes voluntarios y la composición del grupo de beneficiarios. La aplicación utiliza las tablas EARDA 2009 y EMSSI 2007 mensualizadas, una tasa técnica configurable y un factor de 13 pagos por año.

## Funcionalidades

- Captura la fecha de fallecimiento, el SPI, la CCI y los aportes voluntarios.
- Admite cónyuge y hasta 15 hijos como beneficiarios.
- Distingue beneficiarios por sexo para seleccionar la tabla actuarial correspondiente.
- Calcula hijos sin discapacidad hasta los 21 años con EARDA 2009.
- Calcula hijos con discapacidad mediante renta vitalicia con EMSSI 2007.
- Distribuye automáticamente la renta según la composición familiar.
- Permite cambiar la tasa técnica anual y reconstruye las tablas mensuales D/N.
- Presenta CTN, renta normal, incremento y nueva renta por beneficiario.
- Genera una vista imprimible que el navegador puede guardar como PDF.
- Incluye validaciones de datos y un diseño adaptable a computadoras y dispositivos móviles.

## Requisitos

No requiere instalación de dependencias, compilación ni backend. Solo se necesita un navegador web moderno con JavaScript habilitado.

La fuente Inter/Montserrat se carga desde Google Fonts. Si no hay conexión a Internet, la calculadora sigue funcionando y utiliza las fuentes alternativas del sistema.

## Ejecución local

Clone el repositorio:

```bash
git clone https://gitlab.com/Juanospafx/calculadora_incremento_pensiones.git
cd calculadora_incremento_pensiones
```

Puede abrir `index.html` directamente en el navegador. Para servir el proyecto por HTTP, use cualquiera de estas opciones desde la raíz:

```bash
# Python 3
python -m http.server 8000
```

```bash
# PHP
php -S localhost:8000
```

Luego visite `http://localhost:8000`.

## Uso

1. Indique la fecha de fallecimiento del afiliado y un SPI mayor que cero.
2. Ingrese la CCI y, si corresponde, los aportes voluntarios.
3. Active la opción de cónyuge e indique su fecha de nacimiento y sexo.
4. Seleccione la cantidad de hijos y complete sus datos. Marque la condición de discapacidad cuando corresponda.
5. Presione **Calcular** para obtener los resultados.
6. Use **Exportar PDF** y seleccione la opción de guardar como PDF en el diálogo de impresión del navegador.

El botón **Insumos técnicos** muestra los parámetros actuariales. Desde esa ventana también se puede cambiar la tasa técnica anual. Si ya existe un resultado, este se recalcula automáticamente al guardar la nueva tasa.

## Criterios de cálculo implementados

### Parámetros generales

| Parámetro | Valor predeterminado |
| --- | ---: |
| Proporción de sobrevivencia (`p`) | 0.60 |
| Pagos anuales | 13/12 |
| Tasa técnica anual (`i`) | 5.00 % |
| Edad límite EARDA (`ω`) | 110 años |
| Edad límite EMSSI (`ω`) | 101 años |
| Población inicial de la tabla (`l₀`) | 10,000,000 |

El factor mensual de descuento se obtiene mediante:

```text
v = 1 / (1 + i)^(1/12)
```

### Generación de las tablas de mortalidad mensuales

El archivo `app.js` contiene cuatro series base de tasas anuales de mortalidad (`qₓ`) expresadas por mil:

- EARDA 2009, masculino y femenino, para beneficiarios sin discapacidad;
- EMSSI 2007, masculino y femenino, para hijos con discapacidad.

Por cada sexo y tipo de tabla, `buildTablaMensual()` genera las columnas mensuales `l`, `D` y `N`. El procedimiento implementado es el siguiente:

1. **Define el horizonte.** EARDA se extiende hasta 110 años (`1,320` meses) y EMSSI hasta 101 años (`1,212` meses).
2. **Inicializa la población.** Se parte de `l₀ = 10,000,000` sobrevivientes.
3. **Selecciona la tasa anual.** Para el mes `t`, la edad anual usada como índice es `floor(t / 12)`. La misma tasa anual se aplica a los doce meses de esa edad.
4. **Convierte la tasa por mil.** El dato de la tabla se divide entre `1,000` para obtener `q_anual`. Si no existe una tasa para la edad solicitada, el código usa `1,000‰` como valor terminal.
5. **Mensualiza la mortalidad.** Se supone una distribución compuesta uniforme de la supervivencia dentro del año:

   ```text
   q_mensual = 1 − (1 − min(0.999999, q_anual))^(1/12)
   ```

   El límite `0.999999` impide usar una mortalidad mensual derivada de una probabilidad anual exactamente igual a uno y conserva una supervivencia residual en el punto terminal.

6. **Proyecta sobrevivientes.** Para cada mes:

   ```text
   l[t + 1] = l[t] · (1 − q_mensual)
   ```

7. **Calcula la columna de conmutación `D`.** Con el factor mensual de descuento `v`:

   ```text
   D[t] = redondear(l[t] · v^t, 2)
   ```

8. **Calcula la columna acumulada `N`.** Se inicia con `N[maxMeses + 1] = 0` y se acumula desde el último mes hacia el primero:

   ```text
   N[t] = redondear(N[t + 1] + D[t], 2)
   ```

El factor `v` se redondea a 14 decimales; `D` y cada acumulación de `N`, a 2 decimales. Las tablas se reconstruyen completamente cuando cambia la tasa técnica.

### Cálculo de edades y plazos

Todas las edades se calculan en meses enteros cumplidos a la fecha de fallecimiento:

```text
edad_meses = (año_evento − año_nacimiento) · 12
             + (mes_evento − mes_nacimiento)
```

Si el día del fallecimiento es anterior al día de nacimiento, se resta un mes. Las edades se truncan y limitan al rango disponible en la tabla actuarial antes de consultar `D` y `N`.

Para un hijo sin discapacidad se calcula el plazo restante hasta los 21 años:

```text
z = 252 − edad_meses
```

La interpolación por fracción de mes usa:

```text
f = (día_nacimiento − día_fallecimiento) / 30
    + (día_nacimiento <= día_fallecimiento ? 1 : 0)
```

### Cálculo del VANU

Los valores actuales necesarios unitarios incorporan el factor `13/12` para representar trece pagos anuales:

```text
VANU temporario del cónyuge:
ayn13(y, n) = (13/12) · (N[y + 1] − N[y + n + 1]) / D[y]

VANU vitalicio EARDA:
ay13(y) = (13/12) · N[y + 1] / D[y]

VANU vitalicio EMSSI:
ay13Disc(y) = (13/12) · N_EMSSI[y + 1] / D_EMSSI[y]
```

Para hijos sin discapacidad, el extremo de la renta temporaria se interpola:

```text
fin = h + z
N_fin = N[fin] + f · (N[fin + 1] − N[fin])
ahz13(h, z, f) = (13/12) · (N[h + 1] − N_fin) / D[h]
```

Cada VANU se redondea a 6 decimales. Si `D` no es positivo, la función devuelve cero para evitar una división inválida.

## Reglas del negocio

El cálculo sigue estas reglas en el orden indicado:

1. Debe existir al menos un beneficiario: cónyuge, uno o más hijos, o ambos.
2. La participación `b` se asigna automáticamente según la composición familiar; el usuario no puede editarla.
3. La edad y el sexo determinan la tabla, el plazo y el VANU aplicables a cada beneficiario.
4. La renta normal individual es el 60 % del SPI multiplicado por la participación del beneficiario.
5. El CTN individual es la renta normal multiplicada por el VANU. El CTN total es la suma de los CTN individuales.
6. Solo existe incremento cuando el capital disponible para incremento es mayor que cero y el VANU del beneficiario es positivo.
7. La nueva renta tiene como piso la renta normal; el código nunca permite que el resultado quede por debajo de ella.
8. El total mostrado como **Renta nueva total** es la suma de las nuevas rentas individuales, no un nuevo reparto independiente.

### Selección de tabla y modalidad

| Beneficiario | Condición | Tabla | Modalidad y plazo |
| --- | --- | --- | --- |
| Cónyuge | Edad `<= 600` meses | EARDA según sexo | Temporaria, 60 meses |
| Cónyuge | Edad `> 600` y `<= 660` meses | EARDA según sexo | Temporaria, 72 meses |
| Cónyuge | Edad `> 660` meses | EARDA según sexo | Vitalicia |
| Hijo | Sin discapacidad y edad `< 252` meses | EARDA según sexo | Temporaria hasta los 21 años |
| Hijo | Sin discapacidad y edad `>= 252` meses | No aplica | VANU, CTN y renta base iguales a cero |
| Hijo | Con discapacidad | EMSSI según sexo | Vitalicia |

### Tratamiento de la CCI y los aportes voluntarios

El capital usado para generar incrementos se determina con estas condiciones:

| Condición | Capital disponible para incremento | Valor presentado como excedente |
| --- | --- | --- |
| `CCI − CTN total >= 0` | `(CCI − CTN total) + aportes` | `CCI − CTN total` |
| `CCI − CTN total < 0` y aportes `> 0` | Solo aportes voluntarios | Aportes voluntarios |
| `CCI − CTN total < 0` y aportes `= 0` | `0` | `0` |

En el segundo caso, el déficit de la CCI no se descuenta de los aportes voluntarios: estos se destinan directamente al incremento. Esta es una regla explícita de la implementación actual. En el tercer caso, la interfaz presenta cero aunque el excedente bruto interno sea negativo.

### Distribución de la renta

| Composición familiar | Distribución `b` |
| --- | --- |
| Solo cónyuge | Cónyuge: 1.00 |
| Cónyuge y N hijos | Cónyuge: 0.50; cada hijo: `0.50 / N` |
| Solo N hijos | Cada hijo: `1.00 / N` |

### Fórmulas principales

Para cada beneficiario:

```text
Renta normal = SPI · p · b
CTN          = SPI · p · b · VANU
```

El excedente bruto es:

```text
Excedente bruto = CCI − CTN total
```

Cuando la CCI cubre el CTN, el capital disponible para el incremento es el excedente bruto más los aportes voluntarios. Si la CCI no cubre el CTN y existen aportes voluntarios, la aplicación utiliza únicamente esos aportes para generar el incremento e ignora el déficit.

```text
Incrementoᵢ = capital disponible · bᵢ / VANUᵢ
Nueva rentaᵢ = renta normalᵢ + incrementoᵢ
```

No se calcula incremento para una fila cuyo VANU sea cero.

## Validaciones

Antes de calcular se comprueba que:

- exista una fecha de fallecimiento;
- el SPI y la CCI sean mayores que cero;
- los aportes voluntarios sean mayores o iguales a cero;
- la tasa técnica no sea negativa;
- exista al menos un beneficiario;
- las fechas de nacimiento requeridas sean válidas y no posteriores al fallecimiento.

## Estructura del proyecto

```text
.
├── index.html   # Estructura de la interfaz y ventanas modales
├── styles.css  # Diseño adaptable y estilos de impresión
├── app.js      # Tablas actuariales, reglas, validaciones y UI
└── README.md   # Documentación del proyecto
```

La aplicación no implementa almacenamiento ni envío de los datos ingresados. El estado de cálculo vive en memoria y la tasa técnica vuelve al 5 % al iniciar una nueva carga de la aplicación.

## Pruebas

El repositorio no incluye actualmente una suite automatizada. Para una verificación manual básica, pruebe al menos estos escenarios:

1. Solo cónyuge en cada uno de los tres rangos de edad.
2. Solo hijos, con y sin discapacidad.
3. Cónyuge junto con varios hijos para comprobar la distribución de `b`.
4. CCI superior, igual e inferior al CTN total.
5. Déficit de CCI con aportes voluntarios positivos.
6. Cambio de tasa técnica después de calcular.
7. Exportación a PDF y visualización en pantalla móvil.

## Mantenimiento

Las tablas de mortalidad y los parámetros globales se encuentran al inicio de `app.js`. Cualquier cambio debe revisarse con especial cuidado porque reconstruye los factores actuariales y afecta todos los resultados.

Al modificar las reglas de negocio, actualice también la sección **Criterios de cálculo implementados** y agregue pruebas para los casos límite.

## Licencia

Este repositorio no declara actualmente una licencia. Hasta que se incorpore una, consulte al propietario del proyecto antes de reutilizar, modificar o distribuir el código.
