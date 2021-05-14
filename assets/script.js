// Need array and variable
var colorChoices = ["Red", "red", "Blue", "blue", "Yellow", "yellow", "Green", "green"]

// Need function declaration 
function colorPicker() {
    // Need window prompt
    var color = prompt("Pick a background color: Red, Blue, Yellow or Green")
    // Need for loop
    for (var x =0; x < colorChoices.length; x++) {
        if (color === colorChoices[x]) {
          // Need Style Background Property
          document.body.style.background = color;
          return;
        }
      }
    // Need window alert
    alert("That is not a valid color choice");
    // This may be a bad idea calling the function inside the function at this point
    colorPicker();
}

// Calling function
colorPicker();