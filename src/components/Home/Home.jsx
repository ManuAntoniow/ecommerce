import Carrusel from "../Carousel/Carousel"
import ItemListMasVendios from "../ItemListMasVendidos/ItemListMasVendidos"

function Home() {
    return (
        <>
            <Carrusel/>
            <div>
                <h2>Best sellers</h2>
            </div>
            <ItemListMasVendios/>
            <div>
                <h2>Especial offer</h2>
                
            </div>
        </>
    )
}

export default Home