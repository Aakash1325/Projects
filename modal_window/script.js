'use strict';



const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');


// modal open  button function 
const openModalBtn =  function() {
  console.log('remove hidden class')
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// modal close button function  

const closeModalBtn = function() {
  console.log("add hidden class ")
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


for(let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModalBtn)
}

closeModal.addEventListener('click', closeModalBtn);
overlay.addEventListener('click', closeModalBtn);


// Escape  key event 

document.addEventListener('keydown', function(e) {
  // console.log("key was pressed!");
  // console.log(e.key);
  if(e.key === 'Escape' && ! modal.classList.contains('hidden')) {
    //  if(! modal.classList.contains('hidden')) {
      closeModalBtn();
    //  }
  }
});
 


