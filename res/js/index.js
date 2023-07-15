let content1 = document.getElementById('focusable1')
let content2 = document.getElementById('focusable2')
let phone = document.getElementById('main-p')
let mail = document.getElementById('main-e')
let menu = document.getElementById('menu')
let header = document.getElementById('headerItemsId')
let hoverPhone = document.getElementById('hover-phone')
let hoverMail = document.getElementById('hover-mail')
let children = header.children

let isOpened = false


const focus = (text, item, path, img) => {
    item.onmouseover = () => {
        item.style.cursor = "pointer"
        text.style.color = "#96b7de"
        img.style.filter = "invert(80%) sepia(5%) saturate(2772%) hue-rotate(183deg) brightness(89%) contrast(96%)"
        item.style.transform = 'scale(1.05)'
    }

    item.onmouseout = () => {
        text.style.color = "#a2d1ec"
        img.style.filter = "invert(83%) sepia(12%) saturate(906%) hue-rotate(166deg) brightness(95%) contrast(94%)"
        item.style.transform = 'scale(1)'
    }

    item.onclick = () => {
        window.location = path;
    }
}

focus(phone, content1, "tel:704721304", hoverPhone)
focus(mail, content2, "mailto:testmail@harmoniemind.cz", hoverMail)

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

window.addEventListener('orientationchange', function ()
{
    if (window.innerHeight > window.innerWidth)
    {
        document.getElementsByTagName('body')[0].style.transform = "rotate(90deg)";
    }
});