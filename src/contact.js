import { contents } from "./elements";
import { element } from "./elements";

export function contacts(){
    let container = document.createElement('div');
    element(container,"contact-container","555 Wellington St.Central, HK      + 852 1234 5678 ",contents);
}