fetch('./data.json')
.then(res => res.json())
.then(data => {

// Daily
function updateDaily(name, number) {
    document.getElementById(`${name}-current`).innerHTML = data[number].timeframes.daily.current + "hrs";
    document.getElementById(`${name}-previous`).innerHTML = "Yesterday - " + data[number].timeframes.daily.previous + "hrs";
}
function clickDaily() {
    updateDaily("work", 0);
    updateDaily("play", 1);
    updateDaily("study", 2);
    updateDaily("exercise", 3);
    updateDaily("social", 4);
    updateDaily("self-care", 5);
}
document.getElementById('daily').addEventListener('click', clickDaily);

//Weekly
function updateWeekly(name, number) {
    document.getElementById(`${name}-current`).innerHTML = data[number].timeframes.weekly.current + "hrs";
    document.getElementById(`${name}-previous`).innerHTML = "Last Week - " + data[number].timeframes.weekly.previous + "hrs";
}
function clickWeekly() {
    updateWeekly("work", 0);
    updateWeekly("play", 1);
    updateWeekly("study", 2);
    updateWeekly("exercise", 3);
    updateWeekly("social", 4);
    updateWeekly("self-care", 5);
}
document.getElementById('weekly').addEventListener('click', clickWeekly);
clickWeekly(); //displays weekly stats on load

//Monthly
function updateMonthly(name, number) {
    document.getElementById(`${name}-current`).innerHTML = data[number].timeframes.monthly.current + "hrs";
    document.getElementById(`${name}-previous`).innerHTML = "Last Month - " + data[number].timeframes.monthly.previous + "hrs";
}
function clickMonthly() {
    updateMonthly("work", 0);
    updateMonthly("play", 1);
    updateMonthly("study", 2);
    updateMonthly("exercise", 3);
    updateMonthly("social", 4);
    updateMonthly("self-care", 5);
}
document.getElementById('monthly').addEventListener('click', clickMonthly);
});