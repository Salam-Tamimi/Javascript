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

let Font = document.querySelectorAll('select');
let inVal = document.querySelectorAll('input');
let txt = document.querySelector('p');

Font[0].addEventListener('change', function(){

    if(Font[0].value == "Times New Roman"){
        txt.style.fontFamily = "Times New Roman";
    }
    else if(Font[0].value == "Fantasy"){
        txt.style.fontFamily = "Fantasy";
    }

});


Font[1].addEventListener('change', function(){

    if(Font[1].value == "10px"){
        txt.style.fontSize = "10px";
    }
    else if(Font[1].value == "15px"){
        txt.style.fontSize = "15px";
    }

});

for(let i = 0; i < inVal.length; i++) {

    inVal[i].addEventListener('change', function() {

        if(inVal[i].checked) {

            if(inVal[i].id == "italic") {
                txt.style.fontStyle = 'italic';
            }
            else if (inVal[i].id == "bold") {
                txt.style.fontWeight = 'bold';
            }
            else {
                txt.style.textDecoration = 'underline';
            }

        }
        else {

            txt.style.fontStyle = 'normal';
            txt.style.fontWeight = "normal";
            txt.style.textDecoration = "none";
            
        }

    });

}


