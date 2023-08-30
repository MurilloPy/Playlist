const imageArrow = document.getElementById("arrow");
const biblioteca = document.querySelector(".biblioteca");
const menuDropdown = document.getElementById("menuDropdown");



biblioteca.addEventListener("click", ()=>{

    imageArrow.classList.toggle("open");
    imageArrow.classList.toggle("arrowRotate");

});

/* STOP */
menuDropdown.addEventListener("click", ()=>{

    menuDropdown.classList.toggle("open");
    menuDropdown.classList.toggle("showDropdown");


});
/* STOP */