export function createElement(tag, text, parentHtmlElement) {
    const element = document.createElement("tag");
    element.textContent = text;
    parentHtmlElement.appendChild(element);
    
    return element;
}

/*Warum brauchen wir in der index.js in ui-framework das createElement?

- createElement ist die Funktion, in der sämtliche Parameter für die HTML-Datei, 
sowie Styling in CSS aufgeführt werden - sie werden quasi angesprochen.
- jedes neue Element greift auf die Funktion zu (createElement-Funktion), 
die wir mit den Parametern (siehe oben) festgelegt haben. 


*/

/* 
appendChild (child) fügt dem Parent-Element elem ein Kind als childNode hinzu. 
Wenn elem schon Kinder hat, wird childNode hinter die vorhandenen Child-Elemente gehangen. 
Das Parent-Element muss ein Elementknoten sein, Textknoten können keine Kinder haben.
*/













/*export function createElement(tag, text, parentHtmlElement) {
    
    const newElement = document.createElement(tag);
    
    newElement.textContent = text;
    
    parentHtmlElement.appendChild(newElement);
    
    return newElement;
}*/