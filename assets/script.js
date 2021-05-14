// Array of possible choices
var reviewSections = ["Git", "git", "HTML", "html", "CSS", "Javascript", "JavaScript"]

// Need function declaration 
function sectionPicker() {
  
    // Need window prompt
    var  selectedSection = prompt("What section would you like to review: Git, HTML, CSS, JavaScript");
    // Need for loop
    for (var x =0; x < reviewSections.length; x++) {
        // Array index
        if (selectedSection === reviewSections[x]) {
          // Shows Zero indexing of arrays
          if (x <=1) {
            // Shows calling function with parameter
             highlightSection("git")
             // Shows return use case
             return
          }
          // TODO: Other conditions using helper function
        }
    }
    // Need window alert
    // Shows need for error messaging
    alert("Oh no, try again");
    // Shows calling function in function; Can be eliminated if out of scope
    sectionPicker();
}

// This is the helper function. Provided for students

function highlightSection(target) {
    // This can be provided code (of course it will need cleaned up)
    highlighted = document.getElementById(target);
     // This is just a bonus to show JavaScript is awesome
    highlighted.scrollIntoView();
    // Changes color
    highlighted.style.backgroundColor = "yellow";
}

// Calling function
sectionPicker();


/************************************Skills Covered ****************************/
/* Skills used
 * Array
 * Array Zero Index
 * For Loop
 * If/Else
 * Declaring a Function
 * Calling a Function
 * Declaring variable with var
 * Window alerts and prompts
 * return
 */

/* Skills that are shown PROVIDED)
 * document.getElementbyId()
 * Style property
 * scrollintoView()
 */
/********************************************************************************** */


