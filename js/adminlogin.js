$(document).ready(function (){
    $("#adminsignin").on("submit", function(e){
        e.preventDefault(e);
            let id= $("#adminId").val();
           let email= $("#mail").val();
           let pass= $("#adminPass").val();
           let age= $("#aged").val();
        
        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/admin",
            
            success: function(result){
                for(let i =0; i<result.length; i++){
                    if(result[i].email === id && result[i].password === pass){
                        window.location = "http://127.0.0.1:5500/html/admin/admindashboard.html";
                    }else{
                        alert("invalid email or password");
                    }
                    
                }
                
            }
        })
    })

})
 