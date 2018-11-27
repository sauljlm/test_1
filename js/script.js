const hamburguer = document.getElementById('btn_menu');
const menu = document.getElementById('menu');
let btn = false;
function  openMenu() {
    if (btn === false) {
        menu.style.display = "block";
        btn = true;
    }else if (btn === true) {
        menu.style.display = "none";
        btn = false;
    }
}
hamburguer.addEventListener('click', openMenu);