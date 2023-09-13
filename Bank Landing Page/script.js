// declare variables
const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

// to make the nav bar visible when user clicks on menu icon
const navbarToggleFunc = function(){
    navbarToggleBtn.classList.toggle ('active');
    navbarNav.classList.toggle ('active');
} 
// calling that function
navbarToggleBtn.addEventListener('click',navbarToggleFunc);

//rgb(234, 207, 250);   //rgb(80, 6, 89);