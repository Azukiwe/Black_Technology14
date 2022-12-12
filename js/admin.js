//SAMPLE DATA
let create = [
  {
    id: 1,
    productName: "ZTE-5G-indoor-router CPE MC801",
    processor: "Qualcomm Snapdragon X50",
    price: "R800",
    color: "white",
  },
  {
    id: 2,
    productName: "Iphone 13",
    processor: "A15 Bionic chip",
    price: "R20 000",
    color: "black",
  },
  {
    id: 3,
    productName: "Vivo S6 5G",
    processor: "Exynos 980",
    price: "R5 000",
    color: "Blue",
  },
  {
    id: 4,
    productName: "Oppo Reno5 5G",
    processor: "Qualcomm Snapdragon 765G",
    price: "R3 549",
    color: "grey",
  },
  {
    id: 5,
    productName: "Iphone 13 Pro Max",
    processor: "A15 Bionic chip",
    price: "R38 999",
    color: "Pink",
  },
  {
    id: 6,
    productName: "ZTE Axon 11 SE 5G",
    processor: "MediaTek MT6873",
    price: "R599",
    color: "Blue",
  },
  {
    id: 7,
    productName: "HTC 5G Hub",
    processor:"Qualcomm Snapdragon 855 (Snapdragon X50 5G Modem)",
    price: "R1 999",
    color: "black",
  },
  {
    id: 8,
    productName: "HUAWEI 5G CPE Pro 2",
    processor: "Balong 5000 chipset, Gigahome Wi-Fi chipset",
    price: "R799",
    color: "Grey",
  },
  {
    id: 9,
    productName: "5G WiFi Repeater for Long Range Wireless Wifi Extender Baku Baki",
    processor: "4 x external",
    price: "R1 399",
    color: "White",
  },
];
localStorage.setItem("create", JSON.stringify(create));
//////////////////////MODAL /////////////////
document.querySelector(".model").id = "hideModal";

let btnShowModal = document.querySelector(".showModal");
btnShowModal.addEventListener("click", () => {
  showModal();
});

function showModal() {
  document.querySelector(".model").id = "showModal";
}
//*********************************************** */
///////////////////TABLE///////////

let tableList = JSON.parse(localStorage.getItem("create"));
async function getTable() {
  // document.querySelector("tbody").innerHTML = "";
  create.forEach((table) => {
    console.log(create);
    document.querySelector(".prods").innerHTML += `
    <tr>
    <td class="no">${table.id}</td>
    <td id="name">${table.productName}</td>
    <td id="chip">${table.processor}</td>
    <td id="price">${table.price}</td>
    <td id="color">${table.color}</td>
    
    <td><button type="button" class="btn" id="editBtn" onclick="edit  data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fa-solid fa-pen-to-square"></i></button></td>
  

    <td><button type="button" class="btn" class="trash" id="bin" onclick="deleteBtn(this)" ><i class="fa-solid fa-trash"></i></button></td>   
    </tr>`;
  });
}
getTable();
//******************************* */
// function deleteBtn(item){
//   console.log(item)
//   try{
//     let deal= products.filter(product =>{
//       return item !== product.id
//     });
//     console.log(newProducts)
//     localStorage.setItem('products', JSON.stringify(newProducts));
//     console.log(JSON.parse(localStorage.getItem('products')));
//     displayProducts()
//   }
//   catch(error){
//     console.log(error);
//   }
// }

//Delete
let g = document.querySelector("#bin");
function deleteBtn(r) {
  let id = document.querySelector(".no").value;
  let productName = document.querySelector("#name").value;
  let processor = document.querySelector("#chip").value;
  let price = document.querySelector("#price").value;
  let color = document.querySelector("#color").value;
  let editC = document.querySelector("#editBtn").value;
  let p = r.parentNode.parentNode.rowIndex;
  document.getElementById("tableData").deleteRow(p);
  // create.slice(0,-1)
  create.pop({
    id,
    productName,
    processor,
    price,
    color,
  });
  localStorage.setItem("create", JSON.stringify(create));
}

/////////ADD ITEMS/////////////////
let add = (e) => {
  e.preventDefault();
  let id = document.querySelector("#no").value,
    productName = document.querySelector(".pName").value,
    processor = document.querySelector(".chip").value,
    color = document.querySelector(".color").value,
    price = document.querySelector(".price").value;
  create.push({
    id,
    productName,
    processor,
    price,
    color,
  });
  localStorage.setItem("create", JSON.stringify(create));
  getTable();
};
document.getElementById("add").addEventListener("click", add);

///UPDATE
let q=0
function updateItems(q){
  let info =create[q -1];
  console.log(info);
  document.querySelector("#editId").value = info.id;
  document.querySelector("#editName").value = info.productName;
  document.querySelector("#editChip").value = info.processor;
  document.querySelector("#editColor").value = info.color;
  document.querySelector("#editPrice").value = info.price;
  q = 1;
}

/////////EDIT MODAL//////
function editModal() {
  let info = create[q-1];
  console.log(info);
  document.querySelector("#editId").value = info.id;
  document.querySelector("#editName").value = info.productName;
  document.querySelector("#editChip").value = info.processor;
  document.querySelector("#editColor").value = info.color;
  document.querySelector("#editPrice").value = info.price;
}
localStorage.setItem("".JSON.stringify(create));
getTable()

//SORT ITEMS
function sorttbl() {
  create.sort();
  create.sort((a, b) => {
    if (a.productName.toLowerCase() < b.productName.toLowerCase()) return -1;
    if (a.productName.toLowerCase() > b.productName.toLowerCase()) return 1;
    return 0;
  });
  localStorage.setItem("create", JSON.stringify(create));
  document.querySelector(".prods").innerHTML = "";
  getTable();
}

console.log(create);

//checkout
let array= localStorage.getItem("create",JSON.stringify(create));
let checkout=[]
localStorage.setItem("outItem",JSON.stringify(checkout));
let shop= JSON.parse(localStorage.getItem("outItem"));

function addShop(k){
    if (shop.includes(tableList[k])){
        tableList[k].quantity++;
        localStorage.setItem("shop",JSON.stringify(cart));
    }
    else {
        tableList[k].quantity=1;
    shop.push(tableList[k]);
localStorage.setItem("shop",JSON.stringify(shop))
}
}


