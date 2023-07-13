let menu = document.getElementById('menu')
let header = document.getElementById('headerItemsId')
let children = header.children

let isOpened = false

menu.onmouseover = () => {
    menu.style.cursor = "pointer"
}

menu.onclick = () => {
    console.log("clicked")
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName === 'A') {
            isOpened ?
            children[i].style.display = "none" :
            children[i].style.display = "block"
        }
    }
    isOpened = !isOpened
}

window.onresize = () => {
    if (window.innerWidth > 1200) {
        for (let i = 0; i < children.length; i++) {
            children[i].style.display = 'block' 
        }
    } 

    if (window.innerWidth < 1200) {
        for (let i = 0; i < children.length; i++) {
            children[i].style.display = 'none'
            isOpened = false
        }
    }
}