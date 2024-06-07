let formulario = document.querySelector('#formulario');
let campoBuscar = document.querySelector('#campoBuscar');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

        if (campoBuscar.value === '') {
            
            campoBuscar.className = 'is-invalid';
        } else {
            
            campoBuscar.className = '';
            this.submit();
    }
});
