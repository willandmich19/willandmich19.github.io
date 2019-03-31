$(document).ready(function(){

    var rsvp = "yes";
    $('#rsvpYes').click(function() {
        rsvp = "yes";
        $("#entry\\.562112224").attr("value", "yes");
        $('#inputSubmitYes').removeAttr('disabled');
        $('#inputSubmitYes').removeClass('btn-disabled');
    });

    $('#rsvpNo').click(function() {
        rsvp = "no";
        $("#entry\\.562112224").attr("value", "no");
        $('#inputSubmitNo').removeAttr('disabled');
        $('#inputSubmitNo').removeClass('btn-disabled'); 
    })


        $('#gForm').submit(function(event) {
            event.preventDefault();

            var title = $("#entry\\.239982359").val();
            var firstName = $('#entry\\.909741691').val();
            var lastName = $('#entry\\.1921397157').val();
            var email = $('#entry\\.272956838').val();

            var userRsvp = $('#entry\\.562112224').val();
        
            var numOfGuests = $('#entry\\.2084251440').val();
            var nameOfGuests = $('#entry\\.1491442351').val();
            var specialIn = $('#entry\\.1177541228').val();


            if(rsvp == "no") {

                    /* All Is good in here - RSVP No */
                    $('#entry\\.1491442351').val("not applicable");
                    $('#entry\\.1177541228').val("not applicable");


                    

                    

            }

            var extraData2 = {};

                    $('#gForm').ajaxSubmit({
                        data: extraData2,
                        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                        error: function () {
                            // Submit of form should be successful but JSONP callback will fail because Google Forms
                            // does not support it, so this is handled as a failure.
                            // You can also redirect the user to a custom thank-you page:
                            // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            
                        }
                       
                    });

                    console.log(title, firstName, lastName, email, numOfGuests, nameOfGuests, specialIn);
        });
});