$(document).ready(function () {
    let user = window.localStorage.getItem('user');
    if(user !== null){
        $('#logout').show();
        $('#login').hide();
    }else{
        $('#logout').hide();
        $('#login').show()
    }
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
            url: `http://localhost:3000/voters?username=${username}&password=${password}`,

            success: function (result) {
                let valid;
                if(result.length > 0){
                    window.location = "http://127.0.0.1:5500/html/vote.html";
                    window.localStorage.setItem('user', username);
                }else{
                    alert("invalid email or password");
                }
                // for (let i=0; i<result.length; i++){
                //     if(result[i].username === username && result[i].password === password){
                //         console.log(result[i].username, result[i].password, username, password)
                //         valid = true;
                //     }else{
                //         console.log(result[i].username, result[i].password, username, password)
                //         valid = false
                //     }
                // }
                // if(valid === true){
                //     window.location = "http://127.0.0.1:5500/html/vote.html";
                //     window.localStorage.setItem('user', username);
                // }else{
                //     alert("invalid email or password");
                // }

            }
        })
    })
    $("#logout").on('click',function(){
        window.localStorage.removeItem('user');
    })

})
