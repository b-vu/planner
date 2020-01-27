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

        if(currentHour >= 0 && currentHour <= 8){
            $(".schedule").attr("style", "background-color:rgb(110, 219, 110)");
        }
        else if(currentHour >= 9 && currentHour <= 17){
            var currentHourString = "#".concat(currentHour.toString());
            $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");

            while(currentHourCounterGray > 9){
                currentHourCounterGray--;
                var pastHourString = "#".concat(currentHourCounterGray.toString());
                $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
            }

            while(currentHourCounterGreen < 17){
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

            if(currentHour >= 0 && currentHour <= 8){
                $(".schedule").attr("style", "background-color:rgb(110, 219, 110)");
            }
            else if(currentHour >= 9 && currentHour <= 17){
                var currentHourString = "#".concat(currentHour.toString());
                $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");

                while(currentHourCounterGray > 9){
                    currentHourCounterGray--;
                    var pastHourString = "#".concat(currentHourCounterGray.toString());
                    $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
                }

                while(currentHourCounterGreen < 17){
                    currentHourCounterGreen++;
                    var futureHourString = "#".concat(currentHourCounterGreen.toString());
                    $(futureHourString).attr("style", "background-color:rgb(110, 219, 110)");
                }
            }
            else if(currentHour >= 18){
                $(".schedule").attr("style", "background-color:rgb(163, 163, 163)");
            }
        }, 60000)
    };

    displayDate();
    displayTime();
    displaySchedule();
});