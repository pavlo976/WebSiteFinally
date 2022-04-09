document.addEventListener('DOMContentLoaded', function(){
    
const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')
const navbar = document.querySelector('.navbar')
const navLink = document.querySelectorAll('.nav-link')
const iconArrow = document.querySelector('.fa-angle-down')
const navCollapse = document.querySelector('.navbar-collapse')
const button = document.querySelector('.navbar-toggler')
const section = document.querySelector('.contact')


// let a = parseInt(prompt(`Podaj liczbę`))
//     if(a % 2 == 0) {
//         document.write(`Liczba jest parzysta`)
//     }   else {
//         document.write(`Liczba jest nieparzysta`)
//     }



// function increaseText () {
//     fontSize += 5
//     p.style.fontSize = fontSize + 'px'
// }
// function decreaseText () {
//     fontSize -= 5
//     p.style.fontSize = fontSize + 'px'
// }

// const array = ['banan', 'jabłko', 'kiwi', 'maliny', 'gruszki']

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

function addColorNavbar () {
    if (window.scrollY >= 180) {
        navbar.classList.add('background')
    } else {
        navbar.classList.remove('background')
    }
}

function goDownArrow () {
    if (window.scrollY >= 440) {
        iconArrow.classList.add('transform')
    } else {
        iconArrow.classList.remove('transform')
    }
}


navLink.forEach(item => item.addEventListener('click', () => navCollapse.classList.remove('show')))

window.addEventListener('scroll', addColorNavbar)
window.addEventListener('scroll', goDownArrow)
// if(fontSize % 2 == 0) {
//     document.write()
// }   else {
//     console.log(`Liczba nieparzysta`);
// }

})

