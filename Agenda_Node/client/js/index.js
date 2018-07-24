
function validarUsuario() {
    var emailDeUsuario = $('#user');
    var claveDeUsuario = $('#pass');
    if (emailDeUsuario.val() != "" && claveDeUsuario.val() != "") {
        $.ajax({
            url: '/usuarios/login',
            method: 'POST',
            data: {
                email: emailDeUsuario.val(),
                clave: claveDeUsuario.val()
            },
            success: function(res) {
                mostrarMensaje(res);
                if (res == "OK") {
                    window.location.href = "http://localhost:3000/main.html";
                }
            }
        })
    } else {
        alert("Complete todos los campos");
    }
}

function mostrarMensaje(msj){
    $('#mensajeSesion').html(msj);
}
