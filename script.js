var schedule = JSON.parse(localStorage.getItem("schedule"));
if(schedule === null){
    var schedule =  [{time: "9", toDo: ""},
                     {time: "10", toDo: ""},
                     {time: "11", toDo: ""},
                     {time: "12", toDo: ""},
                     {time: "1", toDo: ""},
                     {time: "2", toDo: ""},
                     {time: "3", toDo: ""},
                     {time: "4", toDo: ""},
                     {time: "5", toDo: ""},];
};
var times = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];

$("button").on("click", function(){
    if($(this).prev().val() !== ""){
        for(i = 0; i < schedule.length; i++){
            if(schedule[i].time === $(this).prev().attr("id")){
                schedule[i].toDo = $(this).prev().val();
            }
        }
        saveSchedule();
    }
    else{
        return;
    }
})

function saveSchedule(){
    var storedSchedule = JSON.stringify(schedule);
    localStorage.setItem("schedule", storedSchedule);
    displaySchedule();
}

function displaySchedule(){
    getScheduleAsString = localStorage.getItem("schedule");
    getScheduleParsed = JSON.parse(getScheduleAsString);
    console.log(getScheduleParsed);
    for(i = 0; i < getScheduleParsed.length; i++){
        $(times[i]).text(getScheduleParsed[i].toDo);
    }
}

displaySchedule();