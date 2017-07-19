const form = document.querySelector("form");
const dayPlan = document.querySelector("#dayPlan");
const input = document.querySelector(".input");
const addNew = document.querySelector("#addnew");
const newTaskData = document.querySelector("#newTaskData");
const monthYear = document.querySelector('#monthYear');
const today = new Date();
const table = document.querySelector('#calendar-table');
const prevMonth = document.querySelector('#prevMonth');
const nextMonth = document.querySelector('#nextMonth');
const daysMonth = new Date(2017,7,0);
let daysInMonth = daysMonth.getDate();
let numberDaysInMonth = Number(daysInMonth);
let month = today.getMonth();
console.log(month);
let year = today.getFullYear();
let currentMonth = new Date(year,month,1);
let day = currentMonth.getDay();
let dupa = document.querySelector('#calendar-table');

const todos = []; // tutaj będziemy przetrzymywac nasze TODOsy
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



form.addEventListener("submit", onSubmit);
dayPlan.addEventListener("click",doneTodos);
addNew.addEventListener("click", addNewTask);
prevMonth.addEventListener("click", costam);
// nextMonth.addEventListener("click",nextMonthFunc);

function costam(){
  month -=1;
  year;
  currentMonth;
  day;
  dupa;
  showMonthYear();
  showDayMonthYear();
};

function showDayMonthYear(){
  monthYear.innerHTML = `<p>${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()} ${day[today.getDay()]}</p>`;
};

function showMonthYear(){

  const monthsTD = `<tr>
    <td>Sun</td>
    <td>Mon</td>
    <td>Tue</td>
    <td>Wed</td>
    <td>Thu</td>
    <td>Fri</td>
    <td>Sat</td>
  </tr>`
  let something = '';
  for(let j=0;j<=5;j++){
    something += `<tr>`;
    if(j===0){
      for(let i =0;i<7;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    } else if(j===1){
      for(let i =7;i<14;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    } else if(j===2){
      for(let i =14;i<21;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    } else if(j===3){
      for(let i =21;i<28;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    } else if(j===4){
      for(let i =28;i<numberDaysInMonth+4;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    } else if(j===5){
      for(let i =numberDaysInMonth+4;i<numberDaysInMonth+6;i++){
        if(day > i){
          something +=`<td></td>`;
        } else {
          something += `<td>${i-day+1}</td>`;
        }
      }
    }
    something += "</tr>";
  }
  dupa.innerHTML = monthsTD + something;
};
showMonthYear();

showDayMonthYear();

function addNewTask() {
  newTaskData.style.display = "block";
}


function doneTodos(event){
  if(event.target.className === 'task' || event.target.className === 'donetask'){
    for(let i=0;i<todos.length;i++){
        if(event.target.attributes[1].nodeValue.includes(todos[i].id)){
            if(todos[i].done === false){
            todos[i].done = true;
          } else {todos[i].done = false;}
        }
      }
      renderList();
  } else if(event.target.className === 'removeicon') {
      for(let i =0;i<todos.length;i++){
        if(event.target.previousSibling.attributes[1].nodeValue.includes(todos[i].id)){
          const indexTodos = todos.indexOf(todos[i]);
          todos.splice(indexTodos,1);
        }
        renderList();
      }
    }
}

function onSubmit(event) {
  event.preventDefault();
  addTaskToList(input.value);
  form.reset();
}

function addTaskToList(task) {
  addTodo(task);
  renderList();
}

function addTodo(task) {
  todos.push({
    id: Date.now(),
    task: task,
    done: false
  });
}

function renderList() {
  let elements = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const done = todo.done ? "donetask" : "task";
    elements += `<div><p class=${done} data-id=${todo.id}>${todo.task}</p><img src="images/remove_icon.svg" class="removeicon"></img></div>`
  }
  dayPlan.innerHTML = elements;
}
