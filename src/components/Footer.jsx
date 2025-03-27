import { Link } from 'react-router'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contenido">
        <p className="footer__texto">
            copyright © 2025 Humaitá resto-bar - 
            <Link href="#">Políticas de Privacidad</Link> | 
            <Link href="./src/pages/_contacto.html">Contacto</Link>
        </p>
        <p className="footer__texto">Desarrollado por Ian Fariña</p>
    </div>
    </footer>
  )
}

export default Footer