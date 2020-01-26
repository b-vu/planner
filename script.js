$(document).ready(function(){
    var schedule = JSON.parse(localStorage.getItem("schedule"));
    if(schedule === null){
        var schedule =  [{time: "9", toDo: ""},
                        {time: "10", toDo: ""},
                        {time: "11", toDo: ""},
                        {time: "12", toDo: ""},
                        {time: "13", toDo: ""},
                        {time: "14", toDo: ""},
                        {time: "15", toDo: ""},
                        {time: "16", toDo: ""},
                        {time: "17", toDo: ""},];
    };
    var times = ["#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17"];

    $("button").on("click", function(){
        for(i = 0; i < schedule.length; i++){
            if(schedule[i].time === $(this).prev().attr("id")){
                schedule[i].toDo = $(this).prev().val();
            }
        }
        saveSchedule();
    });

    function saveSchedule(){
        var storedSchedule = JSON.stringify(schedule);
        localStorage.setItem("schedule", storedSchedule);
        displaySchedule();
    };

    function displaySchedule(){
        getScheduleAsString = localStorage.getItem("schedule");
        getScheduleParsed = JSON.parse(getScheduleAsString);
        console.log(getScheduleParsed);
        for(i = 0; i < getScheduleParsed.length; i++){
            $(times[i]).text(getScheduleParsed[i].toDo);
        }
    };

    function displayDate(){
        $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var updateTime = setInterval(function(){
            $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        }, 1000)
    };

    function displayTime(){
        var currentHour = moment().hour();
        if(currentHour >= 0 && currentHour <= 8){ //check if this works
            $(".schedule").attr("style", "background-color:green");
        }
        else if(currentHour >= 9 && currentHour <= 17){ //check if this works
            var currentHourString = "#".concat(currentHour.toString());
            $(currentHourString).attr("style", "background-color:red")

            while(currentHour > 9){ //check if this works
                currentHour--;
                var pastHourString = "#".concat(currentHour.toString());
                $(pastHourString).attr("style", "background-color:gray");
            }

            while(currentHour < 17){ //check if this works
                currentHour++;
                var futureHourString = "#".concat(currentHour.toString());
                $(futureHourString).attr("style", "background-color:green");
            }
        }
        else if(currentHour >= 18){
            $(".schedule").attr("style", "background-color:gray");
        }

        var updateHour = setInterval(function(){
            var currentHour = moment().hour();
            if(currentHour >= 0 && currentHour <= 8){ //check if this works
                $(".schedule").attr("style", "background-color:green");
            }
            else if(currentHour >= 9 && currentHour <= 17){ //check if this works
                var currentHourString = "#".concat(currentHour.toString());
                $(currentHourString).attr("style", "background-color:red")

                while(currentHour > 9){ //check if this works
                    currentHour--;
                    var pastHourString = "#".concat(currentHour.toString());
                    $(pastHourString).attr("style", "background-color:gray");
                }
    
                while(currentHour < 17){ //check if this works
                    currentHour++;
                    var futureHourString = "#".concat(currentHour.toString());
                    $(futureHourString).attr("style", "background-color:green");
                }
            }
            else if(currentHour >= 18){
                $(".schedule").attr("style", "background-color:gray");
            }
            console.log("minutes")
        }, 60000) //checks every minute
    };
    
    displayDate();
    displayTime();
    displaySchedule();
});