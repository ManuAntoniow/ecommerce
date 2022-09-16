import Carrusel from "../Carousel/Carousel"
import ItemListMasVendios from "../ItemListMasVendidos/ItemListMasVendidos"

function Home() {
    return (
        <>
            <Carrusel/>
            <div>
                <h2>Mas Vendidos</h2>
            </div>
            <ItemListMasVendios/>
            <div>
                <h2>Oferta Especial</h2>
                
            </div>
        </>
    )
}

export default Home