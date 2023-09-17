import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineClose} from 'react-icons/ai'
import { toggleCart } from '../../features/sideMenuSlice/sideMenuSlice'

function Cart() {
    const { isCartOpen } = useSelector(store => store.side)
    const dispatch = useDispatch()
    const cartRef = useRef()

    // useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         if (cartRef.current && !cartRef.current.contains(e.target)) {
    //             dispatch(toggleCart());
    //         }
    //         console.log(cartRef.current)
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);

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

                <div className='cart-items-section'>
                    <h2>Oh, it appears your cart is empty</h2>
                    <button>SHOP LARQ</button>
                </div>
            </div>

        </div>
    )
}

export default Cart