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
    .replace("#LOKASI_BANK#", value.lokasi)
    .replace("#NAMA_NASABAH#", value.daftar.total_tagihan.biodata.nama_nasabah)
    .replace("#PHONE_NUMBER#", value.daftar.total_tagihan.biodata.phone_number)
    .replace("#EMAILN#", value.daftar.total_tagihan.biodata.email)
    .replace("#TAGIHAN#", value.daftar.total_tagihan.total_tagihan)
    .replace("#TANGGAL#", value.daftar.total_tagihan.tanggal_jatuhtempo)
    .replace("#DESKRIPSI#", value.daftar.total_tagihan.deskripsi)
    .replace("#STATUS#", value.daftar.total_tagihan.status)
    .replace("#NAMA_PENAGIH#", value.daftar.nama_penagih)
    .replace("#NO_HP#", value.daftar.phone_number)
    .replace("#EMAILP#", value.daftar.email)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}