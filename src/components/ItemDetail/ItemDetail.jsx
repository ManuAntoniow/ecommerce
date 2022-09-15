import {useState, useEffect, useContext} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import './ItemDetail.css'
import {useParams} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../context/CartContext'

function ItemDetail({itemDetail}) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [contador, setContador] = useState(0)
    const {productId} = useParams()
    const value = useContext(CartContext)
    
    const onAdd = (dato)=>{
        console.log("hizo click", dato)
        setContador(dato)
        value.addItem(data, dato)
    }

    useEffect(() => {
        getFetch
        .then(res => {
            setData(res.find(producto => producto.id === parseInt(productId)))
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
                            <ItemCount stock={data.stock} onAdd={onAdd} name={data.name}/>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ItemDetail