$(document).ready(function(){
    $('#username').focus(); //set user cursor into username
    var username = $('#username'), // Get the username field
        password = $('#password'), // Get the password field
        form_error = $('.form-error');

    var isValidForm = function(){
        if(username.val() == "" || password.val() == ""){
            var error = "Enter your username";
            if(username.val() == ""){
                username.parent().addClass('has-error has-feedback');
                username.parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
            }else{
                username.parent().removeClass('has-error has-feedback');
                username.parent().find('span').empty().remove();
                error = "";
            }

            if(password.val() == ""){
                password.parent().addClass('has-error has-feedback');
                password.parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');

                if(error == ""){
                    error = "Enter your password";
                }else{
                    error = "Enter your username and password";
                }
            }else{
                password.parent().removeClass('has-error has-feedback');
                password.parent().find('span').empty().remove();
            }
            form_error.html(error).show();
            return false;
        }else{
            username.parent().removeClass('has-error has-feedback');
            password.parent().removeClass('has-error has-feedback');
            password.parent().find('span').empty().remove();
            username.parent().find('span').empty().remove();
            form_error.hide();
            return true;
        }

    };

    username.keyup(function(){
        isValidForm();
    });
    password.keyup(function(){
        isValidForm();
    });
    
    // handle the submit button click event
    $('#submit-btn').click(function () {
        var btn = $(this); //get current clicked button

        btn.button('loading');

        if(!isValidForm()){
            btn.button('reset');
        }else{
            $.ajax({
                type: "POST",
                url: caramel.context + "/controllers/login/login.jag",
                dataType: 'json',
                data: { username: username.val() , password: password.val() },
                success:function(data){
                    if(data.status ===1){
                        window.location = caramel.context;
                    }else{
                        form_error.show().html("The username or password you entered is incorrect.");
                    }
                }
            })
                .always(function () {
                    btn.button('reset');
                });
        }



    });// end of submit button

});