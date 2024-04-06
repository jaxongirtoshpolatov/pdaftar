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
