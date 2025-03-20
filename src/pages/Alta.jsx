import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/componentsAlta/Formulario'
import Tabla from '../components/componentsAlta/Tabla'

const Alta = () => {

  useTitulo('Alta')

  return (
    <>
    <h1>Formulario de alta de productos</h1>
    <hr />

    <Formulario />
    <Tabla />
    </>
  )
}

export default Alta