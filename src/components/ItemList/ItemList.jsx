import {useState, useEffect} from 'react'
import getFetch from '../ItemListContainer/mock-data'
import Item from "../Item/Item"
import{useParams} from 'react-router-dom'
import Marvel from '../../img/Marvel-logo.png'
import DC from '../../img/DC-logo.png'
import City from '../../img/City-logo.png'
import StarWars from '../../img/StarWars-logo.png'
import Row from 'react-bootstrap/Row'

function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {themeId} = useParams()
    const logos = [Marvel, DC, City, StarWars]
    const dato = String(themeId) 
    const logo = logos.find(element => String(element).includes(dato))
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
