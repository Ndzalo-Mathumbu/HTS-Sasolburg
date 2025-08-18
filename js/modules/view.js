import "bootstrap-icons/font/bootstrap-icons.css";

const autoTypeText = document.querySelector(".welcome__msg");
const semper = document.querySelector(".__semper");
const altius = document.querySelector(".__altius");
const tabBtns = document.querySelector(".tab__btns");
const tabsContainer = document.querySelector(".tabs__container");
const ubuntu = document.querySelector(".__ubuntu");
const education = document.querySelector(".__education");
const sports = document.querySelector(".__sports");
const tabs__containerTextInfo = document.querySelector(
  ".tabs__container--textInfo"
);
const ubuntuIcon = document.querySelector(".bi-ubuntu");
const educationIcon = document.querySelector(".bi-book");
const sportsIcon = document.querySelector(".bi-trophy");
const bookWrapper = document.querySelector(".bi-book-wrapper");
const ubuntuWrapper = document.querySelector(".bi-ubuntu-wrapper");
const trophyWrapper = document.querySelector(".bi-trophy-wrapper");
const modalWindowOverlay = document.querySelector(".modal__window__overlay");
const sectionItemModalWindow = document.querySelectorAll(
  ".section__item__modal-window"
);
const quickJump = document.querySelector(".quick__jump");
const __section1 = document.querySelector(".__section1");
const semperAltius = document.querySelector(".semper__altius");
const section__1FivePictures = document.querySelector(".section__1");
const section__2Unity = document.querySelector(".section__2");
const section__2Aspire = document.querySelector(".section__2--aspire");
const footer__child1 = document.querySelector(".footer__child1");
const heroVideo = document.querySelector(".hero__video");

const navbar = document.querySelector(".navbar");
// const HDimg = document.querySelectorAll(".lq__image");
const HDimg = document.querySelectorAll("img[data-src]");

console.log(sectionItemModalWindow, heroVideo, navbar);
export const textAnimation = function () {
  setTimeout(() => {
    autoTypeText.classList.add("msg__Typing");
  }, 6000);
  setTimeout(() => {
    autoTypeText.classList.add("add__color");
  }, 14000);
  setTimeout(() => {
    autoTypeText.classList.add("add__remove");
  }, 24000);
};

const tabButtons = [ubuntu, education, sports];

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
By embracing our differences and celebrating what unites us — respect, learning, and excellence — we build an inclusive environment where every learner is seen, supported, and inspired to push beyond their limits.  </p>`;

const markUpSecond = `<p class="text__tab--container--2">
  Academic excellence stands at the heart of our mission. <br>
  With a strong technical foundation and a commitment to high standards, HTS Sasolburg offers a curriculum designed to challenge and inspire. From engineering and digital technologies to sciences and languages, every subject is taught with precision and purpose. Our passionate educators create an environment where learners are not just taught, but empowered — encouraged to question boldly and explore fearlessly. Here, education isn’t just preparation for the future — it’s the launchpad. </p> `;

const markUpThird = `<p class="text__tab--container--3">
  Driven by innovation and discipline.<br>
   our learners grow in a space where academics and athletics work hand in hand. From engineering projects to digital systems, we equip students with real-world skills and critical thinking. On the sports field, they build teamwork and resilience — because here, excellence is not limited to the classroom.</p>`;

export const renderTabTexts = function () {
  tabButtons[0].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    educationIcon.style.display = "none";
    bookWrapper.style.display = "none";
    sportsIcon.style.display = "none";
    trophyWrapper.style.display = "none";

    ubuntuIcon.style.display = "flex";
    ubuntuWrapper.style.display = "inline-block";
    tabs__containerTextInfo.style.position = "relative";
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUp);
  });
  tabButtons[1].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    sportsIcon.style.display = "none";
    ubuntuWrapper.style.display = "none";
    bookWrapper.style.display = "inline-block";
    trophyWrapper.style.display = "none";
    ubuntuIcon.style.display = "none";
    educationIcon.style.display = "flex";

    tabs__containerTextInfo.style.position = "relative";
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpSecond);
  });

  tabButtons[2].addEventListener("click", function () {
    tabs__containerTextInfo.innerHTML = "";
    educationIcon.style.display = "none";
    bookWrapper.style.display = "none";
    ubuntuWrapper.style.display = "none";
    ubuntuIcon.style.display = "none";
    trophyWrapper.style.display = "inline-block";
    sportsIcon.style.display = "flex";
    // tabButtons[1].style.opacity = 1;
    tabs__containerTextInfo.insertAdjacentHTML("beforeend", markUpThird);
  });
};
export const modalWindow = function () {
  quickJump.addEventListener("click", function () {
    modalWindowOverlay.classList.add("modal__window__overlay-active");
    setTimeout(() => {
      modalWindowOverlay.classList.remove("modal__window__overlay-active");
    }, 25000);
  });
  modalWindowOverlay.addEventListener("click", function () {
    modalWindowOverlay.classList.remove("modal__window__overlay-active");
  });
  sectionItemModalWindow.forEach((list) =>
    list.addEventListener("click", function () {
      modalWindowOverlay.classList.remove("modal__window__overlay-active");
    })
  );
};

export const scrollAnimation = function () {
  const sectionsArr = [
    semperAltius,
    section__1FivePictures,
    section__2Unity,
    section__2Aspire,
    footer__child1,
  ];

  const options = {
    root: null,
    threshold: 0.2,
  };
  const obsever = new IntersectionObserver(function (entries, obsever) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("renderSections");

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
        }, 500);
      }
    });
  }, options);

  sectionsArr.forEach((section) => {
    obsever.observe(section);
  });
};

/* alert(
  "If you prefer the navigation bar without a blurred background, click anywhere on it to make it clear."
); */

export const stickyNav = function () {
  window.addEventListener("scroll", () => {
    const rect = heroVideo.getBoundingClientRect();
    const videoHeight = rect.height;

    let visibleHeight = rect.bottom;
    visibleHeight = Math.min(visibleHeight, videoHeight);
    visibleHeight = Math.max(0, visibleHeight);

    if (visibleHeight / videoHeight <= 0.22) {
      navbar.classList.add("nav__active");
    } else {
      navbar.classList.remove("nav__active");
    }
  });

  navbar.addEventListener("click", () => {
    navbar.classList.add("nav__click");
  });
};

export const lazyLoadPictures = function () {
  // Load the HD image when needed
  const loadHDpics = function (entry, observer) {
    const img = entry.target;

    // Swap low-quality with HD
    img.src = img.dataset.src;

    // When HD loads, remove blur
    img.addEventListener("load", () => {
      img.classList.add("lazy-img__removeBlur");
    });

    observer.unobserve(img); // Stop watching once loaded
  };

  const options = {
    root: null,
    threshold: 0.1, // 100% of image should be visible before full reveal
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadHDpics(entry, observer);
      }
    });
  }, options);

  // Grab all images that have a data-src attribute

  HDimg.forEach((img) => {
    img.classList.add("lazy-img"); // Start blurred
    observer.observe(img);
  });
};
