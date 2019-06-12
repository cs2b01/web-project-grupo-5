function postData(){
    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var email= $('#email').val();
    var password = $('#password').val();
    var confirm_password = $('#password').val();
    var register = JSON.stringify({
                "email": email,
                "password": password,
                "name": name,
                "lastname": lastname,
                "password":confirm_password
            });
     $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',







     });

}