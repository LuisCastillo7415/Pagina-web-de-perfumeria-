
import Banner from "../components/Banner";
import ListaPerfumeUnisex from '../components/ListaPerfumeUnisex'; 

export default function CatalogoUnisex() {
  return (
     <>
        <Banner />
    
          <div className="titulo">
            <h1>PERFUMES UNISEX</h1>
            <ListaPerfumeUnisex/>
          </div>
     </>
  )
}