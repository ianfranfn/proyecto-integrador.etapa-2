import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";


const CarritoContext = createContext()

const CarritoProvider = ({ children }) => {
    const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO;
    const [carrito, setCarrito] = useState(() => {

        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarProductoAlCarritoContext = (producto) => {
        const nuevoCarrito = [...carrito]
        const productoExistenteIndex = nuevoCarrito.findIndex(prod =>
            prod.id === producto.id &&
            JSON.stringify(prod.opciones) === JSON.stringify(producto.opciones)
        );

        if (productoExistenteIndex !== -1) {
            nuevoCarrito[productoExistenteIndex] = {
                ...nuevoCarrito[productoExistenteIndex],
                cantidad: producto.cantidad || nuevoCarrito[productoExistenteIndex].cantidad + 1
            }
        } else {
            nuevoCarrito.push({ ...producto, cantidad: 1 })
        }
        setCarrito(nuevoCarrito)
    }

    const eliminarProductoDelCarritoContext = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
        window.localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
    }

    const limpiarCarritoContext = () => {
        setCarrito([]);
        window.localStorage.setItem('carrito', JSON.stringify([]))
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
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(dataCarrito)
            }

            await peticionesHttp(urlCarrito, options)
            limpiarCarrito()

        } catch (error) {
            console.error('[guardarCarritoBackendContext]', error)
        }
    }

    const calcularSubtotalContext = () => {
        return carrito.reduce((total, producto) =>
            total + (producto.precio * producto.cantidad), 0
        );
    };

    const calcularTotalContext = () => {
        return calcularSubtotalContext();
    };


    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        calcularSubtotalContext,
        calcularTotalContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext