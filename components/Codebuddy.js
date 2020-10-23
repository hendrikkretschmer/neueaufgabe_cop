import { createElement } from "../ui-framework";

export default function Codebuddy() {
const unorderedlist = createElement("ul", " ", document.body);
const list = createElement("li", "Vorname, Nachname", unorderedlist);
list.classList.add('codebuddy_listitem')
const plusicon = createElement("img", " ", unorderedlist);
const list2 = createElement("li", "Vorname, Nachname", unorderedlist);
list2.classList.add('codebuddy_listitem2')
}