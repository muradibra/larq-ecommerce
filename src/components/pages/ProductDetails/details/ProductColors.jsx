import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ProductColors({ product }) {
    const { shopItem } = useSelector(store => store.shopItem)
    const [colorName, setColorName] = useState()

    useEffect(() => {
        if (shopItem.length) {
            setColorName(shopItem[0].color)
        }
    }, [shopItem])

    return (
        <div className='colors'>
            <h1 className='title'>
                {
                    colorName ? `${colorName}` : `${product.color}`
                }
            </h1>
            <div className='color-inputs'>
                {
                    product.colors.map((item, index) => (
                        <input
                            key={nanoid()}
                            type="radio"
                            // name="murad"
                            defaultChecked={colorName === item.color_name}
                            style={{ backgroundColor: item.hex_code }}
                            onClick={() => setColorName(item.color_name)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductColors