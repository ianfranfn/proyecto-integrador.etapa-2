import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";

// ! 1. Creación del contexto
const CarritoContext = createContext()
// ! 2. Armado del provider
const CarritoProvider = ( {children} ) => {
    const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])
    
    function elProductoEstaEnElCarrito(producto) {
        return carrito.some(prod => prod.id === producto.id && JSON.stringify(prod.opciones) === JSON.stringify(producto.opciones));
    }

    function obtenerProductoDeCarrito(producto) {
        // Si encuentra el producto lo retorna
        return carrito.find(prod => prod.id === producto.id && JSON.stringify(prod.opciones) === JSON.stringify(producto.opciones));
    }


    const agregarProductoAlCarritoContext = (producto) => {
        const productoExistente = carrito.find(prod => 
            prod.id === producto.id && JSON.stringify(prod.opciones) === JSON.stringify(producto.opciones)
        ) 

        // Averiguo si está o no está en el carrito y hago en consecuencia
        if (productoExistente) {
            productoExistente.cantidad++
        } else {
            agregarAlCarrito({
                ...producto,
                cantidad: 1
            })
        }
        window.localStorage.setItem('carrito', JSON.stringify(carrito))
    }


    const eliminarProductoDelCarritoContext = (id) => {
        console.log(id)
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        console.log('Limpiando carrito....')
        limpiarCarrito()
    }

    const guardarCarritoBackendContext = async () => {

        try {
            console.log('Llegó al contexto la señal de guardado')

            const dataCarrito = {
                createAt: Date.now(),
                cantidad: carrito.length,
                carrito
            }

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(dataCarrito)
            }

            await peticionesHttp(urlCarrito, options)
            limpiarCarrito()

        } catch (error) {
            console.error('[guardarCarritoBackendContext]', error)
        }
    }

    const calcularCantidadProductosCarritoContext = () => {
        
    }


    const data = {
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
// ! 3. Exportaciones
export { CarritoProvider }
export default CarritoContext