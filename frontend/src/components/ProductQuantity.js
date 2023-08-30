import React, { useState } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

export const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    // increments quantity item
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // decrements quantity item
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div class="quantity">
                <p> Quantity: {quantity}</p>
                <div class="quantity-buttons">
                    <AiOutlineMinusSquare onClick={decreaseQuantity} className="quantity-button"/> 
                    <AiOutlinePlusSquare onClick={increaseQuantity} className="quantity-button"/> 
                </div>
            </div>
        </>
    );
  }
  
  export default ProductQuantity;