let light = document.querySelector("#light")
let onbtn = document.querySelector("#onbtn")
let offbtn = document.querySelector("#offbtn")


onbtn.addEventListener("click" , function(){
    light.style.backgroundColor = "yellow"
    onbtn.style.backgroundColor = "red"
    offbtn.style.backgroundColor = ""
})

offbtn.addEventListener("click" , function(){
    light.style.backgroundColor = "white"
    onbtn.style.backgroundColor = ""
    offbtn.style.backgroundColor = "red"
})
