$(document).ready(function () {

    $("#register").on("submit", function (e) {
        e.preventDefault(e);
        let data = {
            username: $("#user").val(),
            email: $("#mail").val(),
            password: $("#pass").val(),
            age: $("#aged").val()
        }

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/voters",
            data: data,
            success: function (result) {
                alert("registration successful");
            }
        })
    })
    $("#signin").on("submit", function (e) {
        e.preventDefault(e);
        let username = $("#signinuser").val();
        let email = $("#mail").val();
        let password = $("#signpass").val();
        let age = $("#aged").val();

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/voters",

            success: function (result) {
                let valid;
                for (let i=0; i<result.length; i++){
                    if(result[i].username === username && result[i].password === password){
                        console.log(result[i].username, result[i].password, username, password)
                        valid = true;
                    }else{
                        console.log(result[i].username, result[i].password, username, password)
                        valid = false
                    }
                }
                if(valid === true){
                    window.location = "http://127.0.0.1:5500/html/vote.html";
                }else{
                    alert("invalid email or password");
                }

            }
        })
    })

})
