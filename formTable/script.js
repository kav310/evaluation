var entry = document.getElementById('entry');
entry.addEventListener('click',saveDetails);
var row = 1;
var students = []
function saveDetails(){
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var science = document.getElementById('science').value
    var english = document.getElementById('english').value
    var math = document.getElementById('math').value

    var student  = {
        name:name,
        age:age,
        science: science,
        english: english,
        math:math,
        total : Number(science) + Number(english) +Number(math)
    }
    students.push(student);
    displayDetails(students);
   
}
function displayDetails(students){
    var display = document.getElementById('tbody');
    display.textContent ="";
    for(var i = 0;  i<students.length; i++){
    var tr = document.createElement('tr')
    var nametd = document.createElement('td');
    var agetd = document.createElement('td');
    var sciencetd = document.createElement('td');
    var englishtd= document.createElement('td');
    var mathtd =document.createElement('td');
    var totaltd =document.createElement('td');
    nametd.textContent = students[i].name;
    agetd.textContent = students[i].age;
    sciencetd.textContent = students[i].science;
    englishtd.textContent = students[i].english;
    mathtd.textContent = students[i].math;
    totaltd.textContent = students[i].total
    tr.append(nametd,agetd,sciencetd,englishtd,mathtd,totaltd)
    display.append(tr)
    }
}
var AscendingOrder = document.getElementById("AscendingOrder");
AscendingOrder.addEventListener("click", sortAscending);
function sortAscending() {
  var array = students.sort(function (a, b) {
    return a.total - b.total;
  });
  displayDetails(array);
}
var DescendingOrder = document.getElementById("DescendingOrder");
DescendingOrder.addEventListener("click", sortDescending);
function sortDescending() {
  var array = students.sort(function (a, b) {
    return b.total - a.total;
  });
  displayDetails(array);
}