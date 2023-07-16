names1=["Salam", "Muna","Shahd", "Sabah"]
ages1= ['24 years old', '22 years old','21 years old', '23 years old']

for (i=0 ; i<=4 ; i++){
    let card = document.createElement('div');
card.style.background= 'gray'
card.style.width= '300px'
card.style.height= '300px'
card.style.margin= '30px'
card.style.border= '2px solid black'
const names = document.createElement('h2');
const name = document.createTextNode(names1[i])
names.appendChild(name);

const ages = document.createElement('p');
const age = document.createTextNode(ages1[i])
ages.appendChild(age)

let image = document.createElement('img');
image.src = 'img.jpg'; 
image.alt = 'Image'; 
image.style.width= '150px'

document.body.appendChild(card)
card.appendChild(image);
card.appendChild(names);
card.appendChild(ages);
    
}





 

 