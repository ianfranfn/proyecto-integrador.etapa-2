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
        //return true/false
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        // 1 -> El producto ya esta en el carrito
        // 0 -> el producto no esta en el carrito
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        // Si encuentra el producto lo retorna
        return carrito.find(prod => prod.id === producto.id)
    }


    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar del contexto', producto)

        // Averiguo si está o no está en el carrito y hago en consecuencia
        if (!elProductoEstaEnElCarrito(producto)) {
            console.log('No esta en el carrito')
            producto.cantidad = 1
            agregarAlCarrito(producto) // Agregar el producto en el localStorage y modificar estado
        } else {
            console.log('Ya esta en el carrito')
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
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

            const carritoGuardado = await peticionesHttp(urlCarrito, options)
            console.log(carritoGuardado)

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