document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    let error = "";

    if(name === "" || email === "" || password === ""){
        error += "All fields are required.<br>";
    }

    if(email !== "" && !email.includes("@")){
        error += "Email must contain @ symbol.<br>";
    }

    if(password !== "" && password.length < 6){
        error += "Password must be at least 6 characters long.<br>";
    }

    if(error !== ""){
        document.getElementById("error").innerHTML = error;
    }else{
        document.getElementById("error").innerHTML = "";
        alert("Form submitted successfully!");
    }

});