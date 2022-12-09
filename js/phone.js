//

let phones = [
  {
    id: 1,
    name: "Vivo S6 5G",
    Processor: "Exynos 980",
    Ram: " 8 GB",
    Storage: "128 GB, 256 GB",
    Display: "6.44 inches",
    Camera: "Quad Camera",
    Battery: "Li-Po 4500 mAh battery",
    image:
      "https://i.postimg.cc/RZX0LMwP/Original-Global-Version-Mobilephone-for-Vivo-S6-Cell-Phone-5g-HD-Camera-Fingerprint-Mobile-Phones-re.png",
  },
  {
    id: 2,
    name: "Oppo Reno5 5G",
    Processor: "Qualcomm Snapdragon 765G",
    Ram: "8/12 GB",
    Storage: "128/256 GB",
    Display: "6.4 inches",
    Camera: "64mp",
    Battery: "Li-Po 4300mAh ",
    image:
      "https://i.postimg.cc/Z539PkV2/Renault-5-opens-the-OPPO-Exchange-program-for-adding-old-removebg-preview.png",
  },
  {
    id: 3,
    name: "ZTE Axon 11 SE 5G",
    Processor: "MediaTek MT6873",
    Ram: "6GB",
    Storage: "256GBvs84.77GB",
    Display: "6.53 inches",
    Camera: "48mp",
    Battery: "4000mAh",
    image:
      "https://i.postimg.cc/RFc5GRjM/ZTE-AXON-11-SE-5-G-1-removebg-preview.png",
  },
  {
    id: 4,
    name: "Iphone 13",
    Processor: "A15 Bionic chip",
    Ram: "4GB",
    Storage: "",
    Display: "6.1 inches",
    Camera: "12mp",
    Battery: "3240mAh",
    image: "https://i.postimg.cc/3RjV2wvN/iphone-removebg-preview.png",
  },
  {
    id: 5,
    name: "Iphone 13 Pro Max",
    Processor: "A15 Bionic chip",
    Ram: "6GB",
    Storage: "",
    Display: "6.7 inches",
    Camera: "12mp",
    Battery: "4352mAh",
    image: "https://i.postimg.cc/05YPCksp/61-Cgls-5f-L-removebg-preview.png",
  },
];
let products = JSON.parse(localStorage.getItem("phones"));

function display1() {
  products.forEach((cell) => {
    document.querySelector(".fown").innerHTML += `<ul>
    <li >Name:${cell.name}</li>
    <li><i class="fa-solid fa-microchip"></i>Processor: ${cell.Processor}</li>
    <li><i class="fa-solid fa-memory"></i> Ram: ${cell.Ram}</li>
    <li><i class="fa-solid fa-usb-drive"></i> Storage: ${cell.Storage}</li>
    <li><i class="fa-solid fa-display"></i> Display: ${cell.Display}</li>
    <li ><i class="fa-solid fa-camera"></i> Camera: ${cell.Camera}</li>
    <li><i class="fa-solid fa-battery-three-quarters"></i> Battery: ${cell.Battery}</li>
    </ul> 
    <img src="${cell.image}"> `;
  });
}
display1();

// let wifi = [
//   {
//     id: 6,
//     name: "5G WiFi Repeater for Long Range Wireless Wifi Extender Baku Baki",
//     processor: "4 x external",
//     speedrate: "1300Mbps",
//     image:
//       "https://i.postimg.cc/J0tdFWXJ/5-G-Wi-Fi-Repeater-for-Long-Range-Wireless-Wifi-Extender-Baku-Baki-1.jpg",
//     price: "R900",
//   },
//   {
//     id: 7,
//     name: "ZTE-5G-indoor-router CPE MC801",
//     processor: "Qualcomm Snapdragon X50",
//     speedrate: "3.6Gbps",
//     image: "https://i.postimg.cc/ZYfcMgVY/zte-5g-indoor-router-2156-1120.jpg",
//     price: "R800",
//   },
//   {
//     id: 8,
//     name: "HUAWEI 5G CPE Pro 2",
//     processor: "Balong 5000 chipset, Gigahome Wi-Fi chipset",
//     speedrate: "3.6 Gbps/250 Mbps",
//     image: "https://i.postimg.cc/GmPTZTdP/huawei-5-G.jpg",
//     price: "R500",
//   },
//   {
//     id: 9,
//     name: "HTC 5G Hub",
//     processor: "Qualcomm Snapdragon 855 (Snapdragon X50 5G Modem)",
//     speedRate: "2.63 Gbps",
//     image: "https://i.postimg.cc/Kzb2C4cT/5g-routers-HTC.jpg",
//     price: "R400",
//   },
// ];
// let media = JSON.parse(localStorage.getItem("wifi"));

// console.log(media);
// function display2() {
//   media.forEach((router) => {
//     document.querySelector(".router").innerHTML += `
//     <div class="card" style="width: 18rem;">
//   <img src="${router.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${router.name}</h5>
//     <p class="card-text">${router.processor}</p>
//     <p class="card-text">${router.speedRate}</p>
//     <p class="card-text">${router.price}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `;
//   });
// }
// display2();
