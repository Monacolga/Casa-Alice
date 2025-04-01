// const body = document.body;
// const header = document.querySelector(".header-wrapper");
// const burger = document.querySelector(".header-burger");
// const burgerMenu = document.querySelector(".nav");
// const menuLink = document.querySelectorAll(".nav-link");

// function bodyLock() {
//   for (const el of modal) {
//     if (el.classList.contains("active")) {
//       body.classList.add("lock");
//       return;
//     }
//   }

//   if (burgerMenu.classList.contains("active")) {
//     body.classList.add("lock");
//   } else {
//     body.classList.remove("lock");
//   }
// }

// for (let item of menuLink) {
//   item.addEventListener("click", closeMenu);
// }

// function closeMenu() {
//   burgerMenu.classList.remove("active");
//   burger.classList.remove("active");
//   bodyLock();
// }

// burger.addEventListener("click", () => {
//   burgerMenu.classList.toggle("active");
//   burger.classList.toggle("active");
//   bodyLock();
// });

// const modal = document.querySelectorAll(".modal");
// const priceBtn = document.querySelector(".price-btn");
// const priceModal = document.querySelector(".price-modal");
// const closeBtns = document.querySelectorAll(".close-btn");
// const busTitles = document.querySelectorAll(".bus-title");
// const busModals = document.querySelectorAll(".bus-modal");

// priceBtn.addEventListener("click", () => {
//   priceModal.classList.add("active");
//   bodyLock();
// });

// closeBtns.forEach((btn) => {
//   btn.forEach((title) => {
//     title.addEventListener("click", () => {
//       const nextElement = title.nextElementSibling;
//       if (nextElement && nextElement.classList.contains("bus-modal")) {
//         nextElement.classList.add("active");
//         bodyLock();
//       }
//     });
//   });
// });

const body = document.body;
const header = document.querySelector(".header-wrapper");
const burger = document.querySelector(".header-burger");
const burgerMenu = document.querySelector(".nav");
const menuLink = document.querySelectorAll(".nav-link");
const modal = document.querySelectorAll(".modal");
const priceBtn = document.querySelector(".price-btn");
const priceModal = document.querySelector(".price-modal");
const closeBtns = document.querySelectorAll(".close-btn");
const busTitles = document.querySelectorAll(".bus-title");
const busModals = document.querySelectorAll(".bus-modal");

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

priceBtn.addEventListener("click", () => {
  priceModal.classList.add("active");
  bodyLock();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("active");
    bodyLock();
  });
});

busTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const nextElement = title.nextElementSibling;
    if (nextElement && nextElement.classList.contains("bus-modal")) {
      nextElement.classList.add("active");
      bodyLock();
    }
  });
});
