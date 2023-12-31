import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { toggleCart } from '../../slices/sideMenuSlice/sideMenuSlice'
import { useEffect } from 'react'
import { deleteCartItem, getCart, updateCart } from '../../slices/cartDataSlice/cartDataSlice'
import { nanoid } from '@reduxjs/toolkit'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'
import { FaPlus, FaMinus } from 'react-icons/fa'

function Cart() {
    const { isCartOpen } = useSelector(store => store.side)
    const { cartData } = useSelector(store => store.cartData)
    const dispatch = useDispatch()
    const cartRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('cart-open');
            // document.querySelector(".header").classList.add("visible")
        } else {
            document.body.classList.remove('cart-open');
        }
    }, [isCartOpen]);

    const increaseQuantity = (item) => {
        const cartItem = cartData.find(cartItem => cartItem.id === item.id)
        let newQuantity = cartItem.quantity
        if (newQuantity < 10) {
            newQuantity += 1
        }

        const updatedProduct = { ...cartItem, quantity: newQuantity }
        dispatch(updateCart(updatedProduct))
    }

    const decreaseQuantity = (item) => {
        const cartItem = cartData.find(cartItem => cartItem.id === item.id)
        const newQuantity = cartItem.quantity - 1

        const updatedProduct = { ...cartItem, quantity: newQuantity }
        dispatch(updateCart(updatedProduct))
    }

    const deleteFromCart = (id) => {
        // console.log("debug start");
        // debugger

        dispatch(deleteCartItem(id))
        // dispatch(getCart())
    }

    // useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         if (cartRef.current && !cartRef.current.contains(e.target)) {
    //             dispatch(toggleCart());
    //         }
    //         console.log("e.target", e.target)
    //         console.log(cartRef.current)
    //     }

    //         document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [dispatch]);

    return (
        <div className={`cart ${!isCartOpen ? 'isCartClosed' : "isCartOpen"}`} ref={cartRef}>
            <div className='your-cart'>

                <div>
                    <span>Your cart</span>
                </div>
                <div
                    className='cart-close-icon'
                    onClick={() => dispatch(toggleCart())}>
                    <AiOutlineClose />
                </div>

            </div>

            <div className='cart-inner'>
                <div className='progress-section'>
                    <span>$10 store credit</span>
                    <div className='progress-bar'></div>
                    <p className='progress-bar-text'>You're <b>$200.00</b> away from <b>$10</b> in store credit!</p>
                </div>

                {
                    cartData.length > 0 ?
                        <div>
                            {
                                cartData.map(item => (
                                    <div className='cart-item' key={nanoid()}>
                                        <div className='cart-item-img'>
                                            <Link to={`/product/${item.slug}`}>
                                                <img src={item.product_img} alt={item.product_name} />
                                            </Link>
                                        </div>
                                        <div className='cart-item-info'>
                                            <p>
                                                <Link to={`/product/${item.slug}`}>
                                                    {item.product_name}
                                                </Link>
                                            </p>
                                            <span className='cart-item-options'>{item.product_color}</span>
                                            <div className='increment-decrement'>
                                                <button
                                                    className={`decrement ${item.quantity === 1 ? "decrement-disabled" : ""}`}
                                                    disabled={item.quantity === 1}
                                                    onClick={() => decreaseQuantity(item)}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    className={`increment ${item.quantity === 10 ? "increment-disabled" : ""}`}
                                                    disabled={item.quantity === 10}
                                                    onClick={() => increaseQuantity(item)}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='trash-and-total'>
                                            <div
                                                className='trash'
                                                onClick={() => deleteFromCart(item.id)}
                                            >
                                                <FiTrash />
                                            </div>
                                            <div className="total">
                                                <span>${item.quantity * item.product_price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='subtotal'>
                                <p>Subtotal</p>
                                <span>$
                                    {
                                        cartData.length > 0 &&
                                        cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0)
                                    }
                                </span>
                            </div>

                            <div className='checkout-btn'>
                                <Link
                                    to="/checkout"
                                    onClick={() => dispatch(toggleCart())}
                                >
                                    Check out now
                                </Link>
                            </div>
                        </div>
                        :
                        <div className='cart-empty'>
                            <h2>Oh, it appears your cart is empty</h2>
                            <Link onClick={() => dispatch(toggleCart())} to='/shop'>SHOP LARQ</Link>
                        </div>
                }

            </div>

        </div>
    )
}

export default Cart