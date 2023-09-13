//when scrolling nav background will be stable and has white background
let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow",window.scrollY > 0)
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
//to open only which is clicked and others to get hidden
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
