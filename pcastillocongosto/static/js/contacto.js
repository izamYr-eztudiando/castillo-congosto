document.addEventListener('DOMContentLoaded', function () {
    const si = document.getElementById('es_espana_si');
    const no = document.getElementById('es_espana_no');
    const contProv = document.getElementById('provincia-container');
    const selProv = document.getElementById('provincia');
    const contNo = document.getElementById('lugar-no-container');
    const inpNo = document.getElementById('lugar_no');
    const hiddenLugar = document.getElementById('lugar_hidden');
    const contTelEs = document.getElementById('telefono-espana');
    const inpTelEs = document.getElementById('telefono-es');
    const contTelExt = document.getElementById('telefono-extranjero');
    const inpTelExt = document.getElementById('telefono-ext');
    const hiddenTelefono = document.getElementById('telefono_final');

    function updateLugar() {
        if (si.checked) {
            hiddenLugar.value = selProv.value;
        } else if (no.checked) {
            hiddenLugar.value = inpNo.value.trim();
        } else {
            hiddenLugar.value = '';
        }
    }

    function updateTelefono() {
        if (si.checked) {
            // Solo número sin prefijo porque el prefijo lo muestras fijo en HTML
            hiddenTelefono.value = inpTelEs.value.trim();
        } else if (no.checked) {
            // Teléfono completo con prefijo extranjero
            hiddenTelefono.value = inpTelExt.value.trim();
        } else {
            hiddenTelefono.value = '';
        }
    }

    function toggleLugarTel() {
        if (si.checked) {
            contProv.style.display = 'block';
            contNo.style.display = 'none';
            contTelEs.style.display = 'block';
            contTelExt.style.display = 'none';
        } else if (no.checked) {
            contProv.style.display = 'none';
            contNo.style.display = 'block';
            contTelEs.style.display = 'none';
            contTelExt.style.display = 'block';
        } else {
            contProv.style.display = 'none';
            contNo.style.display = 'none';
            contTelEs.style.display = 'none';
            contTelExt.style.display = 'none';
        }
        updateLugar();
        updateTelefono();
    }

    si.addEventListener('change', toggleLugarTel);
    no.addEventListener('change', toggleLugarTel);
    selProv.addEventListener('change', updateLugar);
    inpNo.addEventListener('input', updateLugar);
    inpTelEs.addEventListener('input', updateTelefono);
    inpTelExt.addEventListener('input', updateTelefono);

    toggleLugarTel();  // Ejecuta al cargar para mostrar lo correcto
});