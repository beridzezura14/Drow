const body = document.querySelector('body')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const menuItem = document.querySelectorAll('.menu-item')
const stars = document.querySelector('.stars')
const cloud = document.querySelector('.cloud')
const windowOne = document.querySelector('.window-1')
const windowTwo = document.querySelector('.window-2')

moon.addEventListener('click', function(){
    body.classList = 'dark-mode'
    sun.style.display = 'block'
    moon.style.display = 'none'
    stars.style.display = 'block'
    windowOne.style.backgroundColor = "#ffff7c"
    windowTwo.style.backgroundColor = "#ffff7c"
    cloud.style.display = 'none'
    for(i = 0; i < menuItem.length; i++){
        menuItem[i].style.color = '#fff'
    }
})

sun.addEventListener('click', function(){
    body.classList = 'day-mode'
    sun.style.display = 'none'
    moon.style.display = 'block'
    stars.style.display = 'none'
    cloud.style.display = 'block'
    windowOne.style.backgroundColor = "transparent"
    windowTwo.style.backgroundColor = "transparent"
    for(i = 0; i < menuItem.length; i++){
        menuItem[i].style.color = '#3b3b3b'
    }
})