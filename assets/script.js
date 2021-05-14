//Script here

// This is what the students would do

// Need array
var inventory = ["bananas", "corn chips", "soup"];

// Need function declaration
function inventoryChecker() {
    // Need window prompt
    var inventoryToCheck = prompt("What item would you like to see if is in stock")
    // Need for loop and array length
    for (var x= 0; x < inventory.length; x++) {
      // Need array index
      if (inventory[x] === inventoryToCheck) {
      // Need alert
      alert("We have " + inventoryToCheck + " in stock")
      return;
    }
  }
  // Need window prompt
  alert("Sorry about your luck, try Amazon");
  return
}

// this would be provided

// Note this uses ID attribute. Not sure if that puts it out of scope
var button = document.getElementById("button");

// This feels like a step too far. The students are not calling an event in an event listener
// I am not sure this can be properly explained
button.addEventListener("click", inventoryChecker )
