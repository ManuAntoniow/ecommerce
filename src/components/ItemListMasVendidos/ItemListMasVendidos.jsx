import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Item from "../Item/Item"
import Row from 'react-bootstrap/Row'

function ItemListMasVendios() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch.then(data => {
            const dataFilter = data.filter(product=>product.categoria === 'mas vendidos')
            setData(dataFilter)
            setLoading(false)
        })
    },[])
    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
                    <Row>
                        {data.map((product) => {
                        return(
                            <Item
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                theme={product.theme}
                                price={product.price}
                                image={product.image}
                                stock={product.stock}
                            />
                        )
                        })}
                    </Row>
                    
                </>
            }
        </>
    )
    }

export default ItemListMasVendios
