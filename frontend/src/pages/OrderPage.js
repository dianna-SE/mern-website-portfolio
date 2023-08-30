import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js';

export const OrderPage = () => {
    return (
        <>
            <h2>Order</h2>
            <article>
                <p>To proceed with your order, please begin by providing your personal information. Once that is done, you can browse through our selection of products and choose your preferred items and quantities. When you are satisfied with your choices, click on the “Submit Order” button located in the bottom right corner of the page to finalize your purchase. Thank you for shopping with us!</p>
                <form>
                    <fieldset class="fieldset-for-sale">
                        <legend>Products for Sale</legend>

                        <table id="productTable">
                            <caption>Please select one product:</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Today's Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>

                            <tbody>
                            {products.map((product, index) => (
                                <ProductRow product={product} key={index} />
                            ))}

                            </tbody>
                        </table>
                        <button class="submit-order">Submit order</button>
                    </fieldset>
                </form>

            </article>

        </>
    );
};

export default OrderPage;





            