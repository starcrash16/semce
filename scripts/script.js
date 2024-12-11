// Seleccionar los elementos del DOM
const carrusel = document.querySelector('.carrusel');
const cuadros = document.querySelectorAll('.cuadro-carr');
const btnAnterior = document.querySelector('.anterior');
const btnSiguiente = document.querySelector('.siguiente');

// Índice para controlar la posición actual
let indice = 0;

// Función para actualizar la posición del carrusel
function actualizarCarrusel() {
  const anchoCuadro = cuadros[0].clientWidth;
  const desplazamiento = -(indice * anchoCuadro);
  carrusel.style.transform = `translateX(${desplazamiento}px)`;
}

// Evento para el botón "Siguiente"
btnSiguiente.addEventListener('click', () => {
  indice = (indice + 1) % cuadros.length; // Cíclico hacia adelante
  actualizarCarrusel();
});

// Evento para el botón "Anterior"
btnAnterior.addEventListener('click', () => {
  indice = (indice - 1 + cuadros.length) % cuadros.length; // Cíclico hacia atrás
  actualizarCarrusel();
});
