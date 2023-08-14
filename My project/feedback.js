var isError = false;
function checkName(){
    var name = document.getElementById("name").value;
    var reguser = /^[a-zA-Z0-9]+$/;
    if(!reguser.test(name)){
        document.getElementById("error").innerHTML = "Name should contain alphabets and digits only";
        isError = true;
    }
    else {
        document.getElementById("error").innerHTML = "";
        isError = false;
    }
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var regemail = /^[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,}$/;
    if(!regemail.test(email)){
        document.documentElementById("error").innerHTML = "Enter a valid Email ID";
        isError = true;
    }
    else{
        document.getElementById("error").innerHTML = "";
        isError = false;
    }
}

function checkPhone(){
    var phoneno = document.getElementById("phone").value;
    var regphone = /(\+91|0)?[0-9]{10}$/;
    if(!regphone.test(phoneno)){
        document.getElementById("error").innerHTML = "Enter 10 digit phone number";
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
        event.preventDefault();
    }
    else{
        alert('Thankyou for your feedback!');
    }
    console.log(isError);
}