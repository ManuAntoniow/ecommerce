import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Item from "../Item/Item"

function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    })
    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
                    {data.map((product) => {
                    return(
                        <Item
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            theme={product.theme}
                            price={product.price}
                            image={product.image}
                            stock={product.stock}
                        />
                    )
                    })}
                </>
            }
        </>
    )
    }

export default ItemList

