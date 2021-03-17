
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
    if (email == "") {
        $("#error-email").css("color", "red");
        $("#email").css("border", "2px solid red");
        $("#error-email").html("Please fill the Email field");
        ch = false;
    }
    if (pass.length < 8) {

        $("#error-pass").css("color", "red");
        $("#password").css("border", "2px solid red");
        if (pass == "") {
            $("#error-pass").html("Please fill the Password field");
        }
        ch = false;
    }
    if (c_pass == "") {

        $("#error-confirm-pass").css("color", "red");
        $("#confirm-password").css("border", "2px solid red");
        $("#error-confirm-pass").html("Please fill the Confirm Password field");
        ch = false;
    }
    if (c_pass != pass) {
        $("#error-confirm-pass").css("color", "red");
        $("#confirm-password").css("border", "2px solid red");
        $("#error-confirm-pass").html("Password does not match");
        ch = false;
    }
    return ch;
}

