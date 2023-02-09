import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket= () =>{
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }

  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct__image' src={image}
        />

        <div className='checkoutproduct__info'>
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__price'><p id='rs'>&#x20B9;</p>
            <strong>{price}</strong>
            </p>
            <div className='checkoutproduct__rating'>
                {Array(rating).fill().map(()=>(
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton &&
            (<button onClick={removeFromBasket}>Remove from Basket</button>
            )}
        </div>
    </div>
  )
}

export default CheckoutProduct