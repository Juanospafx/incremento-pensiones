# Calculadora de Incremento de Pensión por Sobrevivencia

Aplicación web para estimar el capital técnico necesario (CTN), el excedente disponible y el posible incremento mensual de una pensión por sobrevivencia en la República Dominicana.

El cálculo se realiza completamente en el navegador a partir del Salario Promedio Indexado (SPI), el saldo de la Cuenta de Capitalización Individual (CCI), los aportes voluntarios y la composición del grupo de beneficiarios. La aplicación utiliza las tablas EARDA 2009 y EMSSI 2007 mensualizadas, una tasa técnica configurable y un factor de 13 pagos por año.

> **Aviso:** esta herramienta es una réplica operativa con fines de cálculo y apoyo. Sus resultados deben validarse contra la normativa, los criterios actuariales y los procedimientos oficiales vigentes antes de utilizarlos para tomar decisiones o emitir prestaciones.

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

Las tasas anuales de mortalidad por mil se convierten en probabilidades mensuales. A partir de ellas se construyen las funciones actuariales `l`, `D` y `N` empleadas en los valores actuales necesarios unitarios (VANU).

### Distribución de la renta

| Composición familiar | Distribución `b` |
| --- | --- |
| Solo cónyuge | Cónyuge: 1.00 |
| Cónyuge y N hijos | Cónyuge: 0.50; cada hijo: `0.50 / N` |
| Solo N hijos | Cada hijo: `1.00 / N` |

### Beneficiarios

- **Cónyuge de hasta 600 meses de edad:** renta temporaria de 60 meses.
- **Cónyuge mayor de 600 y hasta 660 meses:** renta temporaria de 72 meses.
- **Cónyuge mayor de 660 meses:** renta vitalicia.
- **Hijo sin discapacidad y menor de 21 años:** renta temporaria hasta cumplir 252 meses, calculada con EARDA 2009 e interpolación por fracción de mes.
- **Hijo sin discapacidad de 21 años o más:** CTN y renta base iguales a cero.
- **Hijo con discapacidad:** renta vitalicia calculada con EMSSI 2007.

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
