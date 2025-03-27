import productos from '../db/productos'

const contenedorProductos = document.getElementById('container-productos')
console.log(contenedorProductos)

const start3 = () => {

    const fragmento = document.createDocumentFragment()

    productos.forEach(prod => {
        const card = document.createElement('div')
        card.classList.add('card')
        // console.log(card)
        const articulo = document.createElement('article')
        articulo.classList.add('card__article')
        //console.log(articulo)
        card.appendChild(articulo)
        //console.log(card)
        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container')
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = prod.foto
        foto.alt = prod.nombre
        cardImageContainer.appendChild(foto)
        // console.log(cardImageContainer)
        articulo.appendChild(cardImageContainer)
        //console.log(card)

        /* <div>
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                    </div> */

        const cardContent = document.createElement('div')
        const h2Titulo = document.createElement('h2')
        h2Titulo.classList.add('card__heading')
        h2Titulo.textContent = prod.nombre
        //console.log(h2Titulo)
        const cardDescripcion = document.createElement('div')
        cardDescripcion.classList.add('card__description')
        const parrafo = document.createElement('p')
        parrafo.textContent = prod.descripcion
        //console.log(parrafo)
        cardContent.appendChild(h2Titulo)
        cardDescripcion.appendChild(parrafo)
        cardContent.appendChild(cardDescripcion)
        articulo.appendChild(cardContent)

        // ----------------------------------------------- 
        //!  FORMULARIO                                     
        // ----------------------------------------------- 

        const form = document.createElement('form');
        form.classList.add('card__form');
        cardContent.appendChild(form);

        // Contenedor para el formulario
        const formContainer = document.createElement('div');
        formContainer.classList.add('card__form-container');
        form.appendChild(formContainer);

        // Grupo de opciones para la salsa
        const salsaGroup = document.createElement('div');
        salsaGroup.classList.add('card__form-group');
        formContainer.appendChild(salsaGroup);

        const salsaLabel = document.createElement('h3');
        salsaLabel.textContent = 'Selecciona la salsa:';
        salsaLabel.classList.add('card__form-group-title');
        salsaGroup.appendChild(salsaLabel);

        const salsaBlanca = crearRadioButton('salsa', 'salsaBlanca', 'Salsa blanca');
        const salsaRoja = crearRadioButton('salsa', 'salsaRoja', 'Salsa Roja');
        salsaGroup.appendChild(salsaBlanca);
        salsaGroup.appendChild(salsaRoja);

        // Grupo de opciones para la guarnición
        const guarnicionGroup = document.createElement('div');
        guarnicionGroup.classList.add('card__form-group');
        formContainer.appendChild(guarnicionGroup);

        const guarnicionLabel = document.createElement('h3');
        guarnicionLabel.textContent = 'Selecciona la guarnición:';
        guarnicionLabel.classList.add('card__form-group-title');
        guarnicionGroup.appendChild(guarnicionLabel);

        const sinGuar = crearRadioButton('guarnicion', 'sinGuar', 'Sin guarn.');
        const papas = crearRadioButton('guarnicion', 'papas', 'Papas fritas');
        const pure = crearRadioButton('guarnicion', 'pure', 'Puré');
        const ensalada = crearRadioButton('guarnicion', 'ensalada', 'Ensalada');
        guarnicionGroup.appendChild(sinGuar);
        guarnicionGroup.appendChild(papas);
        guarnicionGroup.appendChild(pure);
        guarnicionGroup.appendChild(ensalada);

        // Función para crear un radio button con su label
        function crearRadioButton(name, id, text) {
            const label = document.createElement('label');
            label.htmlFor = id;
            label.classList.add('card__form-input-container');

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = id;
            radio.name = name;
            radio.classList.add('card__form-input');

            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + text));

            return label;
        }


        // -----------------------------------------------
        // ! BOTONES COMPRA
        // -----------------------------------------------

        const botonesContainer = document.createElement('div');
        botonesContainer.classList.add('card__botones-container');
        cardContent.appendChild(botonesContainer);

        // Boton "Carrito"
        const botonCarrito = document.createElement('button');
        botonCarrito.textContent = 'Carrito';
        botonCarrito.classList.add('card__boton', 'card__boton--carrito');
        botonesContainer.appendChild(botonCarrito);

        // Boton "Pedir ahora"
        const botonPedirAhora = document.createElement('button');
        botonPedirAhora.textContent = 'Pedir ahora';
        botonPedirAhora.classList.add('card__boton', 'card__boton--pedir-ahora');
        botonesContainer.appendChild(botonPedirAhora);

        // -----------------------------------------------
        // ! EVENTO DE CLIC PARA ABRIR/CERRAR LA CARD
        // -----------------------------------------------

        card.addEventListener('click', function (e) {

            if (!e.target.closest('.card__form-container') && !e.target.closest('.card__botones-container')) {
                this.classList.toggle('active')
            }
        });

        console.log(cardContent)
        //console.log(card)
        fragmento.appendChild(card)



    })

    console.log(fragmento) // Los 5 div.card


    // Intervengo una sola vez el DOM. Evitando la recarga del html
    contenedorProductos.appendChild(fragmento)


}

window.addEventListener('DOMContentLoaded', start3)