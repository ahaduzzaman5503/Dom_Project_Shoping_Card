document.getElementById("frist_card").addEventListener("click",function(){
    const pProductName =   document.getElementById("frist_name").innerText;
    const pProductPrice = document.getElementById("first_price").innerText;
    const pProductQuantity = document.getElementById("frist_quantity").innerText;
    const pPriceTotal = parseInt(pProductPrice) * parseInt(pProductQuantity);

    displayData(pProductName, pProductPrice, pProductQuantity, pPriceTotal)
    disableButton("frist_card")
})

function displayData(productName, productPrice, productQuantity, priceTotal){
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
}

document.getElementById("second_card").addEventListener("click", function(e){
       const sProductName = e.target.parentNode.parentNode.children[0].innerText;
       const sProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
       const sProductQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
       const sProductTotal = parseInt(sProductPrice) + parseInt(sProductQuantity);

       displayData(sProductName, sProductPrice, sProductQuantity, sProductTotal)
       disableButton("second_card")
})

document.getElementById("third_card").addEventListener("click",function(){
    const tProductName =   document.getElementById("third_name").innerText;
    const tProductPrice = document.getElementById("third_price").innerText;
    const tProductQuantity = document.getElementById("third_quantity").innerText;
    const tPriceTotal = parseInt(tProductPrice) - parseInt(tProductQuantity);

    displayData(tProductName, tProductPrice, tProductQuantity, tPriceTotal)
    disableButton("third_card")
})

document.getElementById("four_card").addEventListener("click", function(e){
    const fProductName = e.target.parentNode.parentNode.children[0].innerText;
    const fProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const fProductQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const fProductTotal = parseInt(fProductPrice) / parseInt(fProductQuantity);

    displayData(fProductName, fProductPrice, fProductQuantity, fProductTotal)
    disableButton("four_card")
})

document.getElementById("last_card").addEventListener("click", function(){
    const lProductName = document.getElementById("last_name").innerText;
    const lProductPrice = document.getElementById("last_price").value;
    const lProductQuantity = document.getElementById("last_quantity").value;

    const lPriceTotal = parseInt(lProductPrice) / parseInt(lProductQuantity);

    displayData(lProductName, lProductPrice, lProductQuantity, lPriceTotal)
    disableButton('last_card')
})


function disableButton(id) {
    document.getElementById(id).setAttribute("disabled", true)
}