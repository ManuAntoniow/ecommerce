import {useState, useEffect, useContext} from 'react'
import './ItemDetail.css'
import {useParams} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from '../../context/CartContext'
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"

function ItemDetail({itemDetail}) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    // const [contador, setContador] = useState(0)
    const {productId} = useParams()
    const value = useContext(CartContext)
    
    const onAdd = (dato)=>{
        // setContador(dato)
        value.addItem(data, dato)
    }

    useEffect(()=>{
        const getData = async()=>{
            const query = doc(db, "items", productId)
            const response = await getDoc(query)
            const item = {
                ...response.data(),
                id: response.id
            }
            setData(item)
            setLoading(false)
        }
        getData()
    },[productId])

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
                            <h2>${data.price}</h2>
                            <ItemCount stock={data.stock} onAdd={onAdd} name={data.name}/>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ItemDetail