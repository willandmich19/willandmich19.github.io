$(document).ready(function(){
    
    var rsvp = "yes";
    $('#rsvpYes').click(function() {
        rsvp = "yes";
    });

    $('#rsvpNo').click(function() {
        rsvp = "no";
    })

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
        if(rsvp == "yes") {
            var title = $("#selectTitle").val();
            var firstName = $('#inputFirstName').val();
            var lastName = $('#inputLastName').val();
            var email = $('#inputEmailAddress').val();
        
            var numOfGuests = $('#selectNumberOfGuests').val();
            var nameOfGuests = $('#textareaNameOfGuests').val();
            var specialIn = $('#textareaSpecialInstructions').val();
        
            console.log("Was here");
            alert("Form Submitted");
        }
        else {
            console.log("no was here");
            alert("Form no submitted");
        }

        e.preventDefault();
    });
    
});