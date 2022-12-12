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
  document.querySelector(".fown").innerHTML ='';
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

//Filter(phone)
let phoneItem = document.querySelector(".gear");
let boy = document.querySelector(".fown");

phoneItem.addEventListener("keyup", ()=>{
  try{
    if(!phoneItem.value.length) throw "Enter a product name";
    products = products.filter((j) => {
      return j.name.toLowerCase().includes(phoneItem.value.toLowerCase());
    });
    if(!products.length) throw "This product doesn't exist";
    display1()
  } catch(data){
    boy.innerHTML = data;
  }
})
