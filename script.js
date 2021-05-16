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

   

