document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
     
//Llamado a AJAX  e imprimir resultados
function cargarNombres(e){
    e.preventDefault();
    // Leer las Variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value
    console.log(origenSeleccionado);
 
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
 
    const cantidad =  document.getElementById('numero').value;
 
    let url = '';
    url += 'https://randomuser.me/api?';
    //si hay origen, agregarlo a la URL
    if(origenSeleccionado !== ''){
        url += `nat=${origenSeleccionado}&`;
    }
    //si hay un genero, agregarlo a la url
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    //Si hay una cantidad agregarlo a la URL
    if(cantidad !== ''){
        url += `results=${cantidad}&`;
    }
    // Conectar con ajax
    // iniciar XMLHttprequest
    const xhr = new XMLHttpRequest();
    // abrimos conexion
    xhr.open('GET', url, true);
    // datos e impresion del template
    xhr.onload = function(){
        if(this.status === 200){
            // AQUÍ HAY UNA DIFERENCIA EN EL CODIGO
            const nombres = JSON.parse(this.responseText).results
            //Generar el HTML
            let htmlNombres = '<h2>Nombres generados</h2>'
        
            htmlNombres +='<ul class="lista">';
            //Imprimir cada nombre
            nombres.forEach(nombre => {
                htmlNombres += `
                 // AQUÍ HAY UNA DIFERENCIA EN EL CODIGO    
                    <li>${nombre.name.first}</li>
                `;
            });
 
            htmlNombres += '</ul>'
 
            document.getElementById('resultado').innerHTML = htmlNombres
        }
    };
    // Envia rel request
    xhr.send()
}