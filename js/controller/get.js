import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
  console.log(results);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NAMA_BANK#", value.nama_bank)
    .replace("#NAMA_NASABAH#", value.daftar.total_tagihan.biodata.nama_nasabah)
    .replace("#NAMA_NASABAH#", value.daftar.total_tagihan.total_tagihan)
    .replace("#NAMA_PENAGIH#", value.daftar.nama_penagih)
    // .replace("#NOHP#", value.absensi.biodata ? value.absensi.biodata.phonenumber : "#NOHP#")
    // .replace("#MATAKULIAH#", value.kategori.nama_mk)
    // .replace("#DOSEN#", value.kategori.pengampu ? value.kategori.pengampu.namadosen : "#DOSEN#")
    // .replace("#NOHPD#", value.kategori.pengampu.phonenumberd)
    // .replace("#JAMMASUK#", value.kategori.jadwal ? value.kategori.jadwal.jammasuk : "#JAMMASUK#")
    // .replace("#JAMKELUAR#", value.kategori.jadwal.jamkeluar)
    // .replace("#HARI#", value.kategori.jadwal.hari)
    // .replace("#HADIR#", value.absensi.jumlahkehadiran)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}