// **************************************
// XML events and functions for Dog food
// **************************************

//Dog Food XML functions for load and error
function executeThisCodeAfterFileIsLoadedDog () {
  var data = JSON.parse(this.responseText);

  insertCardInfoToDomDog(data.dog_brands);

}

function executeThisCodeIfXHRFailsDog (){
  throw "failed to load";
}

//XML request for dog food
var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoadedDog);
myRequest.addEventListener("error", executeThisCodeIfXHRFailsDog);

myRequest.open("GET", "dogFood.json");
myRequest.send();


//Insert Dog Food cards into DOM
function insertCardInfoToDomDog (bubbles) {
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

// **************************************
// XML events and functions for Cat food
// **************************************

//Cat Food XML functions for load and error
function executeThisCodeAfterFileIsLoadedCat () {
  var data = JSON.parse(this.responseText);

  insertCardInfoToDomCat(data.cat_brands);
  console.log(data.cat_brands);
}

function executeThisCodeIfXHRFailsCat (){
  throw "failed to load";
}

//XML request for dog food
var myCatRequest = new XMLHttpRequest();

myCatRequest.addEventListener("load", executeThisCodeAfterFileIsLoadedCat);
myCatRequest.addEventListener("error", executeThisCodeIfXHRFailsCat);

myCatRequest.open("GET", "catFood.json");
myCatRequest.send();

//Insert Cat Food cards into DOM
function insertCardInfoToDomCat (bubbles) {
  var placeholderDiv = document.getElementById("mainCatBody");
  for (var i = 0; i < bubbles.length; i++) {
    placeholderDiv.innerHTML += "<article class=\"card\"> <h3 class=\"brand\">" + bubbles[i].name +
    "</h3>";
      for (var h = 0; h < bubbles.length; h++) {
        placeholderDiv.innerHTML += "<section class=\"breeds\">" +
        "<h5>Specially designed for these breeds:</h5> <p>" + bubbles[h].breeds +
        "</p> </section>";
      }
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








