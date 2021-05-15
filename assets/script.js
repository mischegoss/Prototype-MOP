/* Key Topic variables and array */
var topics = ["Git", "git", "GitHub", "HTML", "CSS"]
var highlighted = "";
var searchTopic;

/*Key Topic: Functions */
function topicChecker() {
/* Worth Knowing: Window Functions */
searchTopic = prompt("What topic would you like use to search for? For testing use Git or HTML")
/* Key Topic: for Loop) */
for (var x=0; x< topics.length; x++) {
  if (searchTopic === topics[x]) {
    selectSection()
    /* Worth Knowing: return usage */
    return;
  } else {
    alert("Topic is not covered")
    return;
  }
 }
}

function selectSection() {
    if (searchTopic === "Git") {
      /* Worth Knowing: Functions can take parameters */
      highlightSection("git-section");
      return;
     
    // TODO: These need to be expanded to include topics in array
    } else if (selectionPrompt === "HTML" || selectionPrompt === "Semantic HTML") {
        highlightSection("html-section");
        return;

    } else if (selectionPrompt === "CSS") {
        highlightSection("css-section");
        return;

    } else if (selectionPrompt === "JavaScript") {
        highlightSection("javascript-section");
        return;

    } else if (selectionPrompt === "Deployment") {
        highlightSection("deployment-section");
        return;
    /* Worth Knowing: Error Handling intro */
    } else {
      alert("Oh no! Something went wrong")
    }
}

// This helper function is provided for students
function highlightSection(target) {
    highlighted = document.getElementById(target);
    highlighted.scrollIntoView({behavior: "smooth"});
    highlighted.style.backgroundColor = "yellow";
}

// This button code can be provided to students
var button = document.getElementById("button")
button.addEventListener("click", topicChecker)
