
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function(pregunta) {

    pregunta.addEventListener("click", function() {

        const elementoActual = pregunta.parentElement;
        const estabaAbierto = elementoActual.classList.contains("activo");

        document.querySelectorAll(".elemento").forEach(function(elemento) {
            elemento.classList.remove("activo");

            const boton = elemento.querySelector(".pregunta");
            boton.setAttribute("aria-expanded", "false");
            boton.querySelector("span").textContent = "+";
        });

        if (!estabaAbierto) {
            elementoActual.classList.add("activo");
            pregunta.setAttribute("aria-expanded", "true");
            pregunta.querySelector("span").textContent = "−";
        }

    });

});
