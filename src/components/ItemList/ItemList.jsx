import {useState, useEffect} from 'react'
import Item from "../Item/Item"
import{useParams} from 'react-router-dom'
import Marvel from '../../img/Marvel-logo.png'
import DC from '../../img/DC-logo.png'
import City from '../../img/City-logo.png'
import StarWars from '../../img/StarWars-logo.png'
import Row from 'react-bootstrap/Row'
import {db} from "../../utils/firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {themeId} = useParams()
    const logos = [Marvel, DC, City, StarWars]
    const logo = logos.find(element => String(element).includes(String(themeId)))

    useEffect(()=>{
        const queryRef = query(collection(db, "items"), where("theme", "==", themeId))
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
    }, [themeId])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2>
                :
                <>
                    <div>
                        <img src={logo} className='logo' alt='logo-theme'/>
                    </div>
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
                            )})
                        }
                    </Row>
                </>
            }
        </>
    )
    }

export default ItemList
