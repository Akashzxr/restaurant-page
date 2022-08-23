import { createheader } from "./elements";
import { home } from "./home";
import { menu } from "./menu";
import { contacts } from "./contact";

export function run(){
    createheader();
    home();
    menu();
    contacts();
    
    let home_container = document.querySelector('.home-container');
    let menu_container = document.querySelector('.menu-container');
    let contact_container = document.querySelector('.contact-container');

    menu_container.classList.add('active');
    contact_container.classList.add('active');

    let home_btn = document.querySelector('.home-btn');
    let menu_btn = document.querySelector('.menu-btn');
    let contact_btn = document.querySelector('.contact-btn');

    home_btn.addEventListener('click',()=>{
       home_container.classList.remove('active');
       menu_container.classList.add('active');
       contact_container.classList.add('active');
    });


    menu_btn.addEventListener('click',()=>{
        home_container.classList.add('active');
        menu_container.classList.remove('active');
        contact_container.classList.add('active');
    });

    contact_btn.addEventListener('click',()=>{
        home_container.classList.add('active');
        menu_container.classList.add('active');
        contact_container.classList.remove('active');
    })
}