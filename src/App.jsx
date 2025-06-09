import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import Login from "./pages/Login/Login.jsx"
import ProductProvider from "./context/contextBank";


function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </ProductProvider>
  )
}

export default App
