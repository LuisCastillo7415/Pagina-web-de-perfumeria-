import Home from './pages/Home'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogoHombre from './pages/CatalogoHombre'; 
import CatalogoMujer from './pages/CatalogoMujer'; 
import CatalogoUnisex from './pages/CatalogoUnisex'; 
import ProductoDetalle from './components/ProductoDetalle';
import Contact from "./pages/Contact";
import Header from "./components/Header";   
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

function App() {
  return (
     <BrowserRouter>
      <Header />   
        <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo/hombre" element={<CatalogoHombre />} />
        <Route path="/catalogo/mujer" element={<CatalogoMujer />} />
        <Route path="/catalogo/unisex" element={<CatalogoUnisex/>} />
        <Route path="/perfume/:id" element={<ProductoDetalle />} />
         <Route path="/contacto" element={<Contact />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
