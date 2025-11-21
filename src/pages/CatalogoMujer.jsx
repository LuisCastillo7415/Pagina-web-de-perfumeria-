
import Banner from "../components/Banner";
import ListaPerfumesMujer from '../components/ListaPerfumesMujer'; 

export default function CatalogoMujer() {
  return (
     <>
      
        <Banner />
    
          <div className="titulo">
            <h1>PERFUMES PARA MUJER</h1>
            <ListaPerfumesMujer/>
          </div>
     </>
  )
}