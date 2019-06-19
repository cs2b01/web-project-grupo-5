function getdata(){
        $('#action').append('<div class="text-center">Autenticando. . .<img src="/static/images/loading.gif"width="20" height="20"/></div>');
        var email = $('#email').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "email": email,
                "password": password
            });
        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',

            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');}
                else{
                $('#action').append('<div class="text-center"><img src="/static/images/check.png"width="20" height="20"/>Logueado Correctamente</div>')
                var url = 'http://' + document.domain + ':' + location.port + '/static/index.html?email=' + email;
                 $(location).attr('href',url);
                }

                //$
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');}
                else{
                $('#action').append('<div class="text-center"><img src="/static/images/check.png"width="20" height="20"/>Logueado Correctamente</div>')
                var url = 'http://' + document.domain + ':' + location.port + '/static/index.html?username=' + email;
                 $(location).attr('href',url);
                }
            }
        });
}

function logout() {
    var url = 'http://' + document.domain + ':' + location.port + '/static/login.html';
                 $(location).attr('href',url);
}
