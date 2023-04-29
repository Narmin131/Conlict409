// DOM
// Document Object Model

// Selectors - Selektorlar
// document.getElementsByTagName('p') - elementi tutur(tag)
// document.getElementsByClassName('.text') - elementi(class'a gore tutur)
// document.getElementById("#content") - elementi(id'ye gore tutur)

// Query Selector
// document.querySelector('.text') - (yalniz class)
// document.querySelector('#content') - (yalniz id)
// document.querySelector('p') - (element ve ya tag)

const h1 = document.querySelector('h1')
h1.innerHTML = 'Heading'
h1.className = 'myTitle'
h1.classList.add('new')
h1.classList.remove('myTitle')

const p = document.querySelector('.text')
p.innerHTML = 'Paragraph'
p.style.color = 'blue'

const toggleBtn = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')

function toggleMenu() {
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)'
    }
    else {
        menu.style.transform = 'translateX(100%)'
    }
}


function closeMenu() {
    menu.style.transform = 'translateX(100%)'
}

function myFunc(parameter1, parameter2) {
    console.log(parameter1 + parameter2);
}

myFunc(4, 5)


const y = document.querySelectorAll('li')
console.log(y);