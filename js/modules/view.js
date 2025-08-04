const autoTypeText = document.querySelector(".welcome__msg");
// const showAfrikaans = document.querySelector(".welcome__msg--afr");
const semper = document.querySelector(".__semper");
const altius = document.querySelector(".__altius");
export default function () {
  setTimeout(() => {
    autoTypeText.classList.add("msg__Typing");
  }, 6000);
  setTimeout(() => {
    autoTypeText.classList.add("add__color");
  }, 14000);
  setTimeout(() => {
    autoTypeText.classList.add("add__remove");
  }, 24000);
  /// semper__altius ///
  setTimeout(() => {
    semper.classList.add("__semper--active");
    altius.classList.add("__altius--active");
    altius.style.opacity = 1;
    semper.style.opacity = 1;
    altius.style.fontFamily = "'Dancing Script', cursive";
    semper.style.fontFamily = "'Dancing Script', cursive";
    altius.style.fontSize = "32px";
    semper.style.fontSize = "32px";
  }, 24000);
}
