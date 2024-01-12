const reviews = [{
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img:'photo/persone-4.jpg' , 
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},
{
    id: 2,
    name: 'Anna Johnson',
    job: 'UX Designer',
    img: 'photo/persone 2.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'Intern',
    img: 'photo/persone 1.WEBP',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'The Boss',
    img: 'photo/persone-3.png',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]


// Select items

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("description");

const prevBtn = document.querySelector(".prev-btn");
const fwBtn = document.querySelector(".fw-btn");
const rdBtn = document.querySelector(".rd-btn");

//set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
});

//show persone based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    job.textContent = item.job;
    name.textContent = item.name;
    description.textContent = item.text;
}

// show next person

fwBtn.addEventListener('click' , function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
 
//show prev person

prevBtn.addEventListener('click' , function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

//show random person

rdBtn.addEventListener('click' , function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
})