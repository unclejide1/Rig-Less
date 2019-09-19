$(document).ready(function () {
    let user = window.localStorage.getItem('user');
    if (user !== null) {
        $('#logout').show();
        $('#login').hide();
    } else if (user !== null) {
        $('#logout').hide();
        $('#login').show()
    } else if (user == null) {
        window.location = "/html/login.html";
    }

    $.ajax({
        "url": "http://localhost:3000/candidates",
        "method": 'GET'
    }).done(res => {
        res.forEach((elem) => {
            console.log(elem);
            
            $('#votes').append(
                `<option value="${elem.name}">${elem.name} &nbsp;${elem.party} </option>
                `
            )
        })
    });
    $("#logout").on('click', function () {
        window.localStorage.removeItem('user');
        location.reload();
    })
    $("#voting").on("submit", function (e) {
        e.preventDefault(e);
        let data = {
            votersUsername: user,
            candidatesId: $("#votes").val()
        }
        $.ajax({
            method: "GET",
            url: `http://localhost:3000/votes?votersUsername=${user}`,
            data: data,
            success: function (result) {
                console.log(user);
                console.log(result)
                if(result.length===0){
                    $.ajax({
                        type: 'POST',
                        url: `http://localhost:3000/votes`, success: function (result) {
                            alert("voted successfully");
                            
                        },
                        data: data, 

                    });
                   
                }else{
                    alert('go home')
                    // window.location = "http://127.0.0.1:5500/html/login.html";
                    // return;
                }
              
            }
        })
    })
    // $.ajax({
    //     type: 'GET',
    //     url: "http://localhost:3000/votes?votersUsername=user",
    //     data: data = {
    //         votersUsername: user,
    //         candidatesId: $("#votes").val()
    //     },
    //     success: function (result) {
    //         let valid;
    //         for (let i = 0; i < result.length; i++) {
    //             if (result[i].votersUsername === user) {
    //                 valid = true;
    //             } else {
    //                 valid = false
    //             }
    //         }console.log(user);
            
    //         if (valid === true) {
    //             alert("Already Voted, GO HOME!");
    //             console.log(valid);
    //             window.localStorage.removeItem('user');
    //             window.location = "http://127.0.0.1:5500/html/login.html";
    //         } else {
    //             null
    //         }
    //     }
    })

    $.ajax({
        "url": "http://localhost:3000/candidates",
        "method": "GET"
    }).done(res => {
        res.forEach((elem) => {
            console.log(elem);
            
            $.ajax({
                type: 'GET',
                url: `http://localhost:3000/votes?candidatesId=${elem.name}`,
                
                success: function (result) {
                   console.log(elem.name, result.length)
                   $('#result').append(
                    `<tr>
                    <td>${elem.name}</td>
                    <td>${result.length}</td>
                    </tr>
                    `
                )
                }
            })
        })
    });
  
// })