const btnMobil = document.querySelector('.menu_mobil_button button')
const menu = document.querySelector('.mobil__menu_open')
const closeBtn = document.querySelector('.mobil__menu_lose_btn')
const wrapper =document.querySelector('.wrapper')
const bg = document.querySelector('.mobil__menu_open_bg')


btnMobil.addEventListener('click', ()=>{
    menu.classList.add('open')
    wrapper.classList.add('open')
    bg.classList.add('open')
})
closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('open')
    wrapper.classList.remove('open')
    bg.classList.remove('open')
})