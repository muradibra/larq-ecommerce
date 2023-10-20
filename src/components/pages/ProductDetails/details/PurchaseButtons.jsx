import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateCart } from '../../../../slices/cartDataSlice/cartDataSlice'
import toast from 'react-hot-toast'

function PurchaseButtons({ product, insulation, productSize, colorName }) {
    const dispatch = useDispatch()
    const { cartData } = useSelector(store => store.cartData)

    const addProductToCart = (product) => {
        debugger
        const existProduct = cartData.find(item => item.id === product.id
            // && item.product_color === colorName
        )

        if (existProduct) {
            // console.log("existProduct", existProduct)
            const newQuantity = existProduct.quantity + 1

            const updatedProduct = { ...existProduct, quantity: newQuantity }
            dispatch(updateCart(updatedProduct))
            toast.success("Product count updated!")
            // console.log("cartData", cartData)
            return
        }

        dispatch(addToCart(
            {
                id: product.id,
                quantity: 1,
                product_img: product.main_img_url,
                product_name: product.title,
                product_color: colorName,
                product_price: product.discounted_price ? product.discounted_price : product.price,
                insulation: insulation,
                size: productSize,
                slug: product.slug,
            }
        ))
        toast.success("Product added to cart!")

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