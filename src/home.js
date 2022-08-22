
import { contents } from "./elements";
import { element } from "./elements";

export function home(){
    let container = document.createElement('div');
    element(container,'home-container',null,contents);

    let div1 = document.createElement('div');
    element(div1,"home-text","Best quality tasty food.",container);

    let img1 = document.createElement("img");
    img1.src = "../src/food.jpeg";
    element(img1,'home-image',null,container);

    let div2 = document.createElement('div');
    element(div2,"home-text","12:00 to 0:00 Every day",container);
}