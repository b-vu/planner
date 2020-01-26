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
        var currentHourCounterGray = currentHour;
        var currentHourCounterGreen = currentHour;
        console.log(currentHour, currentHourCounterGray, currentHourCounterGreen)
        if(currentHour >= 0 && currentHour <= 8){
            $(".schedule").attr("style", "background-color:rgb(110, 219, 110)");
        }
        else if(currentHour >= 9 && currentHour <= 17){ //check if this works
            var currentHourString = "#".concat(currentHour.toString());
            $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");
            console.log(currentHour, currentHourString);
            console.log($(currentHourString).attr("style"));

            while(currentHourCounterGray > 9){ //check if this works
                currentHourCounterGray--;
                var pastHourString = "#".concat(currentHourCounterGray.toString());
                $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
            }

            while(currentHourCounterGreen < 17){ //check if this works
                currentHourCounterGreen++;
                var futureHourString = "#".concat(currentHourCounterGreen.toString());
                $(futureHourString).attr("style", "background-color:rgb(110, 219, 110)");
            }
        }
        else if(currentHour >= 18){
            $(".schedule").attr("style", "background-color:rgb(163, 163, 163)");
        }

        var updateHour = setInterval(function(){
            var currentHour = moment().hour();
            var currentHourCounterGray = currentHour;
            var currentHourCounterGreen = currentHour;
            console.log(currentHour, currentHourCounterGray, currentHourCounterGreen)
            if(currentHour >= 0 && currentHour <= 8){
                $(".schedule").attr("style", "background-color:rgb(110, 219, 110)");
            }
            else if(currentHour >= 9 && currentHour <= 17){ //check if this works
                var currentHourString = "#".concat(currentHour.toString());
                $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");
                console.log(currentHour, currentHourString);
                console.log($(currentHourString).attr("style"));

                while(currentHourCounterGray > 9){ //check if this works
                    currentHourCounterGray--;
                    var pastHourString = "#".concat(currentHourCounterGray.toString());
                    $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
                }

                while(currentHourCounterGreen < 17){ //check if this works
                    currentHourCounterGreen++;
                    var futureHourString = "#".concat(currentHourCounterGreen.toString());
                    $(futureHourString).attr("style", "background-color:rgb(110, 219, 110)");
                }
            }
            else if(currentHour >= 18){
                $(".schedule").attr("style", "background-color:rgb(163, 163, 163)");
            }
            console.log("minutes")
        }, 60000) //checks every minute
    };

    displayDate();
    displayTime();
    displaySchedule();
});