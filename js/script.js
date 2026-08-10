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