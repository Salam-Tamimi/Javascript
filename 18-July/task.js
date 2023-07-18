let table = document.getElementById("mytable")
let btn = document.getElementById("btn")

async function getRepositories() {
    const response = await fetch`https://api.github.com/users/Salam-Tamimi/repos`;
    const data = await response.json();
    btn.addEventListener("click",function()
    {for (let i=0; i<6; i++)
    {
var row =  `<tr>
                         <th scope="row">${data[i].name}</th>
                         <td>${data[i].node_id}</td>
                         <td>${data[i].id}</td>
                         <td>${data[i].private}</td>
                        </tr>`
                        table.innerHTML += row  
    } })
  } 
getRepositories();

        
