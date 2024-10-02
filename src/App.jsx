
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './screens/Navbar'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Gallery from './screens/Gallery'
import Offer from './screens/Offer'

function App() {
 const router = createBrowserRouter([
  {path :"/", element:<Home/>, },
  {path :"/navbar", element:<Navbar/>, },
  {path :"/about", element:<About/>, },
  {path :"/contact", element:<Contact/>, },
  {path :"/gallery", element:<Gallery/>, },
  {path :"/offer", element:<Offer/>, },
])

  return <RouterProvider router={router} />


}

export default App
// https://websitedemos.net/cafe-04/?customize=template
// https://websitedemos.net/cafe-04/