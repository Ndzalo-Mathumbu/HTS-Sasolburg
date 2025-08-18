import * as view from "./view.js";

const init = function () {
  // view.typingAnimation();
  view.scrollAnimation();
  view.stickyNav();
  view.textAnimation();
  view.tabButtonAnimation();
  view.renderTabTexts();
  view.modalWindow();
  view.lazyLoadPictures();
};
init();
