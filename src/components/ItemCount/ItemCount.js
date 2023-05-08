import { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock, Initial, onAdd})=> {
    const [quantity, setQuantity] = useState(Initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="item-count-container">
            <div className="button-container">
                <button className="count-button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="count-button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="count-button" onClick={() => onAdd(quantity)} disabled={!stock}>

                </button>
            </div>
        </div>

        
        )
}

export default ItemCount;