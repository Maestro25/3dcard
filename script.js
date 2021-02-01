const card = document.querySelector('.card');
const box = document.querySelector('.content-wrapper');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const sizes = document.querySelector('.sizes');
const info = document.querySelector('.info h3');
const purchase = document.querySelector('.purchase');

box.addEventListener('mousemove', e =>{
  let xAxis = (window.innerWidth/2 -e.pageX) /25;
  let yAxis = (window.innerHeight/2 -e.pageY) /25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});
box.addEventListener('mouseenter', e =>{
  card.style.transition = 'none';

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(30deg)";
  sizes.style.transform = "translateZ(100px)";
  info.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(75px)";

});

box.addEventListener('mouseleave', e =>{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0)";
  sneaker.style.transform = "translateZ(0) rotateZ(0)";
  sizes.style.transform = "translateZ(0)";
  info.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";

});