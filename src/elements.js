export const contents = document.querySelector("#contents");


export function element(name,classname,textcontent,parent){
   // name = document.createElement(element);
    name.classList.add(classname);
    name.textContent = textcontent;
    parent.appendChild(name);
   }
   


export function createheader(){
    let header = document.createElement('div');
    element(header,'header',null,contents);

//header heading section*******************************
    let heading_sec = document.createElement('div');
    element(heading_sec,'heading-sec',null,header);

    let heading = document.createElement('div');
    element(heading,'header-heading',"Tasty food",heading_sec);
//****************************************************


//options-section*************************************
let options = document.createElement('div');
element(options,'options-sec',null,header);

let home_h = document.createElement('button');
let menu_h = document.createElement('button');
let contact_h = document.createElement('button');

element(home_h,'home-btn',"Home",options);
element(menu_h,'menu-btn',"Menu",options);
element(contact_h,'contact-btn',"Contact",options);
//***************************************************

}