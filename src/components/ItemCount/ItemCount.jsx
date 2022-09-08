import {useState} from 'react'
import {CartPlus} from 'react-bootstrap-icons'
import {CartDash} from 'react-bootstrap-icons'
import './ItemCount.css'

function ItemCount({stock}) {
    const [value, setValue] = useState (1)
    const sumarValue = () => {
        if (value < stock) {
            setValue(value + 1)
        }
    }
    const restarValue = () => {
        if (value > 1){
            setValue(value - 1)
        }
    }
    return (
        <div className='itemCounter'>
            <CartDash onClick={restarValue} size={25}/>
            <p>{value}</p>
            <CartPlus onClick={sumarValue} size={25}/>
        </div>
    )
}

export default ItemCount