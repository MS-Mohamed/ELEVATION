
let bars = document.getElementById("bars");
let close = document.getElementById("close");
let listphone = document.getElementById("list-phone");

bars.addEventListener("click" , function(){
    listphone.style.display="block"
})

close.addEventListener("click" , function(){
    listphone.style.display="none"
})