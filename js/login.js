
document.getElementById('login-button').addEventListener('click',function() {
    const emailField = document.getElementById('input-email').value;
    const passwordField = document.getElementById('input-password').value;
    if(emailField == "maruf@admin.com" && passwordField == "1234"){
        window.location.href = 'home.html';
    }
})