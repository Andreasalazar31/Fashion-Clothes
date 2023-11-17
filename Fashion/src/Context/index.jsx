import { createContext, useState,  } from "react";
import { CartContext } from "../../Context";
export const CartContext = createContext();
import './styles.css'


const ProductoDetail = () => {
    const context = useContext(CartContext);

   


    return (
        <aside 
        className={`${context.isProductoDetailOpen ? 'flex' : 'hidden'} producto-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div onClick={() => context.closeProductoDetail() }>x</div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.images} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
        </aside>
    )
    }