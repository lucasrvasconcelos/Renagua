const expandMenu = document.querySelector(".expandmenu")
const menu = document.querySelector(".menu")

window.addEventListener("click", (e)=>{

    const classeAll = e.target.classList.contains("expandmenu")

    if(classeAll){
        if(menu.classList.contains("expand") == true){
            menu.classList.remove("expand")
        }else{
            menu.classList.add("expand")
        } 
    } else{
        if(menu.classList.contains("expand") == true){
            menu.classList.remove("expand")      
        }
    }

})