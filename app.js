var student = {
  name:"",
  type:"student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup",calculateNumericOutput);
  document.getElementById('output').innerText = "Total value is " + totalNameValue;
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i< student.name.length;i++) {
    totalNameValue += student.name.charCodeAt(i);
  }
}
