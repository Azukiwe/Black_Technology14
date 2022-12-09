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
];
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
  document.querySelector("tbody").innerHTML = "";
  create.forEach((table) => {
    document.querySelector("tbody").innerHTML += `
    <tr>
    <td class="no">${table.id}</td>
    <td id="name">${table.productName}</td>
    <td id="chip">${table.processor}</td>
    <td id="price">${table.price}</td>
    <td id="color">${table.color}</td>
    <button type="button" class="btn btn-primary" id="editBtn" onclick="btnE" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fa-solid fa-pen-to-square"></i>
  
</button>
    <td><button type="button" class="btn btn-danger" class="trash" id="bin" onclick="deleteBtn(this)" ><i class="fa-solid fa-trash"></i></button></td>   
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

/////////EDIT MODAL//////
function editModal(q){
  console.log(q)
  console.log(create[q])
  let info = create[q]
  console.log(info.create)
  document.querySelector("#editId").value = info.id
  document.querySelector("#editName").value = info.productName
  document.querySelector("#editChip").value = info.processor
  document.querySelector("#editColor").value = info.color
  document.querySelector("#editPrice").value = info.price
}
document.getElementById("editBtn").addEventListener("click",(btnE));
