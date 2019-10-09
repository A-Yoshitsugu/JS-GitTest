const images = ["main-image1.jpg", "main-image2.jpg", "main-image3.jpg",
"main-image4.jpg", "main-image5.jpg"];

const main = document.getElementById("main-image");
const back = document.getElementById("back");
const next = document.getElementById("next");

let num = 0;

function setImage() {
  main.style.backgroundImage = "url(images/" + images[num] + ")";
};

setImage();

next.addEventListener('click', () => {
  if (num === 4) {
    num = 0;
  }
  else {
    num ++;
  }
  setImage();
})

back.addEventListener('click', () => {
  if (num === 0) {
    num = 4;
  }
  else {
    num --;
  }
  setImage();
})


// modal

// const modal = document.getElementById("modal");
const programming = document.getElementById("programming");
const avatar = document.getElementById("avatar");
const company = document.getElementById("company");
const btnProgramming = document.getElementById("modal-programming");
const btnAvatar = document.getElementById("modal-avatar");
const btnCompany = document.getElementById("modal-company");
const mask = document.getElementById("mask");
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");
const body = document.getElementById("body");


programming.addEventListener('click', () => {
  btnProgramming.classList.remove('hidden');
  mask.classList.remove('hidden');
})

avatar.addEventListener('click', () => {
  btnAvatar.classList.remove('hidden');
  mask.classList.remove('hidden');
})

company.addEventListener('click', () => {
  btnCompany.classList.remove('hidden');
  mask.classList.remove('hidden');
})

close1.addEventListener('click', () => {
  mask.classList.add('hidden');
  btnProgramming.classList.add('hidden');
})

close2.addEventListener('click', () => {
  mask.classList.add('hidden');
  btnAvatar.classList.add('hidden');
})


close3.addEventListener('click', () => {
  mask.classList.add('hidden');
  btnCompany.classList.add('hidden');
})
