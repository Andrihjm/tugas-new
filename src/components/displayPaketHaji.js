async function displayPaketHaji() {
  const dataPaketHaji = await getDataHaji();

  const containerPaketHaji = document.getElementById("container");

  dataPaketHaji.cards.forEach((paket) => {
    const containerCard = document.createElement("div");
    containerCard.className = "containerCard";

    const containerImg = document.createElement("div");
    const image = document.createElement("img");
    image.className = "image";
    image.src = paket.image_thumbnail;

    const title = document.createElement("h4");
    title.textContent = paket.judul_paket;

    const kuotaTersedia = document.createElement("p");
    kuotaTersedia.textContent = `Kuota tersedia: ${paket.kuota_tersedia}`;

    const jadwalKeberangkatan = document.createElement("p");
    jadwalKeberangkatan.className = "jadwal-keberangkatan";

    const tanggalKeberangkatan = new Date(paket.jadwal_keberangkatan);
    const tanggal = tanggalKeberangkatan.getDate();
    const bulan = tanggalKeberangkatan.toLocaleString("id-ID", {
      month: "long",
    });
    const tahun = tanggalKeberangkatan.getFullYear();
    jadwalKeberangkatan.textContent = `${tanggal} ${bulan} ${tahun}`;

    const maskapaiPenerbangan = document.createElement("p");
    maskapaiPenerbangan.textContent = paket.maskapaiName;

    const hotelStart = document.createElement("p");
    hotelStart.textContent = "🌟".repeat(paket.hotel_star);

    const jumlahHari = document.createElement("p");
    jumlahHari.textContent = paket.jumlah_hari + " Hari";

    const mendarat = document.createElement("p");
    mendarat.textContent = paket.mendarat_di;

    const hargaPaket = document.createElement("p");
    hargaPaket.textContent = `Rp. ${Currency(paket.price_quad_basic)}`;

    containerImg.appendChild(image);
    containerImg.appendChild(title);

    containerCard.appendChild(containerImg);
    containerCard.appendChild(kuotaTersedia);
    containerCard.appendChild(jadwalKeberangkatan);
    containerCard.appendChild(maskapaiPenerbangan);
    containerCard.appendChild(jumlahHari);
    containerCard.appendChild(mendarat);
    containerCard.appendChild(hargaPaket);

    containerPaketHaji.appendChild(containerCard);
  });
}
displayPaketHaji();
