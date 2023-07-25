let menu = document.getElementById('menu')
let header = document.getElementById('headerItemsId')
let facebook = document.getElementById('facebook')
let children = header.children

let isOpened = false

facebook.onmouseover = () => {
    facebook.style.cursor = 'pointer'
    facebook.style.transform = 'scale(0.95)'
}

facebook.onmouseout = () => {
    facebook.style.cursor = 'pointer'
    facebook.style.transform = 'scale(1)'
}

facebook.onclick = () => {
    window.open('https://www.facebook.com/profile.php?id=100094818530958', '_blank') 

}


menu.onmouseover = () => {
    menu.style.cursor = "pointer"
}

menu.onclick = () => {
    console.log("clicked")
    isOpened ? facebook.style.display = 'none' : facebook.style.display = 'block'
    if (!isOpened && window.innerWidth < 1200) {
        facebook.style.margin = '0 auto'
    }
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName === 'A') {
            isOpened ?
            children[i].style.display = "none" :
            children[i].style.display = "block"
        }
    }
    header.appendChild
    isOpened = !isOpened
}

window.onresize = () => {
    if (!isOpened && window.innerWidth > 1200) {
        facebook.style.margin = '0'
    }

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