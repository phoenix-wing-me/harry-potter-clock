const currentTime = document.getElementById('currentTime') ;
currentTimeUpdate();

const imageBlock = document.getElementById('image');

const wakeUpTime = document.getElementById('wakeUpTime');
const lunchTime = document.getElementById('lunchTime');
const napTime = document.getElementById('napTime');


const partyTime = document.getElementById('partyTime');
var partyTimeValue = false;

const consoleLink = document.getElementById('console');
printAndStuff();


//const wakeUpTime = 17//Math.floor(Math.random()*24);
//const lunchTime =12// Math.floor(Math.random()*24);
//const napTime = 16//Math.floor(Math.random()*24);
//const partyTime = false; 

function currentTimeUpdate(){
    var dateTime = new Date();
    var printValue = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
    console.log(printValue);
    currentTime.textContent = printValue;
    let t = setTimeout(function(){ currentTimeUpdate() }, 1000);
    
}


wakeUpTime.onchange = printAndStuff;
lunchTime.onchange = printAndStuff;
napTime.onchange = printAndStuff;
partyTime.onclick = function(){
    if (partyTimeValue) {
        partyTimeValue = false;
        partyTime.style.background = "grey";
    }
    else {
        partyTimeValue = true;
        partyTime.style.background="green";
    }
    printAndStuff();
}

function printAndStuff(){
    var time = new Date();
    var currentHour = time.getHours();
    var currentMinutes = time.getMinutes();
    /*console.log(`wakeUpTime = ${wakeUpTime.value}`);
    console.log(`lunchTime = ${lunchTime.value}`);
    console.log(`napTime = ${napTime.value}`);
    console.log(`napTime = ${partyTimeValue}`);*/
    if(partyTimeValue == true){
        //console.log("Let's Party!!");
        consoleLink.textContent = "Let's Party!!🥳";
        imageBlock.style.background="url('images/party.jpg') no-repeat center" ;
    }
    else{
        //console.log("current Hour" + currentHour);
        if(wakeUpTime.value == currentHour){
            //console.log("Its Wake Up Time! 좋은 하루 되세요");
            consoleLink.innerHTML = "Its Wake Up Time! 좋은 하루 되세요";
            imageBlock.style.background="url('images/wakeup.jpg') no-repeat center" ;
        }
        else if(lunchTime.value == currentHour){
            //console.log("Lunch Time! 많이 먹다");
            consoleLink.textContent = "Lunch Time! 많이 먹다";
            imageBlock.style.background="url('images/lunch.jpg') no-repeat center" ;
        }
        else if(napTime.value == currentHour){
            //console.log("Its Nap time! 잘 자");
            consoleLink.textContent ="Its Nap time! 잘 자";
            imageBlock.style.background="url('images/nap.jpg') no-repeat center" ;
        }
        else{
            if(currentHour>=0 && (currentHour<=11 && currentMinutes<=59)){
                //console.log("Good morning");
                consoleLink.textContent ="Good morning!🌞";
                imageBlock.style.background="url('images/morning.jpg') no-repeat center" ;
            }
            else if(currentHour>=12 && (currentHour<=4 && currentMinutes<=59)){
                //console.log("Good afternoon");
                consoleLink.textContent ="Good afternoon";
                imageBlock.style.background="url('images/afternoon.jpg') no-repeat center" ;
            }
            else{
                //console.log("Good night");
                consoleLink.textContent ="Good night!🌙";
                imageBlock.style.background="url('images/night.jpg') no-repeat center" ;
            }
        }
    }
};





