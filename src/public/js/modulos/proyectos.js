import axios from 'axios';
import Swal from 'sweetalert2';

$(document).ready(() =>  {
  
  // Prevenir el salto de lineas en el textarea al presional la tecla ENTER
  $('#proyecto-form').keydown(function (e) { 

    if ( e.which === 13 && !e.shiftkey ) {
      e.preventDefault();
      console.log('Textarea prevented salt lines');
      return false;
    }

  });


  $('#eliminar-proyecto').click( event => {
    
    event.preventDefault();
    const urlProyecto = event.target.dataset.proyectoUrl;

    // console.log(urlProyecto);
    Swal.fire({
      title: 'Deseas borrar este proyecto',
      text: "Un proyecto eliminado no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#726a95',
      cancelButtonColor: '#ff5252',
      confirmButtonText: 'Si, Borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        // Enviar peticion a axios
        const url = `${window.location.origin}/proyecto/${urlProyecto}`;
        axios.delete(url, { params: { urlProyecto } })
             .then( respuesta => {
                 Swal.fire(
                     'Proyecto eliminado!',
                     respuesta.data,
                     'success'
                 );
                 window.location.href = '/';
             })
              .catch( error => {
                  Swal.fire({
                      icon: 'error',
                      title: 'Hubo un error',
                      text: 'No se pudo borrar el proyecto!',
                      footer: '<a href>Mas informacion sobre este error?</a>'
                  })
              });
      }
    })
    

  })


  
});
