const autoTypeText = document.querySelector(".welcome__msg");
const semper = document.querySelector(".__semper");
const altius = document.querySelector(".__altius");
const tabBtns = document.querySelector(".tab__btns");
const tabsContainer = document.querySelector(".tabs__container");
const ubuntu = document.querySelector(".__ubuntu");
const education = document.querySelector(".__education");
const spots = document.querySelector(".__spots");
const tabs__containerTextInfo = document.querySelector(
  ".tabs__container--textInfo"
);
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

const tabButtons = [ubuntu, education, spots];

export const tabButtonAnimation = function () {
  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      tabButtons.forEach((b, i) => {
        if (b !== this) {
          b.classList.remove("btn__intab--animation");
          b.classList.add("btn__intab--animationRemove");
        } else {
          b.classList.remove("btn__intab--animationRemove");
          b.classList.add("btn__intab--animation");
        }
      });
    });
  });
};

const markUp = `<p class="text__tab--container--1">
  At HTS Sasolburg, we live by the belief that unity is strength — even in diversity. Our learners come from many different backgrounds, cultures, and communities across South Africa. But together, they form one vibrant, dynamic school family.
By embracing our differences and celebrating what unites us — respect, learning, and excellence — we build an inclusive environment where every learner is seen, supported, and inspired to push beyond their limits. 1</p>`;

const markUpSecond = `<p class="text__tab--container--2">
  Academic excellence stands at the heart of our mission. <br>
  With a strong technical foundation and a commitment to high standards, HTS Sasolburg offers a curriculum designed to challenge and inspire. From engineering and digital technologies to sciences and languages, every subject is taught with precision and purpose. Our passionate educators create an environment where learners are not just taught, but empowered — encouraged to question boldly and explore fearlessly. Here, education isn’t just preparation for the future — it’s the launchpad. 2`;

const markUpThird = `<p class="text__tab--container--3">
  Driven by innovation and discipline.<br>
   our learners grow in a space where academics and athletics work hand in hand. From engineering projects to digital systems, we equip students with real-world skills and critical thinking. On the sports field, they build teamwork and resilience — because here, excellence is not limited to the classroom. 3</p>`;

export const renderTabTexts = function () {
  tabButtons[0].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    tabs__containerTextInfo.style.position = "relative"; // or absolute,
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUp);
  });
  tabButtons[1].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    tabs__containerTextInfo.style.position = "relative"; // or absolute,
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpSecond);
  });

  tabButtons[2].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    // tabButtons[1].style.opacity = 1;
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpThird);
  });
};
