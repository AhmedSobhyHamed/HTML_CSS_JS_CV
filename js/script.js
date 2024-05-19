

window.onload = function (){
    let btns = document.querySelectorAll(".btn-plus")
    btns.forEach(e=>e.parentNode.nextElementSibling.style.display="none")
    btns.forEach(e=>e.onclick = onc)
    let navbtn = document.querySelector("nav .ASH-nav-list.ASH-nav-icon")
    if(window.innerWidth < 578)
    navbtn.nextElementSibling.style.display = "none"
    navbtn.onclick = oncl
    window.onresize = _=> {if(window.innerWidth < 578)navbtn.nextElementSibling.style.display = "none"
                        else if(window.innerWidth >= 578)navbtn.nextElementSibling.style.display = "flex"}
}

function onc() {
    if(this.parentNode.nextElementSibling.style.display === "block")
        {
            this.parentNode.nextElementSibling.style.display="none"
            this.lastElementChild.style.display ="block"
        }
    else if(this.parentNode.nextElementSibling.style.display === "none")
        {
            this.parentNode.nextElementSibling.style.display="block"
            this.lastElementChild.style.display ="none"
        }
}

function oncl() {
    if(this.nextElementSibling.style.display === "block")
        {
            this.nextElementSibling.style.display = "none"
        }
    else if(this.nextElementSibling.style.display === "none")
        {
            this.nextElementSibling.style.display = "block"
        }
}