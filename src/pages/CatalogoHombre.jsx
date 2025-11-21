
import Banner from "../components/Banner";
import ListaPerfumesHombre from '../components/ListaPerfumesHombre'; 

export default function CatalogoHombre() {
  return (
     <>
        <Banner />
    
          <div className="titulo">
            <h1>PERFUMES PARA HOMBRE</h1>
            <ListaPerfumesHombre/>
          </div>
     </>
  )
}
