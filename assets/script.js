// Array of possible choices; Shows planning for use "Git" and "git" w/o introducing string methods
var reviewSections = ["Git", "git", "HTML", "html", "CSS", "Javascript", "JavaScript"]

// Shows variable can get value later
var highlighted;

// function declaration 
function sectionPicker() {
  
    // Window prompts. Needed to demo interactivity 
    var selectedSection = prompt("What section would you like to review: Git, HTML, CSS, JavaScript");
    // Need for loop
    for (var x =0; x < reviewSections.length; x++) {
        // Array index
        if (selectedSection === reviewSections[x]) {
          // Reinforces zero indexing of arrays
          if (x <=1) {
            // Shows calling function with parameter; Function provided
             highlightSection("git-section")
             // Shows return use case
             return
          } 
        }
    }

    // Shows need for error messaging
    alert("Oh no, try again");
    // Shows calling function in function; Can be eliminated if out of scope
    sectionPicker();
}

// This is the helper function. PROVIDED for students
function highlightSection(target) {
    highlighted = document.getElementById(target);
     // This is just a bonus to show JavaScript is awesome
    highlighted.scrollIntoView({behavior: "smooth"});
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


