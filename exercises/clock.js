let person = prompt("Enter your name: ");

while(person === null){
    person = prompt("Enter your name: ");
}

document.getElementById("myName").innerHTML = person;

function displayClock(){
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("myClock").innerHTML = time;
}


function displayRefresh(){
    let refresh = 1000;
    mytime = setTimeout(displayClock(), refresh);
}

displayRefresh();


