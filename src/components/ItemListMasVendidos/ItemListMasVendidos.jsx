import './ItemListMasVendidos.css'

//Components
import Item from "../Item/Item"

//Bootstrap resources
import Row from 'react-bootstrap/Row'

//Helpers
import {useState, useEffect} from 'react'
import {db} from "../../utils/firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

function ItemListMasVendios() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const queryRef = query(collection(db, "items"), where("categoria", "==", "mas vendidos"))
        getDocs(queryRef).then(response=>{
            const productos = response.docs.map(doc =>{
                const newProduct = {
                ...doc.data(),
                id: doc.id
            }
            return newProduct
            })
            setData(productos)
            setLoading(false)
        })
    },[])

    return (
        <>
            {
                loading ? <h2>Loading...</h2>
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
