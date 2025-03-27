import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Card.scss';
import CarritoContext from '../contexts/CarritoContext';
import { SALSAS, GUARN } from './constants/menultems.js';
import { crearRadioButton } from './helpers/radio.js';

const Card = ({ producto }) => { // props = { producto }
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)
  const { handleSubmit, control } = useForm()

  const handleAgregar = (producto) => {
    agregarProductoAlCarritoContext(producto)
  }


  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.descripcion}</p>
            <button onClick={() => handleAgregar(producto)}>Agregar</button>
          </div>

          <form className="card__form" onSubmit={handleSubmit(handleAgregar)}>
            <div className="card__form-container">
              <div className="card__form-group">
                <h3 className="card__form-group-title">Selecciona la salsa:</h3>
                {SALSAS.map((salsa) => (
                  crearRadioButton('salsa', salsa.id, salsa.label)
                ))}
              </div>

              <div className="card__form-group">
                <h3 className="card__form-group-title">Selecciona la guarnición:</h3>
                {GUARN.map((guarnicion) =>
                  crearRadioButton('guarnicion', guarnicion.id, guarnicion.label)
                )}
              </div>
            </div>

            <div className="card__botones-container">
              <button type="submit" className="card__boton card__boton--carrito">
                Carrito
              </button>
              <button type="button" className="card__boton card__boton--pedir-ahora">
                Pedir ahora
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  )
}

export default Card