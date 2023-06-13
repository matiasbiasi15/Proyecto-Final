const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.menu-nav');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntradas = document.querySelector('.entradas');
const btnParrillada = document.querySelector('.parrillada');
const btnNuestraCocina = document.querySelector('.nuestraCocina');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar'); 
    botonCerrar();
}                                                       /*Al hacer click sobre el evento se debe mostrar el menú*/

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;          /*Si la long de ".pantalla-completa > 0" se debe terminar la ejecución del program*/
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    }); 
});

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const entradas = platillosArreglo.filter(entradas=> entradas.getAttribute('data-platillo') === 'entradas');
    const parrillada = platillosArreglo.filter(parrillada => parrillada.getAttribute('data-platillo') === 'parrillada');
    const nuestraCocina = platillosArreglo.filter(nuestraCocina => nuestraCocina.getAttribute('data-platillo') === 'nuestraCocina');
    const ensaladas = platillosArreglo.filter(ensaladas=> ensaladas.getAttribute('data-platillo') === 'ensaladas');
    const postres = platillosArreglo.filter(postres=> postres.getAttribute('data-platillo') === 'postres');

    mostrarPlatillos(entradas, parrillada, nuestraCocina, ensaladas, postres, platillosArreglo);

}

const mostrarPlatillos = (entradas, parrillada, nuestraCocina, ensaladas, postres, todos) =>{
    
    btnEntradas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        entradas.forEach(entradas=> contenedorPlatillos.appendChild(entradas));
    });
    btnParrillada.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        parrillada.forEach(parrillada=> contenedorPlatillos.appendChild(parrillada));
    });

    btnNuestraCocina.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        nuestraCocina.forEach(nuestraCocina=> contenedorPlatillos.appendChild(nuestraCocina));
    });
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensaladas=> contenedorPlatillos.appendChild(ensaladas));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postres=> contenedorPlatillos.appendChild(postres));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todos=> contenedorPlatillos.appendChild(todos));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
