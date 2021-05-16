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
            $("#comment12pm").addClass("past");
        } else if (now >= 12 && now < 13) {
            $("#comment12pm").addClass("present");
        } else if (now < 12) {
            $("#comment12pm").addClass("future");
        }
        if (now > 13) {
            $("#comment1pm").addClass("past");
        } else if (now >= 13 && now < 14) {
            $("#comment1pm").addClass("present");
        } else if (now < 13) {
            $("#comment1pm").addClass("future");
        }
        if (now > 14) {
            $("#comment2pm").addClass("past");
        } else if (now >= 14 && now < 15) {
            $("#comment2pm").addClass("present");
        } else if (now < 14) {
            $("#comment2pm").addClass("future");
        }
        if (now > 15) {
            $("#comment3pm").addClass("past");
        } else if (now >= 15 && now < 16) {
            $("#comment3pm").addClass("present");
        } else if (now < 15) {
            $("#comment3pm").addClass("future");
        }
        if (now > 16) {
            $("#comment4pm").addClass("past");
        } else if (now >= 16 && now < 17) {
            $("#comment4pm").addClass("present");
        } else if (now < 16) {
            $("#comment4pm").addClass("future");
        }
        if (now > 17) {
            $("#comment5pm").addClass("past");
        } else if (now >= 17 && now < 18) {
            $("#comment5pm").addClass("present");
        } else if (now < 17) {
            $("#comment5pm").addClass("future");
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

function tenAM() {
    let input_textarea2 = document.querySelector("#comment10am");
    let output_div2 = document.querySelector("#comment10am");
    let save_button2 = document.querySelector("#button10am");

    save_button2.addEventListener("click", updateOutput2);

    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");

    function updateOutput2() {
        localStorage.setItem("content", input_textarea2.value);

        output_div2.textContent = input_textarea2.value;
    }
}
    
function elevenAM() {
    let input_textarea3 = document.querySelector("#comment11am");
    let output_div3 = document.querySelector("#comment11am");
    let save_button3 = document.querySelector("#button11am");

    save_button3.addEventListener("click", updateOutput3);

    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");

    function updateOutput3() {
        localStorage.setItem("content3", input_textarea3.value);

        output_div3.textContent = input_textarea3.value;
    }
}




$("#clearSchedule").click(function() {
    localStorage.clear();
    window.location.assign("./index.html");
});

   
