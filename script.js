// Espera a que el documento esté listo
$(document).ready(function() {
    // Selecciona el contenedor del carrusel y llama a la función slick()
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
