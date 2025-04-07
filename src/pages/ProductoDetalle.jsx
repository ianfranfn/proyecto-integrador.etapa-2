import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { peticionesHttp } from '../helpers/peticiones-http'
import Spinner from '../components/Spinner'

const ProductoDetalle = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const urlBackend = import.meta.env.VITE_BACKEND_PRODUCTOS

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const url = `${urlBackend}${id}`
        const producto = await peticionesHttp(url, {})
        setProducto(producto)
      } catch (error) {
        console.error('[ProductoDetalle] Error:', error)
      }
    }
    obtenerProducto()
  }, [id])

  return (
    <div className="detalle-container">
      {producto ? (
        <>
          <h1>{producto.nombre}</h1>
          <img src={producto.foto} alt={producto.nombre} style={{ width: '200px' }} />
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <p>Marca: {producto.marca}</p>
          <p>Categoría: {producto.categoria}</p>
          <p>Detalles: {producto.detalles}</p>
          <p>Envío: {producto.envio ? 'Disponible' : 'No disponible'}</p>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default ProductoDetalle