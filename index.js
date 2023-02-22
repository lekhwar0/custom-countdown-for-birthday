const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secondsEl = document.getElementById('seconds');
const submit = document.querySelector("#submit");
const inputbox = document.querySelector(".input-box");
const birthdayText = document.querySelector(".birthday-text")

// function countdown() {
//     var holi = "7 march 2023";
//     var holiDate = new Date(holi);
//     const currentDate = new Date();
    
//     const totalSeconds = (holiDate - currentDate)/1000;
//     const days = Math.floor(totalSeconds / 3600 / 24) ;
//     const hours = Math.floor(totalSeconds / 3600 ) %24 ;
//     const minutes = Math.floor(totalSeconds / 60 ) %60 ;
//     const seconds = Math.floor(totalSeconds)%60
//     console.log(days, hours ,minutes , seconds);
    
//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = formatTime(hours) ;
//     minEl.innerHTML = formatTime(minutes);
//     secondsEl.innerHTML = formatTime(seconds) ;
// }

// function formatTime(time){
//     return time < 10 ? (`0${time}`) : time;
// }

// countdown();

// setInterval(countdown , 1000);

const dateSubmit = () =>{

    var holi = new Date(inputbox.value);
    console.log(holi)
    
    const currentDate = new Date();
    console.log(currentDate)
    var totalSeconds = (holi - currentDate)/1000;
    var days = Math.floor(totalSeconds / 3600 / 24) ;
    var hours = Math.floor(totalSeconds / 3600 ) %24 ;
    var minutes = Math.floor(totalSeconds / 60 ) %60 ;
    var seconds = Math.floor(totalSeconds)%60
    console.log(days, hours ,minutes , seconds);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours) ;
    minEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds) ;
    

};


function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


submit.addEventListener('click',() =>{
   
if(inputbox.value===""){
    alert ("Please type your birthdate")
}

else{
    dateSubmit();
    setInterval(dateSubmit , 1000);
    
};
    var holi = new Date(inputbox.value);
    const currentDate = new Date();
    if (holi=currentDate){

        birthdayText.innerHTML = ` Happy Birthday in Advance 🎉🎂`
    };

    return;
});

