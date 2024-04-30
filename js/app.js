let barsBtn, navbarMenuBox, navbarLink, header, logo;
barsBtn = document.querySelector(".navbar__bars");
navbarMenuBox = document.querySelector(".navbar__menu_box");
navbarLink = document.querySelectorAll(".navbar__link");
header = document.querySelector(".header__container");
logo = header.querySelector(".nav__logo");

// scroll freeze
const scrollFreeze = (status) => {
  if (status === true) {
    document.body.style.overflowY = "hidden";
  } else if (status === false) {
    document.body.style.overflowY = "auto";
  }
};

barsBtn.addEventListener("click", () => {
  barsBtn.classList.toggle("navbar__bars_active");
  navbarMenuBox.classList.toggle("navbar__menu__box_active");
  header.classList.toggle("active");
  // logo white
  scrollFreeze(true);
  if (!header.classList.contains("active")) {
    scrollFreeze(false);
  }
});

navbarLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (barsBtn.classList.contains("navbar__bars_active")) {
      barsBtn.classList.remove("navbar__bars_active");
      navbarMenuBox.classList.remove("navbar__menu__box_active");
      header.classList.remove("active");
      scrollFreeze(false);
    }
  });
});

// prices section js code
let selection, buyValue, statusBusiness;
selection = document.querySelector(".price__selection");
buyValue = document.querySelectorAll(".buy__selection__value");
statusBusiness = document.querySelector(".status__business");
card = document.querySelectorAll('.cards__card');
selection.addEventListener("click", () => {
  selection.classList.toggle("selection__active");
  card.forEach((item) => {
    if(selection.classList.contains('selection__active')) {
      item.classList.add('fade');
      item.classList.remove('fade-in');
    }else {
      item.classList.add('fade-in');
      item.classList.remove('fade');
    }
  })
  let month = 2,
    year = month * 10;
  buyValue.forEach((item) => {
    if (selection.classList.contains("selection__active")) {
      item.textContent = "Yil";
      statusBusiness.textContent = `$${year}`;
    } else {
      item.textContent = "Oy";
      statusBusiness.textContent = `$${month}`;
    }
  });
});

// navbar sticky
let navbar = document.querySelector("header"),
  upIcon = document.querySelector(".up-icon a");

window.addEventListener("scroll", () => {
  0 < window.scrollY ? navbar.classList.add('sticky') : navbar.classList.remove("sticky");
  // up icon
  800 < window.scrollY
    ? (upIcon.style.opacity = "1")
    : (upIcon.style.opacity = "0");
});
// check sticky navbar
window.addEventListener("load", () => {
  0 < window.scrollY ? navbar.classList.add('sticky') : navbar.classList.remove("sticky");
})


// footer author year script
const date = new Date();
const yearTag = document.querySelector("#year");

let year = date.getFullYear();
yearTag.textContent = year;

// input mask
const telInput = document.querySelectorAll("#telInput");

telInput.forEach((maskInput) => {
  const maskOptions = {
    mask: "+{998}(00) 000-00-00",
  };
  const mask = IMask(maskInput, maskOptions);

  maskInput.addEventListener("click", () => {
    maskInput.parentElement.style.borderColor = "rgb(86, 58, 204)";
  });
});


