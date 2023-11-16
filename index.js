document.querySelector("button").style.backgroundColor = "#a96534";
document.querySelector(".btn1 button").style.backgroundColor = "#a96534";
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }