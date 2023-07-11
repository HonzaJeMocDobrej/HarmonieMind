let content1 = document.getElementById('focusable1')
let content2 = document.getElementById('focusable2')
let phone = document.getElementById('main-p')
let mail = document.getElementById('main-e')


const focus = (text, item, path) => {
    item.onmouseover = () => {
        item.style.cursor = "pointer"
        text.style.color = "#a2d1ec"
    }

    item.onmouseout = () => {
        text.style.color = "rgb(117, 115, 115)"
    }

    item.onclick = () => {
        window.location = path;
    }
}

focus(phone, content1, "tel:704721304")
focus(mail, content2, "mailto:testmail@harmoniemind.cz")
