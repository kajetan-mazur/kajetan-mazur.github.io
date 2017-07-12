var btnAddActivity = document.getElementById('btnAddActivity');
btnAddActivity.addEventListener('click', function(){createForm();});
function createForm(){
  var divForm = document.getElementById('divForm');
  divForm.innerHTML='<form><label>Plan dnia</label><input></form>';
}
