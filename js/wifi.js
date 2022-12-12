let wifi = [
  {
    id: 6,
    name: "5G WiFi Repeater for Long Range Wireless Wifi Extender Baku Baki",
    processor: "4 x external",
    speedRate: "1300Mbps",
    image:
      "https://i.postimg.cc/J0tdFWXJ/5-G-Wi-Fi-Repeater-for-Long-Range-Wireless-Wifi-Extender-Baku-Baki-1.jpg",
    price: "R900",
  },
  {
    id: 7,
    name: "ZTE-5G-indoor-router CPE MC801",
    processor: "Qualcomm Snapdragon X50",
    speedRate: "3.6Gbps",
    image: "https://i.postimg.cc/ZYfcMgVY/zte-5g-indoor-router-2156-1120.jpg",
    price: "R800",
  },
  {
    id: 8,
    name: "HUAWEI 5G CPE Pro 2",
    processor: "Balong 5000 chipset, Gigahome Wi-Fi chipset",
    speedRate: "3.6 Gbps/250 Mbps",
    image: "https://i.postimg.cc/GmPTZTdP/huawei-5-G.jpg",
    price: "R500",
  },
  {
    id: 9,
    name: "HTC 5G Hub",
    processor: "Qualcomm Snapdragon 855 (Snapdragon X50 5G Modem)",
    speedRate: "2.63 Gbps",
    image: "https://i.postimg.cc/Kzb2C4cT/5g-routers-HTC.jpg",
    price: "R400",
  },
];
localStorage.setItem("wifi", JSON.stringify(wifi));
let media = JSON.parse(localStorage.getItem("wifi"));

console.log(media);
function display2() {
  document.querySelector(".router").innerHTML = '';
  media.forEach((router) => {
    document.querySelector(".router").innerHTML += `
      <div class="card">
          <img src="${router.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${router.name}</h5>
      <p class="card-text">${router.processor}</p>
      <p class="card-text">${router.speedRate}</p>
      <p class="card-text">${router.price}</p>

     <a href="#" class="btn btn-danger"> Checkout</a>
    </div>
  </div>
      `;
  });
}
display2();

//FILTER(wifi)
let wifiItem = document.querySelector(".subject");
let girl = document.querySelector(".router");

wifiItem.addEventListener("keyup", ()=>{
  try{
    if(!wifiItem.value.length) throw "Enter a product name";
    media = media.filter((p) => {
      return p.name.toLowerCase().includes(wifiItem.value.toLowerCase());
    });
    if(!media.length) throw "This product doesn't exist";
    display2()
  } catch(data){
    girl.innerHTML = data;
  }
})
