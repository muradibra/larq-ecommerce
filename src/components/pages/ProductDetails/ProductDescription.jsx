import React from 'react'

function ProductDescription({ product }) {
    return (
        <div className='product-description'>
            <h2>Product description</h2>
            <div className='long'>{product.description.long}</div>
            <br />
            {
                product.description.short &&
                <div className='short'>{product.description.short}</div>
            }
        </div>
    )
}

export default ProductDescription