/**
 * 
 */

  function validarFormulario() {
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden");
                return false;
            }

            // Aquí podrías agregar más validaciones según tus necesidades

            // Si todo está correcto, puedes enviar el formulario
            alert("Registrado correctamente");
            return true;
        }
        
        
        
    
    
    document.getElementById('btnPagar').addEventListener('click', function() {
        alert('¡Pedido realizado correctamente!');
    });
    
    
    document.getElementById("btnPagar").addEventListener("click", function() {
        var nombreTarjeta = document.getElementById("typeName").value;
        var numeroTarjeta = document.getElementById("typeText").value;
        var expiracion = document.getElementById("typeExp").value;
        var cvv = document.getElementById("typeText").value;
        
        // Expresiones regulares para validar nombre y número de tarjeta
        var regexNombre = /^[a-zA-Z\s]+$/;
        var regexNumero = /^[0-9\s]+$/;
        
        var isValid = true;
        
        // Validar nombre de tarjeta
        if (!regexNombre.test(nombreTarjeta)) {
            isValid = false;
            alert("Por favor, ingresa un nombre de tarjeta válido.");
            return;
        }
        
        // Validar número de tarjeta
        if (!regexNumero.test(numeroTarjeta)) {
            isValid = false;
            alert("Por favor, ingresa un número de tarjeta válido.");
            return;
        }
        
        // Más validaciones (expiración, CVV, etc.) aquí
        
        // Si todos los campos son válidos, continuar con el pago
        if (isValid) {
            alert("Pago exitoso. Gracias por su compra.");
            // Aquí puedes enviar los datos del pago al servidor o realizar otras acciones necesarias
        }
    });
    
    
