import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Button from 'react-bootstrap/Button'
import './ItemDetail.css'
import {useParams, Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({itemDetail}) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    useEffect(() => {
        getFetch
        .then(res => {
            setData(res.find(producto => producto.id === parseInt(productId)))
            console.log(data)
            setLoading(false)
        })
    })
    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
                    <div className='detalle'>
                        <img src={data.image} alt="imagen Producto" className='img-detalle'/>
                        <div>
                            <h1>{data.name}</h1>
                            <h4>{data.theme}</h4>
                            <h5>{data.description}</h5>
                            <h2>{data.price}</h2>
                            <ItemCount stock={data.stock}/>
                            <Button className='boton-carrito'>Agregar al Carrito</Button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ItemDetail