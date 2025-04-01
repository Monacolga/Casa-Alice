//----burger-----//

const body = document.body;
const header = document.querySelector(".header-wrapper");
const burger = document.querySelector(".header-burger");
const burgerMenu = document.querySelector(".nav");
const menuLink = document.querySelectorAll(".nav-link");

// function bodyLock() {
//   if (burgerMenu.classList.contains("active")) {
//     body.classList.add("lock");
//   } else {
//     body.classList.remove("lock");
//   }
// }

function bodyLock() {
  for (const el of modal) {
    if (el.classList.contains("active")) {
      body.classList.add("lock");
      return;
    }
  }

  if (burgerMenu.classList.contains("active")) {
    body.classList.add("lock");
  } else {
    body.classList.remove("lock");
  }
}

for (let item of menuLink) {
  item.addEventListener("click", closeMenu);
}

function closeMenu() {
  burgerMenu.classList.remove("active");
  burger.classList.remove("active");
  bodyLock();
}

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burger.classList.toggle("active");
  bodyLock();
});

// header.addEventListener("click", closeMenu);

const modal = document.querySelectorAll(".modal");
const priceBtn = document.querySelector(".price-btn");
const priceModal = document.querySelector(".price-modal");
const closeBtn = document.querySelector(".close-btn");

priceBtn.addEventListener("click", () => {
  priceModal.classList.add("active");
  bodyLock();
});

closeBtn.addEventListener("click", () => {
  for (let item of modal) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      bodyLock();
    }
  }
});

// closeBtn.addEventListener("click", () => {
//   modal.classList.contains("active"){

//   }
// })
