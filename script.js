window.onload = function(){
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

// When I open the planner
// Then the current day and time is displayed at the top of the calender


function clockRefresh() {
    let clock = document.getElementById("currentDay");
    let DateTime = luxon.DateTime;
    clock.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    }
    
    
    let time = setInterval(clockRefresh, 1000);

    // When I scroll down
    // Then I am presented with timeblocks for standard business hours
    // When I view the timeblocks for that day
    // Then each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)

    let now = new Date().getHours();

    function colorCode() {
        if (now > 9) {
            $("#comment9am").addClass("past");
        } else if (now >= 9 && now < 10) {
            $("#comment9am").addClass("present");
        } else if (now < 9) {
            $("#comment9am").addClass("future");
        }
        if (now > 10) {
            $("#comment10am").addClass("past");
        } else if (now >= 10 && now < 11) {
            $("#comment10am").addClass("present");
        } else if (now < 10) {
            $("#comment10am").addClass("future");
        }
        if (now > 11) {
            $("#comment11am").addClass("past");
        } else if (now >= 11 && now < 12) {
            $("#comment11am").addClass("present");
        } else if (now < 11) {
            $("#comment11am").addClass("future");
        }
        if (now > 12) {
            $("#comment11am").addClass("past");
        } else if (now >= 12 && now < 13) {
            $("#comment11am").addClass("present");
        } else if (now < 12) {
            $("#comment11am").addClass("future");
        }

    }
 
    // WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

function nineAM() {
    let input_textarea = document.querySelector("#comment9am");
    let output_div = document.querySelector("#comment9am");
    let save_button = document.querySelector("#button9am");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");

    function updateOutput() {
        localStorage.setItem("content", input_textarea.value);

        output_div.textContent = input_textarea.value;
    }
}
    

   

