$(document).ready(function () {
    let user = window.localStorage.getItem('user');
    if(user !== null){
        $('#logout').show();
        $('#login').hide();
    }else{
        $('#logout').hide();
        $('#login').show()
    }
    $("#logout").on('click',function(){
        window.localStorage.removeItem('user');
        location.reload();
    })
})