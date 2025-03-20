import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

  const handleEliminar = (id) => {
    // Lógica de Sweet Alert
    eliminarProductoContext(id)
  }

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.marca}</td>
        <td>{producto.categoria}</td>
        <td>{producto.detalles}</td>
        <td>
            <img src={producto.foto} alt={producto.nombre} style={{ width: '40px'}} />
        </td>
        <td>{producto.envio ? 'si' : 'no'}</td>
        <td>
            <button>Ver</button>
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila