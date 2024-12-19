const user_pass=document.getElementById('user_password');
const confirm_pass=document.getElementById('confirm_password');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');


function check_Password()
{
    if (user_pass.value === confirm_pass.value){
        successMessage.style.display = 'inline';
        errorMessage.style.display = 'none';


    }
    else{
        errorMessage.style.display = 'inline';
        successMessage.style.display = 'none';
    }

}

user_pass.addEventListener('input', check_Password);
confirm_pass.addEventListener('input', check_Password);