'use strict';


/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');


console.log(btnsShowModal);


for(let i = 0 ; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function(){
    //  btnsShowModal[i].textContent  = 'you clicked the button'
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

*/


const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');


// clock button function 
const openModalBtn =  function() {
  console.log('remove hidden class')
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

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


document.addEventListener('keydown', function(e) {
  // console.log("key was pressed!");
  // console.log(e.key);
  if(e.key === 'Escape' && ! modal.classList.contains('hidden')) {
    //  if(! modal.classList.contains('hidden')) {
      closeModalBtn();
    //  }
  }
});
 


