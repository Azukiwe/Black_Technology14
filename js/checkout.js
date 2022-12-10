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
let checkItem = JSON.parse(localStorage.getItem("create"));
async function outItem() {
  // document.querySelector("tbody").innerHTML = "";
  create.forEach((table) => {
    console.log(create);
    document.querySelector(".prods").innerHTML += `
    <tr>
    <td class="no">${table.product}</td>
    <td id="name">${table.quantity}</td>
    <td id="price">${table.price}</td>
    
    
    <button type="button" class="btn" id="clearBtn" onclick="edit Modal(${table.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fa-sharp fa-solid fa-xmark"></i>`;
  })
}
outItem()
function clearSum(){
    document.getElementById("#remove").value =" ";
}