import './Inicio.scss'
import Card from "../components/Card";
import { useContext } from 'react';
import ProductosContext from '../contexts/ProductosContext';
import useTitulo from '../hooks/useTitulo';

const Inicio = () => {
  const { productos } = useContext(ProductosContext)

  useTitulo('Proyecto Integrador - Inicio')

  return (
    <main>
      <section class="section-cards">
        <header class="section-cards__header">
          <h1 class="section-cards__header-title">Menú del día</h1>
          <p class="section-cards__header-search-result">Se encontraron X productos</p>
        </header>
      </section>

      <section className="cards-container" id="container-productos">
        {
          productos && productos.map((producto) => (
            <Card producto={producto} key={producto.id} />
          ))
        }

      </section>
    </main>
  );
};

export default Inicio;
