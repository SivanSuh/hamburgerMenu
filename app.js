const lines = document.querySelector(".lines");
const wrapper = document.querySelector(".wrapper");
const menu = document.querySelector(".menu");
wrapper.addEventListener("click", function(){
    menuFonk();
    lines.classList.toggle("active");
});

function menuFonk(){
    if(menu.style.display =="flex"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }
};