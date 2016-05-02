function executeThisCodeAfterFileIsLoaded () {
  var data = JSON.parse(this.responseText);

  insertCardInfoToDom(data.dog_brands);

}

function executeThisCodeIfXHRFails (){
  throw "failed to load";
}

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs`
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogFood.json");

// Tell the XHR object to start
myRequest.send();


//Insert Dog Food cards into DOM
function insertCardInfoToDom (bubbles) {
  var placeholderDiv = document.getElementById("mainBody");
  for (var i = 0; i < bubbles.length; i++) {
    placeholderDiv.innerHTML += "<article class=\"card\"> <h3 class=\"brand\">" + bubbles[i].name +
    "</h3>";
    for (var j = 0; j < bubbles[i].types.length; j++) {
      placeholderDiv.innerHTML += "<section class=\"type\"> <h5>Food type:</h5> <p>" +
      bubbles[j].types[j].type + "</p> </section>";
        for (var k = 0; k < bubbles[i].types.length; k++) {
          placeholderDiv.innerHTML += "<section id=\"volPrice\"> <p class=\"volume\">" +
          bubbles[k].types[k].volumes[k].name + "</p> <p class=\"price\">" +
          bubbles[k].types[k].volumes[k].price + "</p> </section> </article>";
        }
    }
  }
}

//Make dog food visible and hide cat food
var dogFoodLink = document.getElementById("link-dog");
var dogFoodView = document.getElementById("dog-view");


dogFoodLink.addEventListener("click", function(event) {
  event.preventDefault();
  dogFoodView.classList.add("hidden");
  catFoodView.classList.add("hidden");

  dogFoodView.classList.add("visible");
  dogFoodView.classList.remove("hidden");
});

//Make cat food visible and hide dog food
var catFoodLink = document.getElementById("link-cat");
var catFoodView = document.getElementById("cat-view");

catFoodLink.addEventListener("click", function(event) {
  event.preventDefault();
  catFoodView.classList.add("hidden");
  dogFoodView.classList.add("hidden");

  catFoodView.classList.add("visible");
  catFoodView.classList.remove("hidden");
})








