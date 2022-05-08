const btnOpen = document.querySelector('#btn-open')
const btnClosed = document.querySelector('#btn-closed')
const body = document.querySelector('body')


//SCROLL NAV TOGGLE COLOR
const onScroll = () => { 
    (scrollY > 0)   
    ? navigation.classList.add('scroll') 
    : navigation.classList.remove('scroll')
}

//MENU TOGGLE 
const onClick = () => {
    btnOpen.addEventListener('click', () => 
        body.classList.add('menu-mobile-extended'))
        
    btnClosed.addEventListener('click', () => 
        body.classList.remove('menu-mobile-extended'))
}


   