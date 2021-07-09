// Details of single products

var Main_img = document.getElementById('MainImg');
var Small_img = document.getElementsByClassName('small-img'); 

Small_img[0].onclick = function(){
    Main_img.src = Small_img[0].src;
}
Small_img[1].onclick = function(){
    Main_img.src = Small_img[1].src;
}
Small_img[2].onclick = function(){
    Main_img.src = Small_img[2].src;
}
Small_img[3].onclick = function(){
    Main_img.src = Small_img[3].src;
}


// Form Validation

document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm1'),
        document.getElementById('demoForm2'),
        
        {
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});