const  taskInput= document.querySelector('#taskInput');
const taskForm= document.querySelector('#taskForm');
const taskFilter =document.querySelector('#taskFilter');
const  clearBtn = document.querySelector('.clearBtn');
const  collection = document.querySelector('.collection');
// console.log(collection,"collectin");
// function on submit task 
taskForm.addEventListener('submit' ,taskSubmitFunction);
function taskSubmitFunction(event){
event.preventDefault();
const taskInputValue=taskInput.value;
// return if input field is empty
if(!taskInputValue ){
    return alert("input feild cannot be empty");
}
// console.log('it is working')
const listElement = document.createElement("li"); // creating li in dom 
listElement.className= ("list-group-item d-flex justify-content-between"); //class of li 
// innerHTML of  li 
listElement.innerHTML = `

${taskInputValue}        
<a href="#" class="crossAnchor secondary-content">
    <i class="fa fa-remove  "></i>
</a>
`;
// append li into ul 
collection.append(listElement);
// after clicking on add task button input will empty
taskInput.value ="";
deleteTask();
}
// clicking on each cross icon of li 
function deleteTask(){
    const  allDeleteIcons = document.querySelectorAll(".crossAnchor i");
    allDeleteIcons.forEach(function (eachsinglebtn){
   eachsinglebtn.addEventListener('click',removeListFunction);


    }
    
    );
}
// remove clicked cross icon li 
function removeListFunction(event){
event.preventDefault();
const currentElement = event.target;
if(confirm("Are you sure??")){
   currentElement.parentElement.parentElement.remove();
}
}
// remove all li on click 
clearBtn.addEventListener('click',(event) =>{
event.preventDefault();
if(confirm("Are you sure you want to delete all your tasks??"))
{
collection.innerHTML = "";
}
});
// filteration 
taskFilter.addEventListener("input",filterInput);
function filterInput(event){
event.preventDefault();
const currentValue = event.target.value;
// console.log(currentValue);
const filterValue = currentValue.toLowerCase();
// console.log(filterValue);
const listItem = document.querySelectorAll('.list-group-item');

listItem.forEach(function (singleLi){
    // console.log(singleLi)
    const singleLiText = singleLi.innerText.toLowerCase();
// console.log(singleLiText);
if(singleLiText.indexOf(filterValue) === -1){
    // singleLi.style.display = "none";
    singleLi.style.color = "white";
   
}else{
    // singleLi.style.display = "block";
    singleLi.style.color = "green";
}
   
});


};
