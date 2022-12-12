
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
