import useTitulo from '../hooks/useTitulo'
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <div className="contact-container">
      <div className="contact-container__form">
        <form>
          <div className="contact-container__form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Ej: Juan Pérez" 
              required 
            />
          </div>

          <div className="contact-container__form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Ej: juan.perez@example.com"
              required
            />
          </div>

          <div className="contact-container__form-group">
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea
              id="comentarios"
              placeholder="Ej: Por favor, ingrese su mensaje aquí..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-container__submit-btn">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto