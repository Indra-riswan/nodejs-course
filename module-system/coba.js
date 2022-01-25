function cetakNama (nama){
    return `halo nama saya ${nama}`;
}

const PI = 3.17;

const mahasiswa = {
    nama: `indra maulana riswan`,
    umur: 24,
    cetakmhs(){
        return `halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
}