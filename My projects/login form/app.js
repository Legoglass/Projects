
 

$("#login-form").submit(function(e){

    e.preventDefault();

    var usernameSet = "new_user"
    var passwordSet = "123456789"

    var username = $("#username").val();
    var password = $("#password").val();

    var passwordInvalid = $("<p>*please ,  enter valid password</p>")
    var usernameInvalid = $("<p>*please ,  enter valid username</p>")
    var loginSuccessfully = $("<p>Successful login!</p>")
    var noInput = $("<p>*please , complet the usename and password</p>")

    function cssValidation() {
        if(username == usernameSet){
             $("#username").css("border-color" , "green")
             $("#icon").addClass("valid").text("done").css("color" , "green");
        }else{
            $("#login-container").append(usernameInvalid);
            $("#username").css("border-color" , "red")
            $("#icon").removeClass("valid").text("close").css("color" , "red");
        }
        if(password == passwordSet){
            $("#password").css("border-color" , "green")
            $("#iconp").addClass("valid").text("done").css("color" , "green");;
        }else{
            $("#login-container").append(passwordInvalid);
            $("#password").css("border-color" , "red")
            $("#iconp").removeClass("valid").text("close").css("color" , "red");
        }
        
    }

    function loginS(){

        if(username.trim() === "" || password.trim() === ""){
            $("#login-container").append(noInput);
        } else if(username === usernameSet && password === passwordSet){
            $("#login-container").append(loginSuccessfully);
        }
    }

    loginS();
    cssValidation();
 
    
});

$("#username").on("input focus", function() {
    $("#login-container").find("p").remove();
    $("#username").css("border-color", "");
});

$("#password").on("input focus", function() {
    $("#login-container").find("p").remove();
    $("#password").css("border-color", "");
});