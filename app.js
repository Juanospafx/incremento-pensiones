// ======================
      // EARDA 2009 (por mil)
      // ======================
      const EARDA_MASCULINO = [12.7913, 1.1372, 0.4492, 0.361, 0.3191, 0.284, 0.2829,
      0.2659, 0.2569, 0.2569, 0.2693, 0.2931, 0.3338, 0.3983, 0.4877, 0.5963, 0.7219,
      0.8611, 1.0014, 1.1203, 1.2142, 1.295, 1.3759, 1.4536, 1.5229, 1.5807, 1.6271,
      1.6618, 1.6878, 1.7096, 1.7323, 1.7609, 1.7988, 1.8496, 1.9147, 1.991, 2.0712,
      2.149, 2.223, 2.2949, 2.3723, 2.4664, 2.588, 2.7437, 2.933, 3.1517, 3.3941,
      3.6556, 3.9359, 4.2389, 4.5711, 4.9399, 5.3511, 5.8076, 6.3098, 6.8578, 7.4527,
      8.0969, 8.794, 9.549, 10.3693, 11.2653, 12.2479, 13.3284, 14.5178, 15.8271,
      17.2676, 18.85, 20.5835, 22.4751, 24.5296, 26.7504, 29.1394, 31.6975, 34.4243,
      37.3179, 40.3756, 43.5932, 46.9657, 50.4874, 54.1526, 59.1524, 64.61, 70.565,
      77.0601, 84.1409, 91.856, 100.257, 109.3985, 119.3378, 130.135, 141.8522,
      154.5536, 168.3044, 183.1705, 199.2169, 216.507, 235.1007, 255.0528, 276.4108,
      299.212, 323.4813, 349.2274, 376.4394, 405.0831, 435.0971, 466.3885, 498.8298,
      532.2552, 566.4584, 1000];

      const EARDA_FEMENINO = [10.5267, 0.9337, 0.3693, 0.2961, 0.2625, 0.2334, 0.2323,
      0.2183, 0.2102, 0.2102, 0.2172, 0.23, 0.2532, 0.2845, 0.3217, 0.36, 0.3949,
      0.4239, 0.4436, 0.4506, 0.4529, 0.3944, 0.3601, 0.3495, 0.3618, 0.3942, 0.4406,
      0.4936, 0.5468, 0.597, 0.644, 0.689, 0.733, 0.777, 0.8231, 0.8739, 0.9309,
      0.9944, 1.0645, 1.1416, 1.2262, 1.3199, 1.4244, 1.5413, 1.6713, 1.8143, 1.9694,
      2.1359, 2.3142, 2.5057, 2.7111, 2.9313, 3.1672, 3.4203, 3.6916, 3.9827, 4.2943,
      4.6263, 4.9789, 5.3522, 5.7473, 6.1665, 6.6137, 7.0944, 7.6155, 8.1848, 8.8103,
      9.5004, 10.2636, 11.1086, 12.0439, 13.0776, 14.2174, 15.4703, 16.8427, 18.3404,
      20.4069, 22.7167, 25.2992, 28.1875, 31.4183, 35.033, 39.0776, 43.6038, 48.6688,
      54.3366, 60.6778, 67.771, 75.7027, 84.5679, 94.4707, 105.5243, 117.8512,
      131.5828, 146.8586, 163.8251, 182.6336, 203.4377, 226.3889, 251.6313, 279.2949,
      309.4865, 342.2794, 377.6999, 415.7137, 456.2087, 498.9791, 543.709, 589.959,
      637.158, 1000];

      // ======================
      // EMSSI 2007 (por mil) - población con discapacidad
      // ======================
      const EMSSI_MASCULINO = [
        3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16,
        3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16, 3.16,
        3.16, 3.16, 3.20, 3.34, 3.58, 3.89, 4.28, 4.74, 5.24, 5.79,
        6.37, 6.98, 7.62, 8.26, 8.92, 9.58, 10.24, 10.90, 11.55, 12.20,
        12.83, 13.44, 14.05, 14.64, 15.22, 15.79, 16.35, 16.90, 17.45, 18.00,
        18.55, 19.12, 19.70, 20.30, 20.93, 21.59, 22.30, 23.06, 23.89, 24.78,
        25.76, 26.83, 28.01, 29.31, 30.74, 32.32, 34.05, 35.96, 38.06, 40.37,
        42.90, 45.67, 48.70, 52.01, 55.62, 59.55, 63.81, 68.44, 73.44, 78.85,
        84.69, 90.97, 97.74, 105.00, 112.79, 121.13, 130.05, 139.58, 149.74, 160.57,
        172.09, 184.33, 197.33, 211.11, 225.71, 241.16, 257.49, 274.74, 292.94, 312.12,
        332.33, 1000
      ];

      const EMSSI_FEMENINO = [
        0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69,
        0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.69, 0.72, 0.80,
        0.92, 1.08, 1.27, 1.49, 1.74, 2.02, 2.31, 2.62, 2.94, 3.28,
        3.62, 3.97, 4.33, 4.69, 5.06, 5.43, 5.80, 6.18, 6.56, 6.95,
        7.34, 7.73, 8.13, 8.55, 8.97, 9.40, 9.85, 10.32, 10.81, 11.32,
        11.87, 12.44, 13.05, 13.71, 14.40, 15.15, 15.96, 16.83, 17.76, 18.77,
        19.86, 21.03, 22.30, 23.68, 25.16, 26.76, 28.48, 30.34, 32.34, 34.49,
        36.80, 39.29, 41.95, 44.81, 47.86, 51.13, 54.62, 58.35, 62.32, 66.55,
        71.05, 75.83, 80.91, 86.30, 92.00, 98.05, 104.44, 111.19, 118.33, 125.85,
        133.79, 142.14, 150.94, 160.19, 169.91, 180.12, 190.83, 202.06, 213.83, 226.16,
        239.06, 1000
      ];

      // ======================
      // Parámetros globales
      // ======================
      const P_SURV = 0.6;
      const PAGO_13 = 13/12;
      const OMEGA_EARDA_YEARS = 110;
      const OMEGA_EMSSI_YEARS = 101;
      const MAX_MESES = OMEGA_EARDA_YEARS * 12; // 1320
      const MAX_MESES_DISC = OMEGA_EMSSI_YEARS * 12; // 1212
      const L0 = 10_000_000;

      function roundTo(value, dec){
        const factor = 10 ** dec;
        return Number((Math.round((Number(value) + Number.EPSILON) * factor) / factor).toFixed(dec));
      }

      function factorV(iAnual){
        return roundTo(1 / Math.pow(1 + iAnual, 1/12), 14);
      }

      // Estado técnico (i, v, tablas actuariales)
      let I_ANUAL = 0.05;
      let V_MENSUAL = factorV(I_ANUAL);
      let TABLAS = buildTablas(V_MENSUAL);
      let TABLAS_DISC = buildTablasDisc(V_MENSUAL);

      function buildTablas(vMensual){
        return {
          M: buildTablaMensual(EARDA_MASCULINO, vMensual, OMEGA_EARDA_YEARS),
          F: buildTablaMensual(EARDA_FEMENINO, vMensual, OMEGA_EARDA_YEARS),
        };
      }

      function buildTablasDisc(vMensual){
        return {
          M: buildTablaMensual(EMSSI_MASCULINO, vMensual, OMEGA_EMSSI_YEARS),
          F: buildTablaMensual(EMSSI_FEMENINO, vMensual, OMEGA_EMSSI_YEARS),
        };
      }

      function buildTablaMensual(qPorMilAnual, vMensual, omegaYears){
        const maxMeses = omegaYears * 12;
        const l = new Float64Array(maxMeses + 1);
        const D = new Float64Array(maxMeses + 1);
        const N = new Float64Array(maxMeses + 2); // N[t] usa N[t+1]
        l[0] = L0;
        for (let t = 0; t < maxMeses; t++){
          const ageY = Math.min(omegaYears, Math.floor(t/12));
          const qAnual = (qPorMilAnual[ageY] ?? 1000) / 1000;
          const qMens = 1 - Math.pow(1 - Math.min(0.999999, qAnual), 1/12);
          l[t+1] = l[t] * (1 - qMens);
        }
        for (let t = 0; t <= maxMeses; t++){
          D[t] = roundTo(l[t] * Math.pow(vMensual, t), 2);
        }
        N[maxMeses + 1] = 0;
        for (let t = maxMeses; t >= 0; t--){
          N[t] = roundTo(N[t+1] + D[t], 2);
        }
        return { l, D, N, maxMeses };
      }

      function clampInt(n, min, max){
        return Math.max(min, Math.min(max, Math.trunc(n)));
      }

      function parseDateInput(value){
        const parts = String(value || "").split("-").map(Number);
        if (parts.length !== 3 || parts.some((x) => !Number.isFinite(x))) return null;
        const [year, month, day] = parts;
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
        return date;
      }

      function mesesEntre(fechaNacimiento, fechaEvento){
        // meses enteros cumplidos a la fecha del evento (misma lógica de edad en meses)
        const n = parseDateInput(fechaNacimiento);
        const e = parseDateInput(fechaEvento);
        if (!n || !e) return null;
        if (n > e) return null;
        let months = (e.getFullYear() - n.getFullYear()) * 12 + (e.getMonth() - n.getMonth());
        if (e.getDate() < n.getDate()) months -= 1;
        return months;
      }

      function fraccionMesHijo(fechaNacimiento, fechaEvento){
        const n = parseDateInput(fechaNacimiento);
        const e = parseDateInput(fechaEvento);
        if (!n || !e) return 0;
        const diaNac = n.getDate();
        const diaFall = e.getDate();
        return (diaNac - diaFall) / 30 + (diaNac <= diaFall ? 1 : 0);
      }

      function fmtMoney(n){
        const x = Number(n);
        if (!Number.isFinite(x)) return "—";
        return x.toLocaleString("es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      function fmtNum(n, dec=6){
        const x = Number(n);
        if (!Number.isFinite(x)) return "—";
        return x.toLocaleString("es-DO", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      }
      function fmtInt(n){
        const x = Number(n);
        if (!Number.isFinite(x)) return "—";
        return Math.trunc(x).toLocaleString("es-DO");
      }

      function ayn13(sexo, yMeses, nMeses){
        const { D, N } = TABLAS[sexo];
        const y = clampInt(yMeses, 0, MAX_MESES);
        const n = clampInt(nMeses, 0, MAX_MESES - y);
        const Dy = D[y];
        const Ny1 = N[y+1];
        const NyN1 = N[y+n+1];
        if (!(Dy > 0)) return 0;
        return roundTo(PAGO_13 * (Ny1 - NyN1) / Dy, 6);
      }

      function ahz13(sexo, hMeses, zMeses, f){
        const { D, N } = TABLAS[sexo];
        const h = clampInt(hMeses, 0, MAX_MESES);
        const z = clampInt(zMeses, 0, MAX_MESES - h - 1);
        const Dy = D[h];
        const Nh1 = N[h+1];
        const end = h + z;
        const NFin = N[end] + f * (N[end+1] - N[end]);
        if (!(Dy > 0)) return 0;
        return roundTo(PAGO_13 * (Nh1 - NFin) / Dy, 6);
      }

      function ay13(sexo, yMeses){
        const { D, N } = TABLAS[sexo];
        const y = clampInt(yMeses, 0, MAX_MESES);
        const Dy = D[y];
        const Ny1 = N[y+1];
        if (!(Dy > 0)) return 0;
        return roundTo(PAGO_13 * (Ny1) / Dy, 6);
      }

      function ay13Disc(sexo, yMeses){
        const { D, N, maxMeses } = TABLAS_DISC[sexo];
        const y = clampInt(yMeses, 0, maxMeses);
        const Dy = D[y];
        const Ny1 = N[y+1];
        if (!(Dy > 0)) return 0;
        return roundTo(PAGO_13 * (Ny1) / Dy, 6);
      }

      // ======================
      // UI
      // ======================
      const el = (id) => document.getElementById(id);
      const fechaFallecimiento = el("fechaFallecimiento");
      const spi = el("spi");
      const cci = el("cci");
      const aportes = el("aportes");
      const btnTecnicos = el("btnTecnicos");
      const btnEditarTasa = el("btnEditarTasa");
      const hayConyuge = el("hayConyuge");
      const conyugeFields = el("conyugeFields");
      const nacConyuge = el("nacConyuge");
      const sexoConyuge = el("sexoConyuge");
      const cantHijos = el("cantHijos");
      const childrenList = el("childrenList");

      // Modal tasa técnica
      const modalOverlay = el("modalOverlay");
      const btnCerrarModal = el("btnCerrarModal");
      const btnCancelarModal = el("btnCancelarModal");
      const btnGuardarTasa = el("btnGuardarTasa");
      const iAnualModal = el("iAnualModal");
      const vMensualModal = el("vMensualModal");

      // Modal insumos técnicos
      const techModalOverlay = el("techModalOverlay");
      const btnCerrarTechModal = el("btnCerrarTechModal");
      const btnCerrarTechModalFoot = el("btnCerrarTechModalFoot");

      const btnCalcular = el("btnCalcular");
      const btnLimpiar = el("btnLimpiar");
      const btnExportPdf = el("btnExportPdf");
      const errorsBox = el("errorsBox");
      const tbody = el("tbody");

      const kpiCtn = el("kpiCtn");
      const kpiExc = el("kpiExc");
      const kpiExcLabel = el("kpiExcLabel");
      const kpiApo = el("kpiApo");
      const kpiExcT = el("kpiExcT");
      const kpiRentaTotal = el("kpiRentaTotal");
      const sufBadge = el("sufBadge");
      const calcBadge = el("calcBadge");
      const distInfo = el("distInfo");
      const printDate = el("printDate");

      function renderTechHeader(){
        const iPct = I_ANUAL * 100;
        const iTop = document.getElementById("iValTop");
        const iPill = document.getElementById("iValPill");
        const iInline = document.getElementById("iValInline");
        const vPill = el("vPill");
        const vTop = document.getElementById("vPillTop");
        const pTop = document.getElementById("pValTop");
        const pLocal = el("pVal");
        const vDisp = el("vMensualDisplay");
        if (iTop) iTop.textContent = `${fmtNum(iPct, 2)}%`;
        if (iPill) iPill.textContent = `${fmtNum(iPct, 2)}%`;
        if (iInline) iInline.textContent = `${fmtNum(iPct, 2)}%`;
        if (vPill) vPill.textContent = fmtNum(V_MENSUAL, 14);
        if (vTop) vTop.textContent = fmtNum(V_MENSUAL, 14);
        if (vDisp) vDisp.textContent = fmtNum(V_MENSUAL, 14);
        if (pTop) pTop.textContent = fmtNum(P_SURV, 2);
        if (pLocal) pLocal.textContent = fmtNum(P_SURV, 2);
      }

      function setInterestPct(iPct){
        const raw = Number(iPct);
        if (!Number.isFinite(raw) || raw < 0) return false;
        I_ANUAL = raw / 100;
        V_MENSUAL = factorV(I_ANUAL);
        TABLAS = buildTablas(V_MENSUAL);
        TABLAS_DISC = buildTablasDisc(V_MENSUAL);
        renderTechHeader();
        return true;
      }

      function openInterestModal(){
        if (!modalOverlay || !iAnualModal) return;
        modalOverlay.classList.add("open");
        modalOverlay.setAttribute("aria-hidden", "false");
        iAnualModal.value = String((I_ANUAL * 100).toFixed(2));
        if (vMensualModal) vMensualModal.textContent = fmtNum(V_MENSUAL, 14);
        setTimeout(() => iAnualModal.focus(), 0);
      }
      function closeInterestModal(){
        if (!modalOverlay) return;
        modalOverlay.classList.remove("open");
        modalOverlay.setAttribute("aria-hidden", "true");
      }
      function openTechModal(){
        if (!techModalOverlay) return;
        techModalOverlay.classList.add("open");
        techModalOverlay.setAttribute("aria-hidden", "false");
      }
      function closeTechModal(){
        if (!techModalOverlay) return;
        techModalOverlay.classList.remove("open");
        techModalOverlay.setAttribute("aria-hidden", "true");
      }
      function previewModalV(){
        const raw = Number(iAnualModal?.value);
        if (!Number.isFinite(raw) || raw < 0){
          if (vMensualModal) vMensualModal.textContent = "—";
          return;
        }
        const i = raw / 100;
        const v = factorV(i);
        if (vMensualModal) vMensualModal.textContent = fmtNum(v, 14);
      }
      function saveInterestFromModal(){
        const raw = Number(iAnualModal?.value);
        if (!Number.isFinite(raw) || raw < 0){
          markInvalid(iAnualModal);
          return;
        }
        iAnualModal.removeAttribute("aria-invalid");
        clearErrors();
        const ok = setInterestPct(raw);
        if (!ok) return;
        closeInterestModal();
        // Recalcular si ya había una corrida
        if (tbody && tbody.querySelectorAll("tr").length && !tbody.textContent.includes("Ingrese los datos")){
          calcular();
        }
      }

      btnTecnicos?.addEventListener("click", openTechModal);
      btnCerrarTechModal?.addEventListener("click", closeTechModal);
      btnCerrarTechModalFoot?.addEventListener("click", closeTechModal);
      techModalOverlay?.addEventListener("click", (e) => {
        if (e.target === techModalOverlay) closeTechModal();
      });
      btnEditarTasa?.addEventListener("click", openInterestModal);
      btnCerrarModal?.addEventListener("click", closeInterestModal);
      btnCancelarModal?.addEventListener("click", closeInterestModal);
      modalOverlay?.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeInterestModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay?.classList.contains("open")) closeInterestModal();
        if (e.key === "Escape" && techModalOverlay?.classList.contains("open")) closeTechModal();
      });
      iAnualModal?.addEventListener("input", previewModalV);
      btnGuardarTasa?.addEventListener("click", saveInterestFromModal);

      // Inicial (5%)
      setInterestPct(5.00);

      // Cantidad hijos 0..15
      for (let i=0;i<=15;i++){
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = String(i);
        cantHijos.appendChild(opt);
      }

      hayConyuge.addEventListener("change", () => {
        conyugeFields.style.display = hayConyuge.checked ? "block" : "none";
        renderChildren();
      });
      cantHijos.addEventListener("change", renderChildren);

      function renderChildren(){
        const n = Number(cantHijos.value || 0);
        childrenList.innerHTML = "";
        for (let i=0;i<n;i++){
          const wrap = document.createElement("div");
          wrap.className = "childCard";
          wrap.innerHTML = `
            <div class="childHead">
              <strong>Hijo ${i+1}</strong>
              <span class="muted small">Beneficiario</span>
            </div>
            <div class="row">
              <div class="field">
                <label>Fecha de nacimiento</label>
                <input type="date" data-child="nac" data-i="${i}" />
              </div>
              <div class="field">
                <label>Sexo</label>
                <select data-child="sexo" data-i="${i}">
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
            </div>
            <div class="row" style="margin-top:10px">
              <div class="field">
                <label>Condición</label>
                <div class="toggle">
                  <input type="checkbox" data-child="disc" data-i="${i}" />
                  <span style="font-size:12px;color:var(--brand);font-weight:600;font-family:Montserrat,Inter,Arial,sans-serif;">¿Tiene discapacidad?</span>
                </div>
                <div class="hint">Si tiene discapacidad, se calcula como renta vitalicia con EMSSI 2007 (VANU = ay(13)).</div>
              </div>
              <div class="field">
                <label>Control</label>
                <div class="toggle">
                  <span class="muted small">Si no tiene discapacidad, se calcula hasta 21 años (252 meses).</span>
                </div>
              </div>
            </div>
          `;
          childrenList.appendChild(wrap);
        }
      }
      renderChildren();

      btnLimpiar.addEventListener("click", () => {
        document.querySelectorAll("input,select").forEach((x) => {
          if (x === hayConyuge) return;
          if (x.id === "sexoConyuge") return;
          if (x.id === "cantHijos") return;
          if (x.type === "checkbox") x.checked = false;
          else x.value = "";
        });
        hayConyuge.checked = false;
        conyugeFields.style.display = "none";
        cantHijos.value = "0";
        renderChildren();
        setBadge(calcBadge, "Listo", "badge");
        clearErrors();
        renderEmptyResults();
      });

      btnCalcular.addEventListener("click", calcular);
      btnExportPdf?.addEventListener("click", exportarPdf);

      function setBadge(node, text, kind){
        if (!node) return;
        node.className = kind;
        node.textContent = text;
      }

      function clearErrors(){
        errorsBox.style.display = "none";
        errorsBox.innerHTML = "";
        document.querySelectorAll("[aria-invalid='true']").forEach(x => x.removeAttribute("aria-invalid"));
      }
      function showErrors(errs){
        errorsBox.style.display = "block";
        errorsBox.innerHTML = `<strong>Revisa estos datos antes de calcular:</strong><ul>${errs.map(e => `<li>${e}</li>`).join("")}</ul>`;
      }

      function markInvalid(idOrEl){
        const node = typeof idOrEl === "string" ? el(idOrEl) : idOrEl;
        if (node) node.setAttribute("aria-invalid", "true");
      }

      function renderEmptyResults(){
        kpiCtn.textContent = "—";
        kpiExc.textContent = "—";
        if (kpiExcLabel) kpiExcLabel.textContent = "Excedente (CCI − CTN)";
        kpiExc.classList.remove("negative");
        kpiApo.textContent = "—";
        kpiExcT.textContent = "—";
        kpiRentaTotal.textContent = "—";
        distInfo.textContent = "—";
        setBadge(sufBadge, "—", "badge");
        if (btnExportPdf) btnExportPdf.disabled = true;
        tbody.innerHTML = `<tr><td colspan="9" class="muted">Ingrese los datos y presione <strong>Calcular</strong>.</td></tr>`;
      }

      function exportarPdf(){
        const hasResult = tbody && !tbody.textContent.includes("Ingrese los datos");
        if (!hasResult){
          alert("Primero debe calcular para exportar el resultado.");
          return;
        }
        const previousTitle = document.title;
        const now = new Date();
        const stamp = now.toISOString().slice(0, 10);
        if (printDate){
          printDate.textContent = `Fecha de emisión: ${now.toLocaleString("es-DO")}`;
        }
        document.title = `calculo-incremento-pension-${stamp}`;
        window.print();
        setTimeout(() => {
          document.title = previousTitle;
        }, 500);
      }

      function getChildrenInputs(){
        const n = Number(cantHijos.value || 0);
        const kids = [];
        for (let i=0;i<n;i++){
          const nac = document.querySelector(`[data-child="nac"][data-i="${i}"]`)?.value || "";
          const sexo = document.querySelector(`[data-child="sexo"][data-i="${i}"]`)?.value || "F";
          const disc = !!document.querySelector(`[data-child="disc"][data-i="${i}"]`)?.checked;
          kids.push({ nac, sexo, disc, idx: i+1 });
        }
        return kids;
      }

      function validar(){
        clearErrors();
        const errs = [];
        const ff = fechaFallecimiento.value;
        if (!ff){ errs.push("Debe indicar la fecha de fallecimiento del afiliado."); markInvalid("fechaFallecimiento"); }

        const spiVal = Number(spi.value);
        if (!(spiVal > 0)){ errs.push("SPI debe ser mayor que 0."); markInvalid("spi"); }

        const cciVal = Number(cci.value);
        if (!(cciVal > 0)){ errs.push("CCI debe ser mayor que 0."); markInvalid("cci"); }

        const aportesVal = aportes.value === "" ? 0 : Number(aportes.value);
        if (!Number.isFinite(aportesVal) || aportesVal < 0){ errs.push("Aportes voluntarios debe ser un número mayor o igual a 0."); markInvalid("aportes"); }

        if (!Number.isFinite(I_ANUAL) || I_ANUAL < 0){
          errs.push("La tasa técnica anual (i) no es válida. Use “Cambiar tasa” para corregirla.");
        }

        const hasSpouse = !!hayConyuge.checked;
        const kids = getChildrenInputs();
        const nKids = kids.length;

        if (hasSpouse){
          if (!nacConyuge.value){ errs.push("Debe indicar la fecha de nacimiento del cónyuge."); markInvalid("nacConyuge"); }
          if (!sexoConyuge.value){ errs.push("Debe seleccionar el sexo del cónyuge."); markInvalid("sexoConyuge"); }
          if (ff && nacConyuge.value){
            const y = mesesEntre(nacConyuge.value, ff);
            if (y === null){ errs.push("La fecha de nacimiento del cónyuge debe ser válida y anterior al fallecimiento."); markInvalid("nacConyuge"); }
          }
        }

        if (nKids > 0){
          for (let i=0;i<nKids;i++){
            const k = kids[i];
            const nacEl = document.querySelector(`[data-child="nac"][data-i="${i}"]`);
            if (!k.nac){
              errs.push(`Hijo ${k.idx}: debe indicar fecha de nacimiento.`);
              markInvalid(nacEl);
            } else if (ff){
              const m = mesesEntre(k.nac, ff);
              if (m === null){
                errs.push(`Hijo ${k.idx}: fecha de nacimiento inválida o posterior al fallecimiento.`);
                markInvalid(nacEl);
              }
            }
          }
        }

        if (!hasSpouse && nKids === 0){
          errs.push("Debe existir al menos un beneficiario (cónyuge y/o hijos).");
        }

        return { ok: errs.length === 0, errs };
      }

      function calcular(){
        setBadge(calcBadge, "Calculando…", "badge warn");
        btnCalcular.disabled = true;
        if (btnExportPdf) btnExportPdf.disabled = true;
        btnCalcular.textContent = "Calculando…";

        // Spinner breve (200ms) antes de calcular/renderizar
        setTimeout(() => {
          const v = validar();
          if (!v.ok){
            showErrors(v.errs);
            setBadge(calcBadge, "Hay validaciones", "badge bad");
            btnCalcular.disabled = false;
            btnCalcular.textContent = "Calcular";
            return;
          }
          clearErrors();

        const ff = fechaFallecimiento.value;
        const SPI = Number(spi.value);
        const CCI = Number(cci.value);
        const AP = aportes.value === "" ? 0 : Number(aportes.value);
        const hasSpouse = !!hayConyuge.checked;
        const kidsIn = getChildrenInputs();
        const nKidsTotal = kidsIn.length;

        // Distribución automática de b (según composición familiar)
        // - Solo cónyuge (sin hijos): b_conyuge = 1.00
        // - Cónyuge + N hijos: b_conyuge = 0.50, b_cada_hijo = 0.50/N
        // - Solo N hijos: b_cada_hijo = 1.00/N
        const bConyuge = hasSpouse ? (nKidsTotal > 0 ? 0.5 : 1.0) : 0;
        const bPoolHijos = nKidsTotal > 0 ? (hasSpouse ? 0.5 : 1.0) : 0;
        const bPorHijo = nKidsTotal > 0 ? (bPoolHijos / nKidsTotal) : 0;

        distInfo.textContent = hasSpouse
          ? (nKidsTotal > 0
              ? `Cónyuge b=${fmtNum(bConyuge,2)} · Cada hijo b=${fmtNum(bPorHijo,6)} (0.50 ÷ ${nKidsTotal})`
              : `Cónyuge b=${fmtNum(bConyuge,2)} · Sin hijos`)
          : `Sin cónyuge · Cada hijo b=${fmtNum(bPorHijo,6)} (1.00 ÷ ${nKidsTotal})`;

        const rows = [];

        // ===== Cónyuge =====
        if (hasSpouse){
          const sexo = sexoConyuge.value;
          const y = mesesEntre(nacConyuge.value, ff);
          const yInt = clampInt(y, 0, MAX_MESES);
          const nConyuge = yInt <= 600 ? 60 : (yInt <= 660 ? 72 : null);
          const VANU_A = nConyuge === null ? 0 : ayn13(sexo, yInt, nConyuge);
          const VANU_B = nConyuge === null ? ay13(sexo, yInt) : 0;
          const chosen = nConyuge === null
            ? { caso:"B (vitalicia)",  n:null,  VANU:VANU_B }
            : { caso:"A (temporaria)", n:nConyuge, VANU:VANU_A };
          chosen.CTN = SPI * P_SURV * bConyuge * chosen.VANU;

          // Piso garantizado: SPI * 0.60 * b (nunca disminuye)
          const rentaBase = SPI * P_SURV * bConyuge;

          rows.push({
            key: "CONYUGE",
            tipo: "Cónyuge",
            sexo,
            edadMeses: yInt,
            b: bConyuge,
            plazo: chosen.caso.startsWith("A") ? chosen.n : "Vitalicia",
            VANU: chosen.VANU,
            CTN: chosen.CTN,
            rentaBase,
            detalle: `y=${fmtInt(yInt)} · ${nConyuge === null ? `VANU_B=${fmtNum(VANU_B,6)}` : `VANU_A=${fmtNum(VANU_A,6)} (n=${fmtInt(nConyuge)})`} · Caso ${chosen.caso} · b=${fmtNum(bConyuge,2)}`,
          });
        }

        // ===== Hijos =====
        for (const kid of kidsIn){
          const h = mesesEntre(kid.nac, ff);
          const hInt = clampInt(h, 0, MAX_MESES);
          const sexo = kid.sexo;
          const isDisc = !!kid.disc;

          let VANU = 0;
          let CTN = 0;
          let rentaBase = 0;
          let plazo = "";
          let detalle = "";

          if (isDisc){
            VANU = ay13Disc(sexo, hInt);
            CTN = SPI * P_SURV * bPorHijo * VANU;
            rentaBase = SPI * P_SURV * bPorHijo;
            plazo = "Vitalicia";
            detalle = `Discapacidad: Sí · h=${fmtInt(hInt)} · VANU=ay(13) EMSSI 2007`;
          } else {
            const z = (21 * 12) - hInt; // 252 - h
            if (z <= 0){
              VANU = 0;
              CTN = 0;
              rentaBase = 0;
              plazo = "0";
              detalle = `Mayor de 21: z=${fmtInt(z)} → CTN=0`;
            } else {
              const f = fraccionMesHijo(kid.nac, ff);
              VANU = ahz13(sexo, hInt, z, f);
              CTN = SPI * P_SURV * bPorHijo * VANU;
              rentaBase = SPI * P_SURV * bPorHijo;
              plazo = String(z);
              detalle = `Discapacidad: No · h=${fmtInt(hInt)} · z=${fmtInt(z)} · f=${fmtNum(f,4)} · VANU=ahz(13)`;
            }
          }

          rows.push({
            key: `HIJO_${kid.idx}`,
            tipo: `Hijo ${kid.idx}${isDisc ? " (disc.)" : ""}`,
            sexo,
            edadMeses: hInt,
            b: bPorHijo,
            plazo,
            VANU,
            CTN,
            rentaBase,
            detalle,
          });
        }

        const CTN_TOTAL = rows.reduce((acc,r) => acc + (Number(r.CTN) || 0), 0);
        const excedenteBruto = CCI - CTN_TOTAL;
        const excedenteParaIncremento = excedenteBruto >= 0
          ? excedenteBruto + AP
          : (AP > 0 ? AP : 0);
        const excedenteVisible = excedenteBruto >= 0
          ? excedenteBruto
          : (AP > 0 ? AP : 0);

        // Incrementos
        const hayIncremento = excedenteParaIncremento > 0;
        let rentaNuevaTotal = 0;
        for (const r of rows){
          const inc = (hayIncremento && r.VANU > 0) ? (excedenteParaIncremento * r.b / r.VANU) : 0;
          r.incremento = inc;
          // Piso garantizado: nueva renta nunca puede ser menor que renta base
          r.rentaNueva = Math.max((r.rentaBase || 0), (r.rentaBase || 0) + inc);
          rentaNuevaTotal += r.rentaNueva || 0;
        }

        // KPIs
        kpiCtn.textContent = fmtMoney(CTN_TOTAL);
        kpiExc.textContent = fmtMoney(excedenteVisible);
        kpiApo.textContent = fmtMoney(AP);
        kpiExcT.textContent = fmtMoney(CCI);
        kpiRentaTotal.textContent = fmtMoney(rentaNuevaTotal);

        if (kpiExcLabel){
          kpiExcLabel.textContent = (excedenteBruto < 0 && AP > 0)
            ? "Excedente disponible (aportes voluntarios)"
            : "Excedente (CCI − CTN)";
        }
        kpiExc.classList.toggle("negative", excedenteBruto < 0 && AP === 0);
        kpiExcT.classList.toggle("negative", CCI < 0);

        // Animación KPIs
        document.querySelectorAll(".kpi").forEach((node, idx) => {
          node.classList.remove("show");
          setTimeout(() => node.classList.add("show"), 40 + idx * 80);
        });

        if (excedenteParaIncremento > 0 && excedenteBruto < 0 && AP > 0){
          setBadge(sufBadge, "Incremento por aportes voluntarios", "badge warn");
        } else if (excedenteParaIncremento > 0){
          setBadge(sufBadge, "Aplica incremento", "badge good");
        } else {
          setBadge(sufBadge, "No aplica incremento", "badge bad");
        }
        if (!hayIncremento){
          setBadge(calcBadge, "Sin excedente: sin incremento", "badge warn");
        } else {
          setBadge(calcBadge, "Calculado (con incremento)", "badge good");
        }

        // Tabla
        tbody.innerHTML = rows.map((r, idx) => {
          const edad = (r.edadMeses / 12).toFixed(1);
          const b = fmtNum(r.b, 6);
          const plazo = typeof r.plazo === "string" ? r.plazo : fmtInt(r.plazo);
          const VANU = fmtNum(r.VANU, 6);
          const CTN = fmtMoney(r.CTN);
          const rn = fmtMoney(r.rentaBase);
          const incVal = (r.incremento || 0);
          const inc = fmtMoney(incVal);
          const nr = fmtMoney(r.rentaNueva || 0);
          const incClass = incVal > 0 ? "incPos" : "";
          return `
            <tr style="animation: fadeUp 260ms ease both; animation-delay:${idx * 50}ms;">
              <td data-label="Beneficiario"><strong>${r.tipo}</strong><div class="muted small">Sexo: ${r.sexo}</div></td>
              <td data-label="Edad (años)" class="right mono">${edad}</td>
              <td data-label="Distribución de renta" class="right mono">${b}</td>
              <td data-label="Plazo (meses)" class="right mono">${plazo}</td>
              <td data-label="VANU" class="right mono">${VANU}</td>
              <td data-label="CTN" class="right mono">${CTN}</td>
              <td data-label="Renta normal" class="right mono">${rn}</td>
              <td data-label="Incremento" class="right mono ${incClass}">${inc}</td>
              <td data-label="Nueva renta" class="right mono"><span class="newRenta">${nr}</span></td>
            </tr>
          `;
        }).join("");

          if (btnExportPdf) btnExportPdf.disabled = false;
          btnCalcular.disabled = false;
          btnCalcular.textContent = "Calcular";
        }, 200);
      }

      // Estado inicial
      renderEmptyResults();

