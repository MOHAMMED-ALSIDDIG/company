const barmenu=document.querySelector('.bar-menu');
const navmenu=document.querySelector('.nav-menu')
barmenu.addEventListener('click',mobileMenu);
function mobileMenu(){
    barmenu.classList.toggle('active');
    navmenu.classList.toggle('active');
}
// close Menu
const navlink=document.querySelectorAll('.nav-link');
navlink.forEach(n => n.addEventListener('click',closeMenu));
function closeMenu() {
    barmenu.classList.remove('active');
    navmenu.classList.remove('active');
}