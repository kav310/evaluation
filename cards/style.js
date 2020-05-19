var btn = document.getElementById("click");
btn.addEventListener("click", display);
var count = 1;
function display() {
  var row = document.createElement("div");
  row.setAttribute("class", "flex");
  var h1 = document.querySelector("h1");
  for (let i = count; i < count + 5; i++) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var cardbtn = document.createElement("button");
    cardbtn.textContent = "Click ";
    cardbtn.addEventListener("click", function () {
      h1.textContent = i;
    });
    card.textContent = i;
    card.append(cardbtn);
    row.append(card);
  }
  count += 5;
  var container = document.querySelector(".content");
  container.append(row);
}