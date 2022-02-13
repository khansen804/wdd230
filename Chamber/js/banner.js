const d = new Date()
const weekday = d.getDay()
const banner = document.getElementById("myHeader");
if (weekday == 2 || weekday == 3){
    //https://www.w3schools.com/js/js_htmldom_nodes.asp
    const para = document.createElement("p");
    const node = document.createTextNode("Come join us at the meeting... wherever it is.");
    para.appendChild(node);
    const element = document.getElementById("myHeader");
    element.appendChild(para);
    banner.className = "on";
}else {
    banner.className = "off";
}



