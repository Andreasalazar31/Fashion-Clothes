import { NavLink } from "react-router-dom"
import './index.css'
export const NavBar = () => {
    const activeStyle = ' underline underline-offset-4'
  return (
    <nav 
    className=" flex justify-between items-center fixed z-12 w-full py-2 px-9 text-sm font-light bg-pink-300 text-black top-0">
        
        <img  className="andrea"
        src="https://marketplace.canva.com/EAFg-uOorvQ/1/0/1600w/canva-logotipo-boutique-de-ropa-moderno-negro-y-rosa-uoDu8e-9ixg.jpg "  >

            
        </img>
         <h1 className="hola">FASHION CLOTHES</h1>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/Home'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'
                        className= {({ isActive }) => isActive ? activeStyle : undefined } >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Biografia'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                       Biography
                    </NavLink>
                </li>
                <a className="search-bar font-medium text-sm hover:text-black">
                    <input  className="mundo"type="text" placeholder="Buscar..."/>
                    <button>&nbsp;&nbsp;Buscar</button>
                </a>
            </ul>
        </nav>     
  )
}
export default NavBar