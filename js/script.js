document.addEventListener("DOMContentLoaded", function () {

    const menuBoton = document.getElementById("menu-boton");
    const menuNavegacion = document.getElementById("menu-navegacion");

    menuBoton.addEventListener("click", function () {

        menuNavegacion.classList.toggle("activo");

    });

    const enlaces = menuNavegacion.querySelectorAll("a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menuNavegacion.classList.remove("activo");

        });

    });

});


// =========================================
// FORMULARIO DE RESERVA
// =========================================

const formularioReserva =
    document.getElementById("formulario-reserva");


if (formularioReserva) {

    formularioReserva.addEventListener("submit", function (evento) {

        evento.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const telefono =
            document.getElementById("telefono").value;

        const fecha =
            document.getElementById("fecha").value;

        const personas =
            document.getElementById("personas").value;

        const mensaje =
            document.getElementById("mensaje").value;


        const textoWhatsApp =
    `Hola, quiero solicitar una reserva en Sabor & Aroma.\n\n` +
    `Nombre: ${nombre}\n` +
    `Teléfono: ${telefono}\n` +
    `Fecha: ${fecha}\n` +
    `Personas: ${personas}\n` +
    `Mensaje: ${mensaje}`;

const textoCodificado = encodeURIComponent(textoWhatsApp);


        const numeroWhatsApp = "593999999999";


        const enlaceWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;


        window.open(enlaceWhatsApp, "_blank");

    });

}

// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

const elementosAnimados =
    document.querySelectorAll(".animar");

const observador = new IntersectionObserver(
    function (elementos) {

        elementos.forEach(function (elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementosAnimados.forEach(function (elemento) {

    observador.observe(elemento);

});

/* =========================================
   INFORMACIÓN DE LOS PRODUCTOS
========================================= */

const productos = {

    cafe: {
        titulo: "Café artesanal",
        imagen: "img/cafe.jpg",
        descripcion: "Café recién preparado con un aroma intenso y un sabor equilibrado.",
        ingredientes: [
            "Granos de café tostado",
            "Agua",
            "Leche (opcional)"
        ],
        alergenos: "Lácteos, únicamente si se agrega leche.",
        precio: "$3.50"
    },

    croissant: {
        titulo: "Croissant",
        imagen: "img/croissant.jpg",
        descripcion: "Croissant crujiente por fuera y suave por dentro.",
        ingredientes: [
            "Harina de trigo",
            "Mantequilla",
            "Agua",
            "Levadura",
            "Sal",
            "Azúcar"
        ],
        alergenos: "Gluten, lácteos y huevos (brillo exterior).",
        precio: "$2.75"
    },

    postre: {
        titulo: "Postre de la casa",
        imagen: "img/postre.jpg",
        descripcion: "Una deliciosa creación dulce preparada por nuestra cocina.",
        ingredientes: [
            "Harina",
            "Azúcar",
            "Huevos",
            "Lácteos",
            "Esencias aromáticas"
        ],
        alergenos: "Gluten, lácteos y huevos.",
        precio: "$4.50"
    },

    desayuno: {
        titulo: "Desayuno especial",
        imagen: "img/desayuno.jpg",
        descripcion: "Una combinación perfecta para comenzar bien el día.",
        ingredientes: [
            "Huevos",
            "Pan",
            "Jugo de fruta",
            "Café",
            "Tocino o salchicha"
        ],
        alergenos: "Huevos, gluten y lácteos.",
        precio: "$6.50"
    },

    cappuccino: {
        titulo: "Cappuccino",
        imagen: "img/cappuccino.jpg",
        descripcion: "Café espresso con leche entera vaporizada.",
        ingredientes: [
            "Café espresso",
            "Leche entera vaporizada"
        ],
        alergenos: "Lácteos.",
        precio: "$3.75"
    },

    chocolate: {
        titulo: "Chocolate caliente",
        imagen: "img/chocolate.jpg",
        descripcion: "Chocolate caliente cremoso, perfecto para disfrutar en cualquier momento.",
        ingredientes: [
            "Cacao",
            "Manteca de cacao",
            "Azúcar",
            "Leche en polvo"
        ],
        alergenos: "Lácteos. Puede contener trazas de frutos de cáscara.",
        precio: "$3.50"
    },

    sandwich: {
        titulo: "Sándwich de la casa",
        imagen: "img/sandwich.jpg",
        descripcion: "Pan artesanal con ingredientes frescos y una deliciosa combinación de sabores.",
        ingredientes: [
            "Pan",
            "Embutidos (jamón/pavo)",
            "Queso",
            "Vegetales",
            "Aderezos"
        ],
        alergenos: "Gluten, lácteos y soja (en aderezos o embutidos).",
        precio: "$5.50"
    },

    cheesecake: {
        titulo: "Cheesecake",
        imagen: "img/cheesecake.jpg",
        descripcion: "Cremoso cheesecake con una base crujiente y un delicado toque dulce.",
        ingredientes: [
            "Queso crema",
            "Azúcar",
            "Huevos",
            "Galletas",
            "Mantequilla"
        ],
        alergenos: "Lácteos, huevos y gluten.",
        precio: "$4.25"
    }

};


/* =========================================
   ELEMENTOS DE LA VENTANA MODAL
========================================= */

const modalProducto = document.getElementById("modal-producto");
const cerrarModal = document.getElementById("cerrar-modal");

const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalIngredientes = document.getElementById("modal-ingredientes");
const modalAlergenos = document.getElementById("modal-alergenos");
const modalPrecio = document.getElementById("modal-precio");


/* =========================================
   ABRIR MODAL
========================================= */

const tarjetasProductos = document.querySelectorAll(".producto-modal");

tarjetasProductos.forEach(function(tarjeta) {

    tarjeta.addEventListener("click", function() {

        const nombreProducto = tarjeta.dataset.producto;
        const producto = productos[nombreProducto];

        if (!producto) {
            return;
        }

        modalImagen.src = producto.imagen;
        modalImagen.alt = producto.titulo;

        modalTitulo.textContent = producto.titulo;

        modalDescripcion.textContent = producto.descripcion;

        modalIngredientes.innerHTML = "";

        producto.ingredientes.forEach(function(ingrediente) {

            const li = document.createElement("li");

            li.textContent = ingrediente;

            modalIngredientes.appendChild(li);

        });

        modalAlergenos.textContent = producto.alergenos;

        modalPrecio.textContent = producto.precio;

        modalProducto.classList.add("activo");

    });

});


/* =========================================
   CERRAR MODAL
========================================= */

cerrarModal.addEventListener("click", function() {

    modalProducto.classList.remove("activo");

});


/* =========================================
   CERRAR AL HACER CLIC FUERA
========================================= */

modalProducto.addEventListener("click", function(evento) {

    if (evento.target === modalProducto) {

        modalProducto.classList.remove("activo");

    }

});
