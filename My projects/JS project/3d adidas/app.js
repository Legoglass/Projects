//movment animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items

const title = document.querySelector(".title");
const description = document.querySelector(".description p");
const sneaker = document.querySelector(".sneaker");
const btn = document.querySelector(".btn-container");
const purchase = document.querySelector(".purchase");
//Moving Animation Event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
  });

//animation IN
container.addEventListener('mouseenter' , e =>{
    card.style.transition = "none" ; 
    //popout
    title.style.transform ="translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    sneaker.style.transform = "translateZ(200px) rotatez(-45deg)";
    btn.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

})


//Animation OUT
container.addEventListener('mouseleave', e => { 
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)"; 
    title.style.transform ="translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotatez(0deg)";
    btn.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});