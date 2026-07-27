// Smooth Scroll

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});

// Button Alert

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Thank you for choosing Royal Stay Hotel!");

});

});