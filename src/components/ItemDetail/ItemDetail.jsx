import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Card from 'react-bootstrap/Card'
import './ItemDetail.css'

function ItemDetail({itemDetail}) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch
        .then(res => {
            setData(res.find(producto => producto.id == 1))
            setLoading(false)
        })
    })
    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
                    <Card className='detalle'>
                        <Card.Img src={data.image} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Subtitle>{data.description}</Card.Subtitle>
                            <Card.Text>{data.theme}</Card.Text>
                            <Card.Text>{data.price}</Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                    
                    <h2>{data.name}</h2>
                </>
            }
        </>
    )
}

export default ItemDetail