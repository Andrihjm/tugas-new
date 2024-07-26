// const content = document.getElementById("filter-bulan");
// const nextYear = new Date().getFullYear();
// const resultDiv = document.getElementById("result");

// const months = [
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember",
// ];

// let openedMonthList = null;

// function createMonthList() {
//   const monthList = document.createElement("ul");
//   for (let j = 0; j < months.length; j++) {
//     const monthItem = document.createElement("li");
//     monthItem.textContent = months[j];
//     monthList.appendChild(monthItem);
//   }
//   return monthList;
// }

// function closeOpenedMonthList() {
//   // Handle ketika user memilik tahun lain maka monthList akan hilang
//   if (openedMonthList) {
//     openedMonthList.remove();
//     openedMonthList = null;
//   }
// }

// function toggleMonthList(yearElement) {
//   closeOpenedMonthList();

//   const monthList = createMonthList();
//   yearElement.appendChild(monthList);
//   openedMonthList = monthList;
// }

// for (let i = 0; i < 5; i++) {
//   const currentYear = nextYear + i;

//   const yearElement = document.createElement("p");
//   yearElement.textContent = currentYear;

//   yearElement.addEventListener("click", () => {
//     if (openedMonthList && openedMonthList.parentNode === yearElement) {
//       closeOpenedMonthList();
//     } else {
//       toggleMonthList(yearElement);
//     }
//   });

//   content.appendChild(yearElement);
// }

const container = document.getElementById("filter-bulan");
const tahunSekarang = new Date().getFullYear();

function untukBeberapaTahunKeDepan() {
  // Looping Tahun
  for (let tahun = 0; tahun < 5; tahun++) {
    const hasilLooping = tahunSekarang + tahun;

    // Membuat container card
    const yearContainer = document.createElement("div");
    yearContainer.className = "year-container";

    const year = document.createElement("span");
    year.textContent = hasilLooping;

    year.addEventListener("click", () => {
      // Tutup daftar bulan dari tahun sebelumnya
      const bulanContainers = container.querySelectorAll(".bulan-container");
      bulanContainers.forEach((bulanContainer) => {
        bulanContainer.remove();
      });

      TampilkanBulan(yearContainer, hasilLooping);
    });

    yearContainer.appendChild(year);
    container.appendChild(yearContainer);
  }
}

// Format Bulan
function formatNamaBulan(bulan, tahun) {
  const date = new Date(tahun, bulan);
  return date.toLocaleString("id-ID", { month: "long" });
}

// Looping bulan
function TampilkanBulan(yearContainer, tahun) {
  const containerBulan = document.createElement("div");
  containerBulan.classList.add("bulan-container");

  for (let bulan = 0; bulan < 12; bulan++) {
    const month = document.createElement("span");
    month.textContent = formatNamaBulan(bulan, tahun);
    month.classList.add("bulan");
    containerBulan.appendChild(month);
  }

  yearContainer.appendChild(containerBulan);
}

untukBeberapaTahunKeDepan();
