let tasks = [
    {
      "title": "task 1",  
      "isDelete": false,
      "isUpdate": false
    },
    {
        "title": "task 2",  
        "isDelete": false,
        "isUpdate": false
      },
      {
        "title": "task 3",  
        "isDelete": false,
        "isUpdate": false
      }
]

tasks =JSON.parse(localStorage.getItem("tasks")) || []
function fillTasks(){
 document.getElementById("tasks").innerHTML ="" 
 x=0  
for (const task of tasks) 
{
          let content =
                     `
                     <!-- task -->
                     <div class="task" style="display: flex;height: 70px;padding-top: 3px;">
                         <!-- task info -->
                         <div style="width: 70%;">
                             <h2 style="padding-left: 10px;">${task.title}</h2>
                         </div>
                         <!-- //task info// -->
                         <!-- task actions -->
                         <div>
                             <button onclick="deleteTask(${x})" class="round" style="background-color: rgb(177, 23, 23);">Delete</button>
                             <button class="round" style="background-color: rgb(23, 177, 41);" onclick="editTask(${x})">Update</button>
                         </div>
                         <!-- //task actions// -->
                         
                     </div>
                     <!-- //task// -->
                     `
                        document.getElementById("tasks").innerHTML += content  
                        x++  
}}

fillTasks()

document.getElementById("add").addEventListener("click",function(){
let taskName = prompt("Please enter task name!")
let taskObj = {
    "title":taskName,
    "isDelete": false,
    "isUpdate": false
}
tasks.push(taskObj)
tostring()


fillTasks()
})

function deleteTask(x){
    let isConfirmed = confirm("Are you sure you want to delete " + tasks[x].title + "?")
    if(isConfirmed===true)
    {
        tasks.splice(x,1)
        tostring()
        fillTasks()
    }
}

function editTask(x){
    let newTitle = prompt("Please enter new title for this task !",tasks[x].title)
    tostring()
    tasks[x].title = newTitle
    tostring()
    fillTasks()
}


function tostring(){
    let tasktoString= JSON.stringify(tasks)
    localStorage.setItem("tasks",tasktoString)
}