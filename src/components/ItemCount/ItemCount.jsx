import {useState} from 'react'
import {CartPlus} from 'react-bootstrap-icons'
import {CartDash} from 'react-bootstrap-icons'
import './style.css'

function ItemCount() {
    const [value, setValue] = useState (0)
    const sumarValue = () => {
        setValue(value + 1)
    }
    const restarValue = () => {
        if (value > 0){
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