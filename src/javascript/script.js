const $cards = document.querySelectorAll(".card");
const $cardBtn = document.querySelectorAll(".card__btn");
const $body = document.querySelector("body");
const $liquidsTexts = document.querySelectorAll(".liquids__content__text");
const $liquidsTypes = document.querySelectorAll(".liquids__content__type");
const $liquidsImgsBoxs = document.querySelectorAll(".liquids__content__box");


const $iconMenu = document.querySelector("#icon-menu");
const $menu = document.querySelector("#menu");


for (let i = 0; i < $cardBtn.length; i++) {
  const element = $cardBtn[i];
  element.addEventListener("click", () => {
    $cards[i].classList.toggle("opened");
  });
}

for (let i = 0; i < $liquidsTypes.length; i++) {
  const $liquidsType = $liquidsTypes[i];
  $liquidsType.addEventListener("click", () => {
    $liquidsTexts.forEach(el => {
      el.classList.remove("visible");
    });
    $liquidsTypes.forEach(el => {
      el.classList.remove("visible");
    });
    $liquidsImgsBoxs.forEach(el => {
      el.classList.remove("visible");
    });

    $body.classList.remove("dark-mode");
    $liquidsImgsBoxs[i].classList.add("visible");
    $liquidsType.classList.add("visible");
    $liquidsTexts[i].classList.toggle("visible");

    if (i === 2) {
      $body.classList.add("dark-mode");
    }
  });
}





var keywords = ["PÉRSONNALISABLE", "IMPERMÉABLE"];

var count = 0;
var span = document.querySelector(".hero-left__uptitle--rotate");

setInterval(function() {
  span.innerHTML = keywords[count];
  count++;
  if (count === keywords.length) {
    count = 0;
  }
}, 3000);
$iconMenu.addEventListener("click", () => {
  $menu.classList.toggle("menu-is-opened");
  console.log("pute");
});

