import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';

export const ProductRow = ({ product }) => {
    if (!product) return null;
    
    return (
        <>
            <tr>
                <td>{product.company}</td>                    
                <td>{product.product}</td>      

                <td>{product.price.toLocaleString('en-US', { 
                    style: 'currency',
                    currency: 'USD'
                })}
                </td>

                <td><ProductQuantity /></td>               
            </tr>
      </>
    );
  };
  
  export default ProductRow;