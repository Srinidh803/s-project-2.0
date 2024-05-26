a="";
function removebtn(){
    alert('remove');
}
var qt=document.getElementsByClassName('qt');
function addbtn(a){
    if (a === "chicken"){
        var qtChicken = document.querySelector('#qt-chicken');
        qtChicken.innerHTML = parseInt(qtChicken.innerHTML) + 1;
        priceup("chicken");
    }
}
function subbtn(a){
    if (a === "chicken"){
        var qtChicken = document.querySelector('#qt-chicken');
        if (parseInt(qtChicken.innerHTML) > 0){
            qtChicken.innerHTML = parseInt(qtChicken.innerHTML) - 1;
        }else{
            qtChicken.innerHTML = parseInt(qtChicken.innerHTML);
        }
        pricedown("chicken");
    }

}
function priceup(name){
    if (name === "chicken") {
        var qtChicken = document.querySelector('#qt-chicken');
        var priceChicken = document.querySelector('#price-chicken');
        priceChicken.innerHTML = parseInt(qtChicken.innerHTML) * parseInt(priceChicken.innerHTML);
    }
}
function pricedown(name){
    if (name === "chicken") {
        var qtChicken = document.querySelector('#qt-chicken');
        var priceChicken = document.querySelector('#price-chicken');
        priceChicken.innerHTML = parseInt(qtChicken.innerHTML) / parseInt(priceChicken.innerHTML);
    }
}

function checkoutbtn(){
    alert('checkout');
}
