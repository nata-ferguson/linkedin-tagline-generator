let adjectiveInput = document.getElementById('adjective')
let roleInput = document.getElementById('role')
let reputationInput = document.getElementById('reputation')
let hobbyInput = document.getElementById('hobby')

let myTagline = document.getElementById('myTagline')

let adjForm = document.getElementById('adjForm')
let roleForm = document.getElementById('roleForm')
let reputationForm = document.getElementById('reputationForm')
let hobbyForm = document.getElementById('hobbyForm')

let totalCountField = document.getElementById('totalCount')
let totalCharCount = document.querySelectorAll('.steps p');


//character count for 4 input fields
function countCharsAdj(obj){
  document.getElementById("charNumAdj").innerHTML = obj.value.length;
}

function countCharsRole(obj){
  document.getElementById("charNumRole").innerHTML = obj.value.length;
}

function countCharsRep(obj){
  document.getElementById("charNumRep").innerHTML = obj.value.length;
}

function countCharsHobby(obj){
  document.getElementById("charNumHobby").innerHTML = obj.value.length;
}

adjForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createItem(adjectiveInput.value)
    document.getElementById("check1").style.color = "rgb(69, 123, 157)";
})

roleForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createItem(roleInput.value)
  document.getElementById("check2").style.color = "rgb(69, 123, 157)";
})

reputationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createItem(reputationInput.value)
  document.getElementById("check3").style.color = "rgb(69, 123, 157)";
})

hobbyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createItem(hobbyInput.value)
  document.getElementById("check4").style.color = "rgb(69, 123, 157)";
})

//create a tagline from 4 inputs
function createItem(x){
    let myText = ` ${x} `
    myTagline.insertAdjacentText("beforeend", myText)
    // adjectiveInput.value = ''
    // roleInput.value = ''
    // reputationInput.value = ''
    // hobbyInput.value = ''
}

function getTotalCount() {
  total = 0;
  for (let i = 0; i < totalCharCount.length; i++) {
    total = total + Number(totalCharCount[i].textContent)
  }
  totalCountField.innerHTML = "Total number of characters: " + total + " , character limit: 120.";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("fixedBar");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}










