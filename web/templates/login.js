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
            //success: function(response){
            //    alert(JSON.stringify(response));
            //    $('#action').html("");
            //    if(response['status']==401){
            //    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');
            //    }else{
            //    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Logeado Correctamente</div>');
            //    }

                //$('#action').html(response['statusText']);
            //},
            //error: function(response){
            //    alert(JSON.stringify(response));
            //    $('#action').html("");
                //$('#action').append('<img width="35" height="35" src="/static/images/logo/fail.png"/>');
                //$('#action').html(response['statusText']);
            //    if(response['status']==401){
            //    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');
            //    }else{
            //    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Logeado Correctamente</div>');
            //    }
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');}
                else{
                $('#action').append('<div href="/static/presentacion.html" class="text-center"><img src="/static/images/check.png"width="20" height="20"/>Logueado Correctamente<a href="/static/presentacion.html"></a></div>')
                $('#action').
                }
                //$
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html("");
                if(response['status']==401){
                    $('#action').append('<div class="text-center"><img src="/static/images/error.png"width="20" height="20"/>Ingrese bien sus datos</div>');}
                else{
                $('#action').append('<div href="/static/presentacion.html" class="text-center"><img src="/static/images/check.png"width="20" height="20"/>Logueado Correctamente<a href="/static/presentacion.html"></a></div>')
                }
            }
        });
}