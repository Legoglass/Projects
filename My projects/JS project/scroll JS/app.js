const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links-container");
const scrollLink = document.querySelector(".links");
const onScroll = document.querySelector("nav-center")

//show nav-bar
navToggle.addEventListener("click" , function(){
    links.classList.toggle("links-mobile")

})
//close nav-bar when you press a section ''ex : HOME "
scrollLink.addEventListener("click" , function(){

   links.classList.toggle("links-mobile")
})

//fade on scroll at nav-bar and home btn

window.onscroll = function () {
    scrollFunction();
    btnFunction();
    }

function scrollFunction() {
    if(document.documentElement.scrollTop > 100){
        document.getElementById("nav-bar").classList.add("test");
    }

    else{
        document.getElementById("nav-bar").classList.remove("test");
    }
}

function btnFunction() {
    if(document.documentElement.scrollTop > 700){
    document.getElementById("btn-H").classList.add("show-link");
    }

    else{
      document.getElementById("btn-H").classList.remove("show-link")
    }
    
};