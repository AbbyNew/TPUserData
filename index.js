// ON s'occupe du nom
const changeName = document.getElementById("name");
// EVENEMENT: 
changeName.addEventListener("input", (eventName) => {
  eventName.preventDefault() ; 
  const resultName = document.getElementById("res-name");
  resultName.innerText = eventName.target.value;
});

// ON s'occupe de la liste
const changeGender = document.querySelector("#gender"); // (Pour changer de document.getElementById('gender') ; )

// EVENEMENT: 
changeGender.addEventListener("change", (eventList) => {
  const resultGender = document.getElementById("res-gender");
  // Pour afficher la value:
  //resultGender.innerText = eventList.target.value ;
  // Pour afficher le texte:
  const indiceList = eventList.target.selectedIndex;
  resultGender.innerText = eventList.target.options[indiceList].innerText;
  
  // On change la couleur du div result
  let partieResult = document.querySelector("#result");
  switch (indiceList) {
    case 0:      
      partieResult.style.backgroundColor = 'white';
      break;
    case 1:      
      partieResult.style.backgroundColor  = '#0070FF' ;
      break;
    case 2:      
      partieResult.style.backgroundColor = 'pink' ;
      alert("une femme") ;
      break;
     case 3:      
      partieResult.style.backgroundColor = '#9966CC' ;
  }
});

// ON s'occupe de la souris
const boxResult = document.querySelector("#result");
// EVENEMENT:
boxResult.addEventListener('mousemove', (eventMouse) => {
  const x = eventMouse.offsetX ; 
  const y = eventMouse.offsetY ;
  
  const xValue = document.getElementById("mouse-x");
  const yValue = document.getElementById("mouse-y");
  
  xValue.innerText = x; 
  yValue.innerText = y; 
  
}) ; 

// ON s'occupe du clavier
document.addEventListener('keydown', (keyboardEvent) => {
  const nomTouche = event.key;     
  if (nomTouche === 'Enter') {
    alert("Touche Enter !! touche: " + `${nomTouche}`) ;
    // pour éviter que la touche 'Entrée' déclenche un lien sur lequel le navigateur semble nous rediriger quand cette touche est pressée 
    keyboardEvent.preventDefault() ;
  }
  else {
     //alert("Touche: " + `${nomTouche}`) ;  
  }   
}) ; 
