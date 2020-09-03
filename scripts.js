const burger = (s) => document.querySelector(s);
burger('.open').addEventListener('click', () =>{
  burger('.nav-list').classList.add('activado')
});

burger('.close').addEventListener('click', () =>{
  burger('.nav-list').classList.remove('activado')
});
