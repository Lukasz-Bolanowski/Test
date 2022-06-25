const menu = document.querySelector('.hamburger')

class HandleMenu {
    constructor(menu) {
        this.menu = menu
    }

    toggleMenu() {
        this.menu.classList.toggle('active')
    }

    delay() {
        this.menu.classList.toggle('active')
    }
}

const handleMenu = new HandleMenu(menu)
const toggler = () => handleMenu.toggleMenu()
const delay = () => handleMenu.delay()

menu.addEventListener('click', (toggler))
menu.addEventListener('blur', () => {
    setTimeout((delay), 300)
})