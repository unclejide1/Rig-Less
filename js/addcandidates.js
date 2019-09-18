$(document).ready(function () {
    $("#addcandid").on("submit", function (e) {
        e.preventDefault(e);
        let data = {
            name: $("#pname").val(),
            email: $("#pemail").val(),
            party: $("#pparty").val(),
            age: $("#page").val()
        }

        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/candidates",
            data: data,
            success: function (result) {
                alert("Created Successfully");
            }
        })
    })

})