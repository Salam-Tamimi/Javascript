//task1

let hover = document.getElementById("hover")
hover.style.backgroundColor = "yellow"
hover.style.border = "2px black solid"
hover.style.width = "300px"
hover.style.padding = "5px"
hover.style.textAlign = "center"
hover.addEventListener ("mouseover", function(){ 
    hover.innerText = "Can I help U ?"
})
hover.addEventListener ("mouseleave", function(){ 
    hover.innerText = "Hello world !"
})

//task2

let jordan = document.getElementById("Jordan")
let img = document.getElementById ("img")
let btn = document.getElementById ("btn")
jordan.addEventListener ("click",function(){
    img.src= "flag-palastine.jpeg"
    btn.innerHTML= "Palastine"
})

//task3

font = document.getElementById("font")
size = document.getElementById("size")
style = document.getElementById("style")
style2 = document.getElementById("style2")
style3 = document.getElementById("style3")
text = document.getElementById("text")
// font.addEventListener ("click",function(){
//     font.style.
// })
size.addEventListener ("click",function(){
    text.style.fontSize= "15px"
})
style1.addEventListener ("click",function(){
    text.italics()
})
style2.addEventListener ("click",function(){
    text.bold()
})
style3.addEventListener ("click",function(){
    text.underlined()
})

