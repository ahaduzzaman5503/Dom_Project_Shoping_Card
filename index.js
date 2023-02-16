console.log("Sopping card connexted");

document.getElementById("frist_card").addEventListener("click",function(){
    const productName =   document.getElementById("frist_name").innerText;
    const productPrice = document.getElementById("first_price").innerText;
    const productQuantity = document.getElementById("frist_quantity").innerText;
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  console.log(productName, productPrice, productQuantity, priceTotal);
    
  const container = document.getElementById("table_container");
  
  
  const tr = document.createElement("tr");
  tr.innerHTML= `
  <td>${1}</td>
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${productQuantity}</td>
  <td>${priceTotal}</td>
  `
  container.appendChild(tr)
  })