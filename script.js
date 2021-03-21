
function validateForm() {
    var name = $("#username").val();
    var email = $("#email").val();
    var pass = $("#password").val();
    var c_pass = $("#confirm-password").val();
    var ch = true;
    if (name.length < 5) {
        $("#error-user").css("color", "red");
        $("#username").css("border", "2px solid red");
        if (name == "") {
            $("#error-user").html("Please fill the Username field");
        }
        ch = false;
    }
    else{
        $("#error-user").hide();
        $("#username").css("border","1px solid #ced4da");
        
    }
    if (email == "") {
        $("#error-email").css("color", "red");
        $("#email").css("border", "2px solid red");
        $("#error-email").html("Please fill the Email field");
        ch = false;
    }
    else{
        $("#error-email").hide();
        $("#email").css("border","1px solid #ced4da");
    }
    if (pass.length == 0) {

        $("#error-pass").css("color", "red");
        $("#password").css("border", "2px solid red");
            $("#error-pass").html("Please fill the Password field");
        ch = false;
    }
    else if (pass.length < 8) {

        $("#error-pass").css("color", "red");
        $("#password").css("border", "2px solid red");
        $("#error-pass").html("password must be atleast 8 characters long.");
        ch = false;
    }
    else{
        $("#error-pass").hide();
        $("#password").css("border","1px solid #ced4da");
    }
    if (c_pass.length == 0) {

        $("#error-confirm-pass").css("color", "red");
        $("#confirm-password").css("border", "2px solid red");
        $("#error-confirm-pass").html("Please fill the Confirm Password field");
        ch = false;
    }
    else if (c_pass != pass) {
        $("#error-confirm-pass").css("color", "red");
        $("#confirm-password").css("border", "2px solid red");
        $("#error-confirm-pass").html("Password does not match");
        ch = false;
    }
    else{
        $("#error-confirm-pass").hide();
        $("#confirm-password").css("border","1px solid #ced4da");
    }
    return ch;
}

