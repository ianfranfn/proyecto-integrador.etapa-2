import { Link } from 'react-router'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div class="search-bar">
        <img src="./imgs/humaita-logo-removebg-preview.webp" class="search-bar__logo-container" alt="" />
        <form action="#" class="search-bar__form-container">
          <label for="busqueda" class="search-bar__form-label">Buscar</label>
          <input type="search" id="busqueda" class="search-bar__form-search" />
          <button type="submit" class="search-bar__form-submit"><i class="bi bi-search"></i>
          </button>
        </form>
        <div class="search-bar__carrito-container"><i class="bi bi-cart4"></i></div>
        <div class="menu-toogle">
          <label for="menu" class="menu-toogle__label">
            <span class="menu-toogle__top-bread"></span>
            <span class="menu-toogle__meat"></span>
            <span class="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div>
  )
}

export default SearchBar