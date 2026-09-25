/* ==========================================
   TEXTO ANIMADO
========================================== */

const elementoTypewriter = document.getElementById("typewriter");

const textos = [
    "Cloud Computing",
    "AWS",
    "Desenvolvimento",
    "Tecnologia"
];

let indiceTexto = 0;
let indiceLetra = 0;

let apagando = false;

const velocidadeDigitacao = 80;
const velocidadeApagar = 45;
const tempoEspera = 1500;


function animarTexto() {

    const textoAtual = textos[indiceTexto];


    if (!apagando) {

        elementoTypewriter.textContent =
            textoAtual.substring(0, indiceLetra + 1);

        indiceLetra++;


        if (indiceLetra === textoAtual.length) {

            apagando = true;

            setTimeout(animarTexto, tempoEspera);

            return;
        }

    } else {

        elementoTypewriter.textContent =
            textoAtual.substring(0, indiceLetra - 1);

        indiceLetra--;


        if (indiceLetra === 0) {

            apagando = false;

            indiceTexto++;

            if (indiceTexto === textos.length) {
                indiceTexto = 0;
            }

        }

    }


    setTimeout(
        animarTexto,
        apagando ? velocidadeApagar : velocidadeDigitacao
    );

}


animarTexto();



/* ==========================================
   ANIMAÇÃO DAS SEÇÕES AO ROLAR
========================================== */

const elementosReveal =
    document.querySelectorAll(".reveal");


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("ativo");

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementosReveal.forEach((elemento) => {

    observador.observe(elemento);

});



/* ==========================================
   EFEITO 3D SUAVE NOS CARDS
========================================== */

const cards =
    document.querySelectorAll(".card-projeto");


cards.forEach((card) => {

    card.addEventListener("mousemove", (evento) => {

        const retangulo =
            card.getBoundingClientRect();


        const mouseX =
            evento.clientX - retangulo.left;


        const mouseY =
            evento.clientY - retangulo.top;


        const centroX =
            retangulo.width / 2;


        const centroY =
            retangulo.height / 2;


        const rotacaoX =
            ((mouseY - centroY) / centroY) * -2;


        const rotacaoY =
            ((mouseX - centroX) / centroX) * 2;


        card.style.transform =
            `translateY(-10px)
             rotateX(${rotacaoX}deg)
             rotateY(${rotacaoY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) rotateX(0) rotateY(0)";

    });

});



/* ==========================================
   EFEITO NO TÍTULO AO MOVER O MOUSE
========================================== */

const fotoContainer =
    document.querySelector(".foto-container");


if (fotoContainer) {

    fotoContainer.addEventListener(
        "mousemove",
        (evento) => {

            const retangulo =
                fotoContainer.getBoundingClientRect();


            const x =
                evento.clientX - retangulo.left;


            const y =
                evento.clientY - retangulo.top;


            const moverX =
                (x / retangulo.width - 0.5) * 10;


            const moverY =
                (y / retangulo.height - 0.5) * 10;


            const foto =
                fotoContainer.querySelector(".foto-perfil");


            foto.style.transform =
                `translate(${moverX}px, ${moverY}px)`;

        }
    );


    fotoContainer.addEventListener(
        "mouseleave",
        () => {

            const foto =
                fotoContainer.querySelector(".foto-perfil");


            foto.style.transform =
                "translate(0, 0)";

        }
    );

}