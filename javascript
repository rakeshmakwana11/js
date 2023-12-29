
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".fa-bars").addEventListener("click",function(){

        document.querySelector(".mobile-menu").style.width="100%";
    });

    document.querySelector(".fa-xmark").addEventListener("click",function(){

        document.querySelector(".mobile-menu").style.width="0";
    });




});
