var btnAddActivity = document.getElementById('btnAddActivity');
btnAddActivity.addEventListener('click', function(){createForm();});
var num =1;
function createForm(){
  var divForm = document.getElementById('divForm');
  divForm.innerHTML='<form id="form"><label id="label">What i have to do today?</label><br/><input id="divFormInput"><br/><button type="submit" id="divFormSubmit">Submit</button></form>';
  var divFormSubmit = document.getElementById('divFormSubmit');
  divFormSubmit.addEventListener('click', function(){addDayPlan(event);});
}

function addDayPlan(){
  event.preventDefault();
  var dayPlan = document.getElementById('dayPlan');
  var divFormInput = document.getElementById('divFormInput').value;
  dayPlan.innerHTML += `<p>${num}.${divFormInput}</p>`;
  num++;
}
