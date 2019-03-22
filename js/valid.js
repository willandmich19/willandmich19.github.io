$(document).ready(function(){

    function errorMessage() {
        return "<p><span class='no-widow'>There is</span> an error submitting the form. Please correct the error before <span class='no-widow'>submitting again.</span></p>";
    }

    function submitMessage(boolvalue, firstName, email) {
        var stringMessage = "";

        if(boolvalue) {
            stringMessage = "<p><span class='no-widow'>You have</span> <span class='no-widow'>RSVP <strong>Yes</strong>.</span></p><p>Thanks <strong>" + firstName + "</strong>.</p><p><span class='no-widow'>Your form</span> was submitted successfully, you should recieve a copy of this email at: <strong><span class='no-widow'>" + email + "</span></strong>.</p>";
        }
        else {
            stringMessage = "<p><span class='no-widow'>You have</span> <span class='no-widow'>RSVP <strong>No</strong>.</span></p><p>Thanks <strong>" + firstName + "</strong>.</p><p><span class='no-widow'>Your form</span> was submitted successfully, you should recieve a copy of this email at: <strong><span class='no-widow'>" + email + "</span></strong>.</p>";
        }

        return stringMessage;
    }

    function validateAlphabetical(stringvalue) {
        var regex = new RegExp("^[a-zA-Z ]+$");

        if(regex.test(stringvalue)) {
            return true;
        }
        else {
            return false;
        }
    }

    function validateEmail(stringvalue) {
        var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if(regex.test(stringvalue)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    var rsvp = "yes";
    $('#rsvpYes').click(function() {
        rsvp = "yes";
    });

    $('#rsvpNo').click(function() {
        rsvp = "no";
    })

    var flag = true;
    
    $('input[type="text"], input[type="email"], #textareaNameOfGuests').keyup(function() {
        var t = $('#textareaNameOfGuests').val();
        console.log("Value: " + t);

        if ($('#inputFirstName').val() != "" && $('#inputLastName').val() != "" && $('#inputEmailAddress').val() != "") {

            $('#inputSubmitNo').removeAttr('disabled');
            $('#inputSubmitNo').removeClass('btn-disabled');  
            
            if($('#textareaNameOfGuests').val() != "") {
                $('#inputSubmitYes').removeAttr('disabled');
                $('#inputSubmitYes').removeClass('btn-disabled');
            }
            else {
                $('#inputSubmitYes').attr('disabled', 'disabled');
                $('#inputSubmitYes').addClass('btn-disabled');  
            }

        }
        else {
            $('#inputSubmitYes').attr('disabled', 'disabled');
            $('#inputSubmitYes').addClass('btn-disabled');
            $('#inputSubmitNo').attr('disabled', 'disabled');
            $('#inputSubmitNo').addClass('btn-disabled');
        }
    });



    $('form').submit(function() {
        var title = $("#selectTitle").val();
        var firstName = $('#inputFirstName').val();
        var lastName = $('#inputLastName').val();
        var email = $('#inputEmailAddress').val();
    
        var numOfGuests = $('#selectNumberOfGuests').val();
        var nameOfGuests = $('#textareaNameOfGuests').val();
        var specialIn = $('#textareaSpecialInstructions').val();

        if(rsvp == "yes") {
            console.log("Was here");

            if(!validateAlphabetical(firstName)) {
                flag = false;
                $(".text-d-firstname").html("*Only alphabetical letters and spaces only.");
            }

            if(!validateAlphabetical(lastName)) {
                flag = false;
                $(".text-d-lastname").html("*Only alphabetical letters and spaces only.");
            }

            if(!validateEmail(email)) {
                flag = false;
                $(".text-d-email").html("*Valid email address only.");
            }

            if(flag) {
                $("#submitMessage").html(submitMessage(true, firstName, email));
            }
            else {
                $("#submitMessage").html(errorMessage());
            }
        }
        else {
            console.log("no was here");

            $("#submitMessage").html(submitMessage(false, firstName, email));
        }

        return false;
    });
    
});