// var btnSubmit = document.getElementById('btnSubmit');
// btnSubmit.onclick = function () {
//     var txtUsername = document.getElementById("txtUsername");
//     var msgError = document.getElementById("msg-error");
//     if (txtUsername.value.length < 5) {
//         msgError.innerHTML = "* Tên của bạn quá ngắn.";
//         msgError.classList.remove("hidden-text");
//     } else if (txtUsername.value.length > 20) {
//         msgError.innerHTML = "* Tên của bạn quá dài."
//         msgError.classList.remove("hidden-text");
//     } else {
//         msgError.innerHTML = "Tên hợp lệ";
//         msgError.classList.remove("hidden-text");
//         msgError.classList.remove("danger-text");
//         msgError.classList.add("success-text");
//         // msgError.classList.add("hidden-text");
//     }
// }


var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "* Vui lòng nhập tên";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "* Tên của bạn quá ngắn";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "* Tên của bạn quá dài";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "* Tên hợp lệ";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }

    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui lòng nhập mật khẩu";
        msgPassword.classList.remove("hidden-text");
    } else {
        msgPassword.innerHTML = "* Mật khẩu hợp lệ";
        msgPassword.classList.remove("hidden-text");
        msgPassword.classList.remove("danger-text");
        msgPassword.classList.add("success-text");
    }

    var txtFullName = document.forms["register-form"]["fullName"];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtFullName == null || txtFullName.value.length == 0) {
        msgFullName.innerHTML = "* Vui lòng nhập tên đầy đủ của bạn";
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length < 5) {
        msgFullName.innerHTML = "* Tên của bạn quá ngắn";
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length > 30) {
        msgFullName.innerHTML = "* Tên của bạn quá dài";
        msgFullName.classList.remove("hidden-text");
    } else {
        msgFullName.innerHTML = "* Tên hợp lệ";
        msgFullName.classList.remove("hidden-text");
        msgFullName.classList.remove("danger-text");
        msgFullName.classList.add("success-text");
    }

    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var valueTxtEmail = txtEmail.value
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email của bạn";
        msgEmail.classList.remove("hidden-text");
    } else {
        if (valueTxtEmail.search('@') == -1) {
            msgEmail.innerHTML = "* Email không hợp lệ. Vui lòng điền email theo dạng abc@gmail.com";
            msgEmail.classList.remove("hidden-text");
        } else {
            msgEmail.innerHTML = "* Email hợp lệ";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
    }
}