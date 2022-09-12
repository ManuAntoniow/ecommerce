import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Item from "../Item/Item"
import{useParams} from 'react-router-dom'

function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {themeId} = useParams()
    useEffect(() => {
        getFetch.then(data => {
            if(themeId){
                const dataFilter = data.filter(product=>product.theme === themeId)
                setData(dataFilter)
            }else{
                setData(data)
            }
            setLoading(false)
        })
    }, [themeId])
    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
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
                </>
            }
        </>
    )
    }

export default ItemList

