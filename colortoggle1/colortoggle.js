const schakel = document.querySelector('.schakel');
const colore = document.querySelector('.colore');
const sideBar = document.querySelector('#sideBar');
const home = document.querySelector('#home');
const rood = document.querySelector('#rood');
const oranje = document.querySelector('#oranje');
const paars = document.querySelector('#paars');
const groen = document.querySelector('#groen');
const memo = document.querySelector('#memo');
const verander = document.querySelector('#verander');
const check = document.querySelector('.check');
const rif = document.querySelector('.rif')
const extra =document.querySelector('.extra')



//home\\
home.addEventListener('click' ,function(){
        memo.style.background = 'gray';
        colore.style.visibility = 'hidden';
        verander.textContent = 'U heef gekozen voor: GRIJS/HOME!!!';
        document.getElementById('sidebar')
        .classList.toggle('active')
});
home.addEventListener('mouseover', function() {
    extra.style.background = 'gray'
});

//rood\\
rood.addEventListener('click' ,function(){
        memo.style.background = 'red';
        colore.style.visibility = 'hidden';
        verander.textContent = 'U heef gekozen voor: ROOD!!!';
        document.getElementById('sidebar')
        .classList.toggle('active')
});
rood.addEventListener('mouseover', function() { 
    extra.style.background = 'red'
});

//oranje\\
        oranje.addEventListener('click' ,function(){
        memo.style.background = 'orange';
        colore.style.visibility = 'hidden';
        verander.textContent = 'U heef gekozen voor: ORANJE!!!';
        document.getElementById('sidebar')
        .classList.toggle('active')
});
oranje.addEventListener('mouseover', function() {
     extra.style.background = 'orange'
});

//paars\\
paars.addEventListener('click' ,function(){
        memo.style.background = 'purple';
        colore.style.visibility = 'hidden';
        verander.textContent = 'U heef gekozen voor: PAARS!!!';
        extra.style.background = 'purple'
        document.getElementById('sidebar')
        .classList.toggle('active')
});
paars.addEventListener('mouseover', function() {
     extra.style.background = 'purple'
});

//groen\\
groen.addEventListener('click' ,function() {
        memo.style.background = 'green';
        colore.style.visibility = 'hidden';
        verander.textContent = 'U heef gekozen voor: GROEN!!!';
        extra.style.background = 'green';
        document.getElementById('sidebar')
        .classList.toggle('active')}
);
groen.addEventListener('mouseover', function() {
       extra.style.background = 'green'
    
});
schakel.addEventListener('click', function () {

        document.getElementById('sidebar')
        .classList.toggle('active')
        colore.style.visibility = 'visible';
});

document.addEventListener('keydown', e =>{
  if (e.key === '1'){
        memo.style.background = 'gray';
        colore.style.visibility = 'hidden';
        rif.style.background = 'gray';
        verander.textContent = 'U heef gekozen voor: GRIJS/HOME!!!';
     
  }

if (e.key === '2'){
        memo.style.background = 'red';
        colore.style.visibility = 'hidden';
        rif.style.background = 'red';
        verander.textContent = 'U heef gekozen voor: RED!!!';
}

if (e.key === '3'){
        memo.style.background = 'orange';
        colore.style.visibility = 'hidden';
        rif.style.background = 'orange';
        verander.textContent = 'U heef gekozen voor: ORANGE!!!';
}

if (e.key === '4'){
        memo.style.background = 'purple';
        colore.style.visibility = 'hidden';
        rif.style.background = 'purple';
        verander.textContent = 'U heef gekozen voor: PURPLE!!!';
}

if (e.key === '5'){
        memo.style.background = 'green';
        colore.style.visibility = 'hidden';
        rif.style.background = 'green';
        verander.textContent = 'U heef gekozen voor: GREEN!!!';
}

if (e.key === '6'){
        memo.style.background = 'skyblue';
        colore.style.visibility = 'hidden';
        rif.style.background = 'skyblue';
        verander.textContent = 'U heef gekozen voor: SKYBLUE BONUS KLEUR!!!';
}
});