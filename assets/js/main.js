// ======================================= Header  ====================================

let menuIcon = document.querySelector(".menu");
let hideIcon = document.querySelector(".hide");
let hiddenNav = document.querySelector(".hidden_nav");
let header = document.querySelector("header");


menuIcon.addEventListener("click", function(){
    hiddenNav.style.display = "flex";
    hiddenNav.style.transition = "all 0.3s";
    
    menuIcon.style.color = "#fff";
});  
hideIcon.addEventListener("click", function(){
    hiddenNav.style.display = "none";
    hiddenNav.style.transition = "all 0.3s";
    menuIcon.style.color = "#000";
});  


window.addEventListener("scroll", () => {
    header.classList.toggle("background", window.scrollY > 0);
});



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// window.onload = ()=>{
    
// setInterval(()=>{
//     var date = new Date();
//     var minutes = (date.getMinutes().toString().length == 1)?"0"+date.getMinutes():date.getMinutes();
//     var hours = (date.getHours() > 12)?date.getHours()-12: date.getHours();
//     document.getElementById("time").innerHTML = hours + ":" + minutes;

// document.getElementById("date").innerHTML = getDayName(date.getDay()) + ", " + getMonthName(date.getMonth()) + " " + date.getDate();
// },1000);

// }

function getDayName(d){
    switch(d){
        case 1:
            // return "Dushanba";
            return "Monday";
        break;
        case 2:
            // return "Seshanba";
            return "Tuesday";
        break;
        case 3:
            // return "Chorshanba";
            return "Wednesday";
        break;
        case 4:
            // return "Payshanba";
            return "Thursday";
        break;
        case 5:
            // return "Juma";
            return "Friday";
        break;
        case 6:
            // return "Shanba";
            return "Saturday";
        break;
        default:
        // return "Yakshanba";
        return "Sunday";
    }
}

function getMonthName(d){
    switch(d){
        case 0:
            // return "Janvar -";
            return "January -";
        break;
        case 1:
            // return "Fevral -";
            return "February -";
        break;
        case 2:
            // return "Mart -";
            return "March -";
        break;
        case 3:
            // return "Aprel -";
            return "April -";
        break;
        case 4:
            // return "May -";
            return "May -";
        break;
        case 5:
            // return "Iyun -";
            return "June -";
        break;
        case 6:
            // return "Iyul -";
            return "July -";
        break;
        case 7:
            // return "Avgust -";
            return "August -";
        break;
        case 8:
            // return "Sentabr -";
            return "September -";
        break;
        case 9:
            // return "Oktabr -";
            return "October -";
        break;
        case 10:
            // return "Noyabr -";
            return "November -";
        break;
        default:
        // return "Dekabr -";
        return "December -";
    }
}
