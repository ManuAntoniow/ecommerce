import Carrusel from "../Carousel/Carousel";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Home() {
    return (
        <>
            <Carrusel/>
            <div>
                <h2>Mas Vendidos</h2>
            </div>
            <ItemListContainer/>
            <div>
                <h2>Oferta Especial</h2>
                
            </div>
        </>
    )
}

export default Home