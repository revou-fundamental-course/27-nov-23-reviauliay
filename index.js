function hitungluas() {
    var angkaAlas = document.getElementById("alas");
    var angkaTinggi = document.getElementById("tinggi");
    var hasilLuas = document.getElementById("hasilLuas")

    hasilLuas.value = 1 / 2 * Number(angkaAlas.value) * Number(angkaTinggi.value);
}

function hitungkeliling() {
    var angkaSisi = document.getElementById("sisi");
    var hasilaKeliling = document.getElementById("hasilKeliling")

    hasilaKeliling.value = 3 * Number(angkaSisi.value);
}

function resetLuas() {
    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';
    document.getElementById("hasilLuas").value = '';
}

function resetKeliling(){
    document.getElementById("sisi").value='';
    document.getElementById("hasilKeliling").value='';
}