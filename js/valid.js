$(document).ready(function(){

    var cookieValue = $.cookie('WillAndMichRSVPSubmitted');

    if(cookieValue != "yes") {
        function errorMessage() {
            return "<p><span class='no-widow'>There is</span> an error submitting the form. Please correct the error before <span class='no-widow'>submitting again.</span></p>";
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
            var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

            if(regex.test(stringvalue)) {
                return true;
            }
            else {
                return false;
            }
        }

        function valdiateTextbox(stringvalue) {
            var regex = new RegExp("^[0-9a-zA-Z,. \r\n]+$");

            if(regex.test(stringvalue)) {
                return true;
            }
            else {
                return false;
            }
        }

        function weddingRSVP(stringValue) {
            if(stringValue == "yes") {
                $("#entry\\.562112224").attr("value", "yes");
                console.log('here');
            }
            else {
                $("#entry\\.562112224").attr("value", "no");
            }
        }
        
        var rsvp = "yes";
        $('#rsvpYes').click(function() {
            rsvp = "yes";
            weddingRSVP("yes");
        });

        $('#rsvpNo').click(function() {
            rsvp = "no";
            weddingRSVP("no");
        })

        var flag = true;

        $('input[type="text"], input[type="email"], #entry\\.1491442351').keyup(function() {

            if ($('#entry\\.909741691').val() != "" && $('#entry\\.1921397157').val() != "" && $('#entry\\.272956838').val() != "") {

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


        $('#gForm').submit(function() {

            var title = $("#entry\\.239982359").val();
            var firstName = $('#entry\\.909741691').val();
            var lastName = $('#entry\\.1921397157').val();
            var email = $('#entry\\.272956838').val();

            var userRsvp = $('#entry\\.562112224').val();
        
            var numOfGuests = $('#entry\\.2084251440').val();
            var nameOfGuests = $('#entry\\.1491442351').val();
            var specialIn = $('#entry\\.1177541228').val();

            var fnFlag = false;
            var lnFlag = false;
            var emFlag = false;

            var nogFlag = false;
            var spFlag = false;

            if(!validateAlphabetical(firstName)) {
                fnFlag = false;
                $(".text-d-firstname").html("Only alphabetical letters and spaces only.");
            }
            else {
                fnFlag = true
            }

            if(!validateAlphabetical(lastName)) {
                lnFlag = false;
                $(".text-d-lastname").html("Only alphabetical letters and spaces only.");
            }
            else {
                lnFlag = true;
            }

            if(!validateEmail(email)) {
                emFlag = false;
                $(".text-d-email").html("Valid email address format only.");
            }
            else {
                emFlag = true;
            }

            if(rsvp == "yes") {
                if(!valdiateTextbox(nameOfGuests)) {
                    nogFlag = false;
                    $(".text-d-nameofguests").html("Numbers, characters, commas and periods only.");
                }
                else {
                    if(numOfGuests == 0) {
                        if(nameOfGuests.toLowerCase() === "none") {
                            nogFlag = true;
                        }
                        else {
                            noFlag = false;
                            $(".text-d-nameofguests").html("Word \"none\" needs to be entered.");
                        }
                    }
                    else {
                        nogFlag = true;
                    }
                }

                if(specialIn != "") {
                    if(!valdiateTextbox(specialIn)) {
                        spFlag = false;
                        $(".text-d-speciali").html("Numbers, characters, commas and periods only.");
                    }
                    else {
                        spFlag = true;
                    }
                }
                else {
                    spFlag = true;
                }
                
                
                (fnFlag == true && lnFlag == true && emFlag == true && nogFlag == true && spFlag == true) ? flag = true : flag = false;

                if(flag) {
                    /* All Is good in here - RSVP Yes */

                    /* Set the cookie here to only submit once */
                   // $.cookie('WillAndMichRSVPSubmitted', 'yes', { expires: 120 });
                   
                   var extraData = {};

                   $('#gForm').ajaxSubmit({
                       data: extraData,
                       dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                       error: function () {
                           // Submit of form should be successful but JSONP callback will fail because Google Forms
                           // does not support it, so this is handled as a failure.
                           // You can also redirect the user to a custom thank-you page:
                           // window.location = 'http://www.mydomain.com/thankyoupage.html'
                       }
                   })

                   $(location).attr("href", "./redirect.html");
                }
                else {
                    $("#submitMessage").html(errorMessage());
                }
            }
            else {
                (fnFlag == true && lnFlag == true && emFlag == true) ? flag = true : flag = false;

                if(flag) {
                    /* All Is good in here - RSVP No */

                    /* Set the cookie here to only submit once */
                    //$.cookie('WillAndMichRSVPSubmitted', 'yes', { expires: 120 });

                    var extraData = {};

                    $('#gForm').ajaxSubmit({
                        data: extraData,
                        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                        error: function () {
                            // Submit of form should be successful but JSONP callback will fail because Google Forms
                            // does not support it, so this is handled as a failure.
                            // You can also redirect the user to a custom thank-you page:
                            // window.location = 'http://www.mydomain.com/thankyoupage.html'
                        }
                    })

                    $(location).attr("href", "./redirect.html");
                }
                else {
                    $("#submitMessage").html(errorMessage());
                }
            }

            return false;
        });
    }
    else {
        console.log("You have a cookie");
    }
});