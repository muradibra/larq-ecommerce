import React, { useState } from 'react'

function ProductSizes({ product, productSize, setProductSize }) {
    // const [productSize, setProductSize] = useState("")

    return (
        product.sizes?.length > 0 &&
        <div className='sizes'>
            <h1 className='title'>Size</h1>
            <div className='size-buttons'>
                {
                    product.sizes.map((item, index) => (
                        <button
                            key={index}
                            className={`btn ${item.size === productSize ? "active" : ""}`}
                            onClick={() => setProductSize(item.size)}
                        >
                            {item.size}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductSizes