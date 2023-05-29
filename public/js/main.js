const expandMenu = document.querySelector(".expandmenu")
const menu = document.querySelector(".menu")

window.addEventListener("click", (e) => {

    const classeAll = e.target.classList.contains("expandmenu")

    if(classeAll){
        if(menu.classList.contains("expand") == true){
            menu.classList.remove("expand")
            expandMenu.classList.remove("ph-sign-out")
            expandMenu.classList.add("ph-list")
        }else{
            menu.classList.add("expand")  
            expandMenu.classList.add("ph-sign-out")
            expandMenu.classList.remove("ph-list")
        } 
    } else{
        if(menu.classList.contains("expand") == true){
            menu.classList.remove("expand")
            expandMenu.classList.remove("ph-sign-out")
            expandMenu.classList.add("ph-list")
        }
    }

})
