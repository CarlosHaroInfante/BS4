// Función para validar el formulario de registro
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

// Función para calcular el subtotal y el total del carrito de compras
function calcularTotal() {
    let subtotal = 0;

    // Itera sobre cada fila de producto
    document.querySelectorAll('.precio').forEach(precioElemento => {
        const precio = parseFloat(precioElemento.getAttribute('data-precio'));
        const cantidad = parseInt(precioElemento.closest('tr').querySelector('.cantidad').value);
        subtotal += precio * cantidad;
    });

    const shipping = 2.99; // Costo de envío
    const total = subtotal + shipping;

    // Actualiza los valores en la página
    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
    document.getElementById('total').textContent = total.toFixed(2) + '€';
    document.getElementById('checkoutTotal').textContent = total.toFixed(2) + '€';
}

// Función para procesar el pago
document.getElementById('btnPagar').addEventListener('click', function() {
    alert('¡Pedido realizado correctamente!');
});

// Función para procesar el pago con tarjeta
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


const productos = [
    [1, "God of War Ragnarok", 49.99, 1],
    [2, "Bloodborne", 25.25, 1],
    [3, "Days Gone", 38.75, 1],
    [4, "GoT", 46.80, 1],
    [5, "Gears 5", 52.40, 1],
    [6, "Halo", 61.20, 1],
    [7, "Sea of Thieves", 22.70, 1],
    [8, "Stalker2", 74.60, 1],
    [9, "kirby y la tierra olvidada", 16.90, 1],
    [10, "Howarts Legacy", 47.30, 1],
    [11, "TLoZ Tears of Kingdom", 59.75, 1],
    [12, "Mario Wonder", 31.45, 1]
];


console.log(productos);

// Obtener el contenedor de la lista de productos
const listaProductos = document.getElementById("lista-productos");

// Recorrer el array de productos
productos.forEach(producto => {
    // Crear un nuevo elemento <li> para cada producto
    const itemProducto = document.createElement("li");
    
    // Asignar el contenido HTML con la información del producto
    itemProducto.innerHTML = `
        <span>ID: ${producto.id}</span>
        <span>Nombre: ${producto.nombre}</span>
        <span>Precio: ${producto.precio}</span>
        <span>Cantidad: ${producto.cantidad}</span>
    `;
    
    // Agregar el elemento <li> al contenedor de la lista de productos
    listaProductos.appendChild(itemProducto);
});

function agregarAlCarrito(nombreProducto, precioProducto) {
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Agregar el producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito en la barra de navegación
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');
    let totalProductos = 0;
    carrito.forEach(producto => {
        totalProductos += producto.cantidad; // Sumar la cantidad de cada producto en el carrito
    });
    contadorCarrito.textContent = totalProductos;
}


