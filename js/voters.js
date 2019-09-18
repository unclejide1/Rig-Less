$(document).ready(function (){
    $.ajax({
        "url": "http://localhost:3000/voters",
        "method": 'get'
    }).done(res =>{
        res.forEach((elem, i) =>{
            $('#voters').append(
                `<tr>
                <td>${i+1}</td>
                <td>${elem.username}</td>
                <td>${elem.email}</td>
                <td>${elem.age}</td>
                </tr>
                `
            )
        })
    })
})
