var result;
var animatedContainers = [
  document.getElementsByClassName("animations"),
  document.getElementsByClassName("diagonal"),
  document.getElementsByClassName("content"),
];
var animTime1 = obtainParam("animTime");
var animTime2 = animTime1 - 2;
var animTime = animTime2 * 1000;



function obtainParam(sVar) {
  return unescape(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
        escape(sVar).replace(/[\.\+\*]/g, "\\$&") +
        "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}


for (var i = 1; i < 100; i++) {
  result = result + "<div onclick='clicked(this)' class='button " + i + "'>" + i + "</div>\n";
}

if (obtainParam("theme") == "light") {
  document.getElementsByClassName("body").item(0).classList.add("light"); 
}

if(obtainParam("animColors")) {
  document.getElementById("style").innerHTML =
    ".diagonal:before {background: linear-gradient(" +
    obtainParam("animDeg") +
    "deg, " +
    obtainParam("animColor1") +
    ", " +
    obtainParam("animColor2") +
    ");} \n .diagonal{ color: " +
    obtainParam("textColor") +
    ";}";
}

document
  .getElementsByClassName("container")
  .item(0).innerHTML = result.substring(9);

function clicked(button) {
  if (button.classList.contains("toggled")) {
    button.classList.toggle("toggled");
    console.log("Removed" + button.innerHTML);
  } else {
    document.getElementsByClassName("content").item(0).innerHTML = button.innerHTML;
    animatedContainers.forEach((element) => {
      element.item(0).classList.remove("off");
      element.item(0).classList.remove("stop-anim");
      setTimeout(() => {
        element.item(0).classList.add("stop-anim");
        setTimeout(() => {
          element.item(0).classList.remove("stop-anim");
          setTimeout(() => {
            element.item(0).classList.add("stop-anim");
            element.item(0).classList.add("off");
          }, 1000);
        }, animTime);
      }, 1000);
    });
    button.classList.toggle("toggled");
  }
}
//  ELECTRON ONLY

var win = require("electron").remote.getCurrentWindow();

function toggleFullscreen(event) {
  console.log(win);
  if (win.fullScreen == false) {
    win.fullScreen = true;
  } else {
    win.fullScreen = false;
  }

}

function back() {
  if (
    confirm("Attention, en retournant à la page de configuration, vous perdrez les données de la partie actuelle. \n Voulez-vous retourner à la page de configuration ?")
  ) {
    win.loadFile("index.html");
  }
}

function reset() {
  if (
    confirm(
      "Êtes vous sûr de vouloir remettre à zéro la partie actuelle ?"
    )
  ) {
    window.location.reload();
  }

}