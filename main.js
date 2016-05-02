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


    // <article class="card">
    //   <h3 class="brand">Blue Buffalo</h3>
    //   <section class="breeds">
    //     <h5>Specially designed for these breeds:</h5>
    //     <p>plain, orange, and black</p>
    //   </section>
    //   <section class="type">
    //     <h5>Food type:</h5>
    //     <p>puppy</p>
    //   </section>
    //   <section id="volPrice">
    //     <p class="volume">24oz</p>
    //     <p class="price">$19.99</p>
    //   </section>
    // </article>
