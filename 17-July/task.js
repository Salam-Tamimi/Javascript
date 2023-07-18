

let table = document.getElementById("mytable")
let td = table.value
let btn = document.getElementById("btn")

btn.addEventListener("click",function(){
let x = new XMLHttpRequest();
x.open("GET","task.json")
x.onload = function data(){
    const xparse = JSON.parse(this.responseText);
    
        for (var i=0; i < xparse.length; i++){
            
            var row =  `<tr>
                         <th scope="row">${xparse[i].name}</th>
                         <td>${xparse[i].age}</td>
                         <td>${xparse[i].major}</td>
                         <td>${xparse[i].university}</td>
                         <td> <img src= "${xparse[i].image}" > </td>
                        </tr>`
                        table.innerHTML += row  
        } 
};
x.send();
})


  









