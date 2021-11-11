const menuSection = document.getElementById('menu-section');
const burgerDiv = document.getElementById('burger-div');
 

burgerDiv.addEventListener('click', showMenu);
e.preventDefault()
function showMenu (){
    menuSection.classList.toggle('show');
}
showMenu()