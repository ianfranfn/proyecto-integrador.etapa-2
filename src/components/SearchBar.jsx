import { Link } from 'react-router'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <img src="./imgs/humaita-logo-removebg-preview.webp" className="search-bar__logo-container" alt="" />
        <form action="#" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
          <input type="search" id="busqueda" className="search-bar__form-search" />
          <button type="submit" className="search-bar__form-submit"><i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-bar__carrito-container"><i className="bi bi-cart4"></i></div>
        <div className="menu-toogle">
          <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread" />
            <span className="menu-toogle__meat" />
            <span className="menu-toogle__bottom-bread" />
          </label>
        </div>
      </div>
  )
}

export default SearchBar