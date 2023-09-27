import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateCart } from '../../../slices/cartDataSlice/cartDataSlice'

function PurchaseButtons({ product }) {
    const dispatch = useDispatch()
    const { cartData } = useSelector(store => store.cartData)

    const addProductToCart = (product) => {
        const existProduct = cartData.find(item => item.id === product.id)

        if (existProduct) {
            console.log("existProduct", existProduct)
            const newQuantity = existProduct.quantity + 1

            const updatedProduct = { ...existProduct, quantity: newQuantity }
            dispatch(updateCart(updatedProduct))
            console.log("cartData", cartData)
            return
        }

        dispatch(addToCart(
            {
                id: product.id,
                quantity: 1,
                product_img: product.main_img_url,
                product_name: product.title,
                product_color: product.color,
                product_price: product.discounted_price ? product.discounted_price : product.price,
                slug: product.slug,
            }
        ))

    }

    return (
        <div className='purchase-buttons'>
            <button>Personalize</button>
            <button
                className='add-to-cart'
                onClick={() => addProductToCart(product)}
            >
                Add to cart -&nbsp;
                {
                    product.discounted_price ?
                        <span>${product.discounted_price}</span>
                        :
                        <span>${product.price}</span>
                }

            </button>
            <div className='secure-checkout'>100% secure checkout</div>
        </div>
    )
}

export default PurchaseButtons