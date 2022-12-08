//SAMPLE DATA
let create = [
  {
    id: 1,
    name: "ZTE-5G-indoor-router CPE MC801",
    processor: "Qualcomm Snapdragon X50",
    price: "R800",
    color: "white",
  },
  {
    id: 2,
    name: "Iphone 13",
    processor: "A15 Bionic chip",
    price: "R20 000",
    color: "black",
  },
  {
    id: 3,
    name: "Vivo S6 5G",
    processor: "Exynos 980",
    price: "R5 000",
    color: "Blue",
  },
];

document.querySelector(".model").id = "hideModal";

let btnShowModal = document.querySelector(".showModal");
btnShowModal.addEventListener("click", () => {
  showModal();
});

function showModal() {
  document.querySelector(".model").id = "showModal";
}
document.querySelector(".admin");
