import './mock-data'
import {useState, useEffect} from 'react'
import data from './mock-data'
import ItemList from '../ItemList/ItemList'
import './style.css'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
    useEffect(() => {
        getData.then((result) => {
            setItems(result)
            console.log(result)
        })
    }, [])
    return (
        <>
            <div>
                <h2>Mas Vendidos</h2>
            </div>
            <div className='fila-productos'>
                <ItemList itemList={items}/>
            </div>
            
        </>
    )
}

export default ItemListContainer