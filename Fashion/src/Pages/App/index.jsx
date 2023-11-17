import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import Contact from '../Contact'
import Biografico from '../Biografia'
import { NavBar } from '../../Components/Navbar'



export const App = () => {
    const AppRoutes = () => {
        let routes = useRoutes([
            {path: '/Home', element: <Home/>},
            {path: '/Contacto', element: <Contact/>},
            {path: '/Biografia', element: <Biografico></Biografico>}
        ])
        return routes
    }
    
  return (
    <BrowserRouter>
    <NavBar/>
    <AppRoutes/> 
</BrowserRouter>
  )
}

export default App

