import React, { useState } from 'react'

function ProductSizes({product}) {
  const [productSize, setProductSize] = useState("")

    return (
        product.sizes?.length > 0 &&
        <div className='sizes'>
            <h1 className='title'>Size</h1>
            <div className='size-buttons'>
                {/* {
                        product.sizes.map((item, index) => (
                          <div key={nanoid()}>
                            <label htmlFor={item.size}>{item.size}</label>
                            <input type="radio" name="size" id={item.size} defaultChecked={index === 0} />
                          </div>
                        ))
                      } */}

                {
                    product.sizes.map((item, index) => (
                        <button
                            key={index}
                            className={`test ${(item.size === productSize) ? "active" : ""}`}
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