$(document).ready(function() {

    // get current year for footer info
    document.getElementById('this-year').innerHTML = thisYear();
    $("#container").load("src/home.html");

});

function thisYear() {
    return new Date().getFullYear();
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}