import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import './ItemCarrito.scss'

const ItemCarrito = ({ producto }) => {
  const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {
    eliminarProductoDelCarritoContext(id)
  }

  return (
    <tr>
      <td>
        <img 
          src={producto.foto} 
          alt={producto.nombre} 
          className="imagen-carrito"
        />
      </td>
      <td>{producto.nombre}</td>
      <td className="cantidad-carrito">{producto.cantidad}</td>
      <td className="precio-carrito">${producto.precio.toFixed(2)}</td>
      <td>
        <div className="acciones-carrito">
          <button 
            onClick={() => handleEliminar(producto.id)}
            className="boton-eliminar"
          >Eliminar</button>
        </div>
      </td>
    </tr>
  )
}

export default ItemCarrito