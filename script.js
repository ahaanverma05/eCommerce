function removebtn() {
    var removebutton = document.getElementsByClassName("removeitems");
    for(var i = 0; i<removebutton.length; i++) {
        var singlebtn = removebutton[i];
        singlebtn.addEventListener("click", (e)=>{
            var targetBtn = e.target;
            targetBtn.parentElement.parentElement.remove();
            updatePrice()
        })
    }
}
removebtn();

function updatePrice() {
    var total = 0;
    var cartQuantity = document.getElementsByClassName("cart-quantity");
    var cartPrice = document.getElementsByClassName("cart-price");
    for(var i = 0; i<cartPrice.length; i++) {
        var singlePrices = cartPrice[i].innerText.replace("Rs ", "");
        singlePrices = parseInt(singlePrices.replace(",",""));

        var singleQuantity = cartQuantity[i].value;

        total = total+singlePrices*singleQuantity;
    }
    document.querySelector(".totalprice").innerHTML="Total: Rs " + total;
}
updatePrice()
document.getElementById("ibferju").addEventListener("input", (e)=> {
    updatePrice();
})
document.getElementById("hibdh").addEventListener("input", (e)=> {
    updatePrice();
})