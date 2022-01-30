function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}
var options = { weekday: 'long',day: 'numeric', month: 'long', year: 'numeric'};
var today  = new Date();



document.getElementById("date").innerHTML = today.toLocaleDateString("en-US", options);
document.getElementById("modified").innerHTML = "last Updated: " + document.lastModified;
