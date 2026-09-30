/* =========================================
   CAMBIO DE VENTANAS
========================================= */

const secciones =
    document.querySelectorAll(".seccion");


function mostrarSeccion(id) {

    secciones.forEach(function(seccion) {

        seccion.classList.remove("activa");

    });


    const destino =
        document.getElementById(id);


    if (destino) {

        destino.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        window.location.hash = id;

    }

}


/* =========================================
   INFORMACIÓN DE SERVICIOS
========================================= */

function mostrarServicio(titulo, texto) {

    document.getElementById(
        "modalTitulo"
    ).textContent = titulo;


    document.getElementById(
        "modalTexto"
    ).textContent = texto;


    document.getElementById(
        "modalServicio"
    ).classList.add("visible");

}


/* =========================================
   CERRAR MODAL
========================================= */

function cerrarModal() {

    document.getElementById(
        "modalServicio"
    ).classList.remove("visible");

}


/* =========================================
   CERRAR MODAL AL DAR CLICK AFUERA
========================================= */

document
    .getElementById("modalServicio")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            cerrarModal();

        }

    });


/* =========================================
   CERRAR MODAL CON ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            cerrarModal();

        }

    }
);


/* =========================================
   FORMULARIO DE CITAS
========================================= */

document
    .getElementById("formCita")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById(
                "nombre"
            ).value;


        const telefono =
            document.getElementById(
                "telefono"
            ).value;


        const fecha =
            document.getElementById(
                "fecha"
            ).value;


        const hora =
            document.getElementById(
                "hora"
            ).value;


        const servicio =
            document.getElementById(
                "servicio"
            ).value;


        const correo =
            document.getElementById(
                "correo"
            ).value;


        /* Cambiar título */

        document.getElementById(
            "tituloConfirmacion"
        ).textContent =
            "¡Cita registrada!";


        /* Mensaje */

        document.getElementById(
            "textoConfirmacion"
        ).textContent =
            `Gracias, ${nombre}. Tu solicitud fue enviada correctamente.`;


        /* Resumen */

        document.getElementById(
            "resumenCita"
        ).innerHTML = `

            <strong>
                Resumen de la solicitud
            </strong>

            <br><br>

            <b>Nombre:</b>
            ${nombre}

            <br>

            <b>Teléfono:</b>
            ${telefono}

            <br>

            <b>Fecha:</b>
            ${fecha}

            <br>

            <b>Hora:</b>
            ${hora}

            <br>

            <b>Servicio:</b>
            ${servicio}

            <br>

            <b>Correo:</b>
            ${correo}

        `;


        /* Limpiar formulario */

        this.reset();


        /* Ir a confirmación */

        mostrarSeccion(
            "confirmacion"
        );

    });


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

document
    .getElementById("formContacto")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById(
                "contactoNombre"
            ).value;


        this.reset();


        document.getElementById(
            "tituloConfirmacion"
        ).textContent =
            "¡Mensaje enviado!";


        document.getElementById(
            "textoConfirmacion"
        ).textContent =
            `Gracias por escribirnos, ${nombre}. Hemos recibido tu mensaje.`;


        document.getElementById(
            "resumenCita"
        ).innerHTML = `

            Tu mensaje fue registrado
            correctamente.

            <br><br>

            Puedes volver al inicio
            para seguir navegando.

        `;


        mostrarSeccion(
            "confirmacion"
        );

    });


/* =========================================
   LEER LA VENTANA DESDE EL HASH
========================================= */

window.addEventListener(
    "load",
    function() {

        const hash =
            window.location.hash
            .replace("#", "");


        if (
            hash &&
            document.getElementById(hash)
        ) {

            mostrarSeccion(hash);

        }

    }
);


/* =========================================
   CAMBIO DE HASH
========================================= */

window.addEventListener(
    "hashchange",
    function() {

        const hash =
            window.location.hash
            .replace("#", "");


        if (
            hash &&
            document.getElementById(hash)
        ) {

            mostrarSeccion(hash);

        }

    }
);