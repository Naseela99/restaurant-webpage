
import './style.css';
import load_page from './front_page.js';
import load_menu from './menu.js';
import load_contact from './contact';


function toMenu(){
    var cnt = document.querySelector('#content')

    var main_content = document.querySelector('.main-content')
    main_content.removeChild(cnt)


    main_content.appendChild(load_menu())
   
    const menu_btn = document.querySelector('.menu')
    const contact_btn = document.querySelector('.contact')
    const home_btn = document.querySelector('.home')
    
    
    menu_btn.addEventListener('click',toMenu)
    contact_btn.addEventListener('click',toContact)
    home_btn.addEventListener('click',toHome)

}
function toContact(){
    
    var cnt = document.querySelector('#content')

    var main_content = document.querySelector('.main-content')
    main_content.removeChild(cnt)


    main_content.appendChild(load_contact())
   
    const menu_btn = document.querySelector('.menu')
    const contact_btn = document.querySelector('.contact')
    const home_btn = document.querySelector('.home')
    
    
    menu_btn.addEventListener('click',toMenu)
    contact_btn.addEventListener('click',toContact)
    home_btn.addEventListener('click',toHome)
}
function toHome(){
    
    var cnt = document.querySelector('#content')

    var main_content = document.querySelector('.main-content')
    main_content.removeChild(cnt)


    main_content.appendChild(load_page())
   
    const menu_btn = document.querySelector('.menu')
    const contact_btn = document.querySelector('.contact')
    const home_btn = document.querySelector('.home')
    
    
    menu_btn.addEventListener('click',toMenu)
    contact_btn.addEventListener('click',toContact)
    home_btn.addEventListener('click',toHome)
}

function loadInitial(){
    var main_content = document.querySelector('.main-content')
    main_content.appendChild(load_page())
    
    const menu_btn = document.querySelector('.menu')
    const contact_btn = document.querySelector('.contact')
    const home_btn = document.querySelector('.home')
    
    
    menu_btn.addEventListener('click',toMenu)
    contact_btn.addEventListener('click',toContact)
    home_btn.addEventListener('click',toHome)
    



}

loadInitial()

// console.log('Hey')

// load_contact()