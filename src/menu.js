
import { contents } from "./elements";
import { element } from "./elements";

export function menu(){
    let container = document.createElement('div');
    element(container,'menu-container',null,contents);
//plate section
    let smallplates = document.createElement('div');
    element(smallplates,'menu-plates-sec',null,container);

    let plates_heading = document.createElement('h2');
    element(plates_heading,'plates-heading',"SMALL PLATES",smallplates);

    let plates_items = document.createElement('div');
    element(plates_items,"plate-items-div",null,smallplates);
    
    let plate_gyoza = document.createElement('h2');
    element(plate_gyoza,'plate-item',"GYOZA",plates_items);

    let plate_bao = document.createElement('h2');
    element(plate_bao,'plate-item',"BAO",plates_items);

    let plate_SHISHITO = document.createElement('h2');
    element(plate_SHISHITO,"plate-item","SHISHITO",plates_items);

    let plate_TAKOYAKI = document.createElement('h2');
    element(plate_TAKOYAKI,"plate-item","TAKOYAKI",plates_items);
//************************************************/////////////

}