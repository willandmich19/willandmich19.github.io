$(document).ready(function(){
    var counter = 11;
    var interval = setInterval(function() {
        counter--;

        if(counter == 0) {
            document.getElementById("countdown").innerHTML =  "<strong>" + counter + " second</strong>.";
            clearInterval(interval);
            $(location).attr("href", "./");
        }
        else {
            if(counter != 1) {
                document.getElementById("countdown").innerHTML = "<strong>" + counter + " seconds</strong>.";
            }
            else {
                document.getElementById("countdown").innerHTML = "<strong>" + counter + " second</strong>.";
            }
        }
    }, 1000);
});
