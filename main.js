function executeThisCodeAfterFileIsLoaded () {
  var data = JSON.parse(this.responseText);
  // A bit more about what `this` is here. What is the execution context?
  console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
}

function executeThisCodeIfXHRFails (){

}

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogFood.json");

// Tell the XHR object to start
myRequest.send();
