const autoTypeText = document.querySelector(".welcome__msg");
// const showAfrikaans = document.querySelector(".welcome__msg--afr");
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
}
