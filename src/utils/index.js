const getInitialData = () => [
  {
    id: 1,
    title: "Pembahasan & Hasil",
    body: "Masukkan data hasil pengujian lab sifat fisis dan mekanis ke dalam BAB IV & BAB V uraikan pengujian sesuai tahapan",
    createdAt: "2022-03-25T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Analisis Saringan",
    body: "Untuk analisis saringan baiknya grafik penyebaran butiran dibuat sendiri-sendiri yang metode basah & hidrometer kemudian digabungkan",
    createdAt: "2022-03-25T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Rekapitulasi Pengujian",
    body: "untuk rekapitulasi hasil pengujian sifat fisis dan mekanisnya sudah ok tinggal ditambahkan sistem klasifikasi tanah saja",
    createdAt: "2022-08-10T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Mendeley",
    body: "Untuk mendeley sesuaikan style kutipan untuk di daftar pustaka sebaiknya mengunakan angka",
    createdAt: "2022-08-11T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "Grafik",
    body: "Untuk grafik hasil pengujian konsolidasi sampel TA - sampel P30 diberikan penjelasan agar pembaca mudah memahami maksud dari grafik",
    createdAt: "2022-08-11T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Font",
    body: "Untuk font ganti dari calibry menjadi times new roman karena kalau kalibry terlalu kentara hanya copy paste dari sumber lain",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
]

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate }
