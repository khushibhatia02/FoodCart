var isError = false;
function checkUsername(){
    var username = document.getElementById("username").value;
    var reguser = /^[a-zA-Z0-9]+&/;
    if(!reguser.test(username)){
        document.getElementById("error").innerHTML = "Username should contain alphabets and digits only";
        isError = true;
    }
    else {
        document.getElementById("error").innerHTML = "";
        isError = false;
    }
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var regemail = /^[a-zA-Z.0-9_]+/;
}



function checkPassword(){
    var pwd = document.getElementById("password1").value;
    var regpass = /^[A-Za-z]{1,}\W{1,}\d{1,}&/
    if(!regpass.test(pwd)){
        document.getElementById("error").innerHTML = "Password should contain one uppercase one lowercase one special character and one number";
        isError = true;
    }
    else {
        document.getElementById("error").innerHTML = "";
        isError = false;
    }
}

function checkRepassword(){
    var pwd = document.getElementById("password1").value;
    var repwd = document.getElementById("password2").value;
    if(repwd != pwd){
        document.getElementById("error").innerHTML = "Passwords do not match";
        isError = true;
    }
    else {
        document.getElementById("error").innerHTML = "";
        isError = false;
    }
}

function checkForError(){
    var error = document.getElementById("error");
    if(isError == true){
        document.getElementById("error").innerHTML = "Please rectify the error";
        alert('Please rectify the error');
    }
}