let alumniCount = 0;

document.getElementById('addAlumniForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var batch = document.getElementById('batch').value;
  var email = document.getElementById('email').value;

  addAlumni(name, batch, email);
  clearForm();
});

function addAlumni(name, batch, email) {
  var table = document.getElementById('alumniList');
  var row = table.insertRow(-1);
  
  var srCell = row.insertCell(0);
  srCell.textContent = ++alumniCount;
  
  var nameCell = row.insertCell(1);
  nameCell.textContent = name;

  var batchCell = row.insertCell(2);
  batchCell.textContent = batch;

  var emailCell = row.insertCell(3);
  emailCell.textContent = email;
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('batch').value = '';
  document.getElementById('email').value = '';
}
