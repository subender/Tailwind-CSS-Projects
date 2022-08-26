// const boxs = document.querySelectorAll(".dnd");

// boxs.forEach(box => box.style.display="none");

// const test = async () => {
//   const response = await fetch("https://designfile-4.azurewebsites.net/api/design?version=1");
//   const data = await response.json(); 
//   console.log(data);
// }

// fetch('https://randomuser.me/api')
//    .then( response => response.json() )
//    .then( data => console.log(data.results[0].gender) )


//    const scr = document.createElement('script');

// scr.setAttribute('src','https://www.w3schools.com/js/myScript.js');

// document.body.appendChild(scr);



function changeColor (){
   const cards = document.querySelectorAll(".plan");
   cards.forEach(card=>{
      card.classList.remove('plan--light');
      card.classList.add('plan--accent');
      console.log("test");
})}