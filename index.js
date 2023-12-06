function hitungluas() {
    var angkaAlas = document.getElementById("alas");
    var angkaTinggi = document.getElementById("tinggi");
    var hasilLuas = document.getElementById("hasilLuas")

    hasilLuas.value = 1 / 2 * Number(angkaAlas.value) * Number(angkaTinggi.value);
}

function hitungkeliling() {
    var angkaSisi1 = document.getElementById("sisi1");
    var angkaSisi2 = document.getElementById("sisi2");
    var angkaSisi3 = document.getElementById("sisi3");
    var hasilKeliling = document.getElementById("hasilKeliling")

    hasilKeliling.value = Number(angkaSisi1.value) + Number(angkaSisi2.value) + Number(angkaSisi3.value);
}

function resetLuas() {
    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';
    document.getElementById("hasilLuas").value = '';
}

function resetKeliling(){
    document.getElementById("sisi1").value='';
    document.getElementById("sisi2").value='';
    document.getElementById("sisi3").value='';
    document.getElementById("hasilKeliling").value='';
}
