import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/componentsAlta/Formulario'
import Tabla from '../components/componentsAlta/Tabla'
import './Alta.scss' 

const Alta = () => {
  useTitulo('Alta')

  return (
    <div className="alta-container">  
      <h1 className="alta-titulo">Formulario de alta de productos</h1>
      <hr className="alta-divider" />
      
      <Formulario />
      <Tabla />
    </div>
  )
}

export default Alta