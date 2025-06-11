import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import Login from "./pages/Login/Login.jsx"
import ProductProvider from "./context/contextBank";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import UsLayout from "./pages/Imfo/Imfo.jsx";


function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/us" element={<UsLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Route>
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </ProductProvider>
  )
}

export default App
