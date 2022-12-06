let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mount3 = document.getElementById("mount3");
let mount4 = document.getElementById("mount4");
let mount7 = document.getElementById("mount7");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let waheed = document.querySelector(".waheed");
let main = document.querySelector(".main");

addEventListener("scroll", function () {

  let value = this.scrollY;
  console.log(this.scrollY);
  console.log(this.scrollx);

  stars.style.left = value + "px";
  moon.style.top = value * 4.5 + "px";
  mount3.style.top = value * 1.5 + "px";
  mount4.style.top = value * 1.5 + "px";
  river.style.top = value * 1.5 + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3.5 + "px";
  waheed.style.fontSize = value + "px";
  // mount7.style.left = 0;
  if (this.scrollY >= 58.8) {
    waheed.style.fontSize = 58.8 + "px";
    waheed.style.position = "fixed";
  }
  this.scrollY >= 99
  ? (main.style.background = "linear-gradient(#376281,#10001f)")
  : (main.style.background = "linear-gradient(#200016, #10001f)");
  this.scrollY >= 112
    ? (moon.style.display = "none")
    : (moon.style.display = "block");
    if (this.scrollY >= 223) {
      river.style.display = "none";
      mount3.style.display = "none";
      mount4.style.display = "none";
      moon.style.display = "none";
    } else {
      river.style.display = "block";
      mount3.style.display = "block";
      mount4.style.display = "block";
      moon.style.display = "block";
    }
  
});
