$(document).ready(function(){
    var countDownDate = new Date("July 12, 2019 14:00:00").getTime();

    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with class names
        document.getElementById("weddingdatecountdown").innerHTML = "<span class='no-widow'>" + days + " days</span> " + hours + " hours "
        + minutes + " mins <span class='no-widow'>" + seconds + " secs left!</span>";
        
        // If the count down is over, write some text 
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("weddingdatecountdown").innerHTML = "EXPIRED";
        }
    }, 1000);

});