/**
 *  // Obtener referencia al contador del carrito
const contadorCarrito = document.getElementById('contador-carrito');

// Escuchar clics en los botones "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el valor actual del contador
        let cantidad = parseInt(contadorCarrito.textContent);
        // Incrementar el contador en 1
        cantidad++;
        // Actualizar el texto del contador
        contadorCarrito.textContent = cantidad;
    });
});


// Agregar eventos a los botones de restar del carrito
document.querySelectorAll('.restar-carrito').forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el nombre del producto a eliminar
        const productoEliminar = boton.parentElement.querySelector('.agregar-carrito').getAttribute('data-producto');
        
        // Obtener el carrito del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // Filtrar el carrito para eliminar el producto seleccionado
        carrito = carrito.filter(producto => producto.nombre !== productoEliminar);
        
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        // Obtener el contador actual del carrito
        let cantidadActual = parseInt(contadorCarrito.textContent);
        
        // Disminuir el contador en 1 si el producto eliminado estaba en el carrito
        if (carrito.length < cantidadActual) {
            cantidadActual--;
            // Actualizar el contador del carrito en la barra de navegación
            contadorCarrito.textContent = cantidadActual;
        }
    });
});


 calcularTotal(); 
    
    
    
    
  document.querySelectorAll('.eliminar-producto').forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el nombre y la cantidad del producto a eliminar
        const productoEliminar = boton.getAttribute('data-producto');
        const cantidadEliminar = parseInt(boton.closest('tr').querySelector('.cantidad').textContent);

        // Obtener el carrito del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Filtrar el carrito para eliminar el producto seleccionado
        carrito = carrito.filter(producto => producto.nombre !== productoEliminar);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Obtener el contador del carrito
        const contadorCarrito = document.getElementById('contador-carrito');

        // Obtener la cantidad actual del contador
        let cantidadActual = parseInt(contadorCarrito.textContent);

        // Restar la cantidad del producto eliminado al contador del carrito
        cantidadActual -= cantidadEliminar;

        // Actualizar el contador del carrito en la barra de navegación
        contadorCarrito.textContent = cantidadActual;
    });
});

// Función para actualizar el contador del carrito en la barra de navegación
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }
}







// Función para inicializar el contador del carrito
function inicializarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contadorCarrito.textContent = carrito.length;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Agregar el producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito en la barra de navegación
    inicializarContadorCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombreProducto) {
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Filtrar el carrito para eliminar el producto seleccionado
    carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito en la barra de navegación
    inicializarContadorCarrito();
}

// Agregar eventos a los botones de eliminar del carrito
document.querySelectorAll('.eliminar-producto').forEach(boton => {
    boton.addEventListener('click', () => {
        const productoEliminar = boton.getAttribute('data-producto');
        
        // Eliminar el producto del carrito
        eliminarDelCarrito(productoEliminar);
        
        // Eliminar el elemento del DOM
        boton.closest('.col').remove();
    });
});

// Agregar eventos a los botones de agregar al carrito
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', () => {
        const nombreProducto = boton.getAttribute('data-producto');
        const precioProducto = parseFloat(boton.getAttribute('data-precio'));
        
        // Agregar el producto al carrito
        agregarAlCarrito(nombreProducto, precioProducto);
    });
});

// Llamar a la función de inicialización al cargar la página
if (window.location.pathname === '/index.html') {
    localStorage.removeItem('carrito'); // Limpiar el carrito si estamos en el index
}
inicializarContadorCarrito();

function agregarAlCarrito(nombreProducto, precioProducto) {
    console.log("Agregando producto al carrito:", nombreProducto, precioProducto);
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Agregar el nuevo producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito en la barra de navegación
    inicializarContadorCarrito();
    
    // Actualizar la vista del carrito
    mostrarCarrito();
}

document.getElementById("agregar-producto").addEventListener("click", function() {
    console.log("Botón agregar-producto clickeado");
    // Obtener el nombre y precio del producto
    const nombreProducto = "God of War Ragnarok"; // Aquí obtén el nombre del producto dinámicamente
    const precioProducto = 49.99; // Aquí obtén el precio del producto dinámicamente
    
    // Llamar a la función para agregar el producto al carrito
    agregarAlCarrito(nombreProducto, precioProducto);
});



// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombreProducto) {
    console.log("Eliminando producto del carrito:", nombreProducto);
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Filtrar el carrito para eliminar el producto seleccionado
    carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Actualizar el contador del carrito en la barra de navegación
    inicializarContadorCarrito();
    
    // Actualizar la vista del carrito
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito en la página
function mostrarCarrito() {
    console.log("Mostrando el contenido del carrito");
    // Obtener el contenedor del carrito
    const carritoContainer = document.getElementById('carrito-container');
    
    // Limpiar el contenido actual del carrito
    carritoContainer.innerHTML = '';
    
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Mostrar cada producto en el carrito
    carrito.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <span>${producto.nombre}</span>
                <span>${producto.precio}€</span>
                <button class="eliminar-producto" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
            </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    }
}

// Llamar a la función de mostrarCarrito al cargar la página
mostrarCarrito();

 */
