document.addEventListener('DOMContentLoaded', () => {
    const botonChido = document.querySelector('.botonChido')
    botonChido.addEventListener('click', funcionChida);

    function funcionChida(e){
        e.preventDefault();
        console.log('Aqui llegaste');
        const parrafoCambio = document.querySelectorAll('.parrafo');
        parrafoCambio.forEach(el => el.classList.add('nuevaClase'))
    }
})