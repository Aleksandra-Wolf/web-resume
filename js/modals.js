const myVideoModal = document.querySelector('#my-video-modal');
const mobileMenu = document.querySelector('#mobile-menu');

const prFullModal = document.querySelector('#project-fullstack-modal');
const prWeddingModal = document.querySelector('#project-wedding-modal');
const prProTestModal = document.querySelector('#project-protest-modal');
const prGoItModal = document.querySelector('#project-goit-modal');
const teamFullModal = document.querySelector('#project-team-full-modal');
const teamTestItModal = document.querySelector('#project-team-testit-modal');

const myVideoBtn = document.querySelector('#my-video-btn');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');

const prFullBtn = document.querySelector('#project-fullstack-btn');
const prWeddingBtn = document.querySelector('#project-wedding-btn');
const prProTestBtn = document.querySelector('#project-protest-btn');
const prGoItBtn = document.querySelector('#project-goit-btn');
const teamFullBtn = document.querySelector('#project-team-full-btn');
const teamTestItBtn = document.querySelector('#project-team-testit-btn');

const modalCloseBtns = document.querySelectorAll('.exit-btn');

const modalWrappers = document.querySelectorAll('.modal-area-bgd');
const modalContainers = document.querySelectorAll('.modal-area-content');

const MODAL_ACTIVE_CLASS = 'modal-active';
const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

console.log('Here be dragons');

const modals = [
  mobileMenu,
  myVideoModal,
  prFullModal,
  prWeddingModal,
  prProTestModal,
  prGoItModal,
  teamFullModal,
  teamTestItModal,
];
const buttons = [
  mobileMenuBtn,
  myVideoBtn,
  prFullBtn,
  prWeddingBtn,
  prProTestBtn,
  prGoItBtn,
  teamFullBtn,
  teamTestItBtn,
];

buttons.forEach((btn, index) => {
  const projectModal = modals[index];
  if (btn) {
    btn.addEventListener('click', event => {
      event.preventDefault();
      projectModal.classList.add(MODAL_ACTIVE_CLASS);
      document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    });
  }
});

modalCloseBtns.forEach(btn => {
  btn.addEventListener('click', hideModal);
});

function enableCloseModalOnBgdClick() {
  if (modalContainers.length) {
    modalContainers.forEach(container => {
      container.addEventListener('click', event => event.stopPropagation());
    });
  }

  if (modalWrappers.length) {
    modalWrappers.forEach(container => {
      container.addEventListener('click', hideModal);
    });
  }
}

function hideModal() {
  const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

  if (modalToClose) {
    modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
    document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);
  }

  const video = document.querySelector('video');

  if (video) {
    video.pause();
  }
}

function hideModalOnMobileMenuElementsClick() {
  const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
  const menuElements = document.querySelectorAll('.mobile-menu-item');

  if (menuElements.length) {
    menuElements.forEach(container => {
      container.addEventListener('click', () =>
        setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY),
      );
    });
  }
}
