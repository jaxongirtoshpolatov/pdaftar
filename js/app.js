let barsBtn, navbarMenuBox, navbarLink;
barsBtn = document.querySelector('.navbar__bars');
navbarMenuBox = document.querySelector('.navbar__menu_box');
navbarLink = document.querySelectorAll('.navbar__link')

barsBtn.addEventListener('click', () => {
    barsBtn.classList.toggle('navbar__bars_active');
    navbarMenuBox.classList.toggle('navbar__menu__box_active')
})

navbarLink.forEach((item) => {
    item.addEventListener('click', () => {
        if (barsBtn.classList.contains('navbar__bars_active')){
            barsBtn.classList.remove('navbar__bars_active');
            navbarMenuBox.classList.remove('navbar__menu__box_active')
        }
    })

})

// prices section js code
let selection, buyValue, statusBusiness;
selection = document.querySelector(".price__selection");
buyValue = document.querySelectorAll(".buy__selection__value");
statusBusiness = document.querySelector('.status__business')
selection.addEventListener("click", () => {
  selection.classList.toggle("selection__active");

  buyValue.forEach((item) => {
    if (selection.classList.contains("selection__active")) {
      item.textContent = "Yil";
      statusBusiness.textContent = '$10'
    } else {
      item.textContent = "Oy";
      statusBusiness.textContent = '$1'
    }
  });
});

// navbar sticky
let navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollValue = scrollY;
  if (scrollValue > 0){
    navbar.classList.add('sticky')
  }else {
    navbar.classList.remove('sticky');
  }
})

// footer author year script
const date = new Date();;
const yearTag = document.querySelector('#year');

let year = date.getFullYear();
yearTag.textContent = year;