import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

function CartInfoModal({ isOpenModal, setIsOpenModal }) {
    const { cartData } = useSelector(store => store.cartData)
    const modalContentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
                setIsOpenModal(!isOpenModal);
            }
        };

        if (isOpenModal) {
            document.body.classList.add('modal-open');
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.classList.remove('modal-open')
            document.removeEventListener('mousedown', handleClickOutside);

        }
    }, [isOpenModal]);

    const getCartLength = () => {
        if (cartData.length) {
            return cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
        }
    }

    return (

        <div className='info-modal' ref={modalContentRef}>
            <div className='modal-header'>
                <div className='summary'>
                    <h3>Order Summary</h3>
                    <span>
                        {
                            getCartLength() === 1 ?
                                `${getCartLength()} item`
                                :
                                `${getCartLength()} items | `
                        }
                        {
                            cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0)
                        }.00$
                    </span>
                </div>
                <button onClick={() => setIsOpenModal(!isOpenModal)}>x</button>
            </div>

            <div className='modal-body' >

                <div className='cart-data'>
                    {
                        cartData?.map(item => (
                            <div className='cart-item' key={item.id}>
                                <div className='img-and-info'>
                                    <div className='img-wrapper'>
                                        <img src={item.product_img} alt={item.product_name} />
                                    </div>
                                    <div className='cart-item-info'>
                                        <h4>{item.quantity} x {item.product_name}</h4>
                                        <p>Size {item.size}</p>
                                        <p>Color {item.product_color}</p>
                                        <p>Type {item.insulation}</p>
                                    </div>
                                </div>

                                <div className='price'>
                                    <span>{item.product_price}$</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='modal-footer'>
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>
                            {
                                cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0)
                            }.00$
                        </span>
                    </div>

                    <div className='shipping-price'>
                        <span>Shipping</span>

                        <span>30$</span>
                    </div>

                </div>

                <div className='total-price'>
                    <span>Total (USD)</span>
                    <span>
                        {
                            cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0) + 30
                        }.00$
                    </span>
                </div>

            </div>
        </div>
    )
};
export default CartInfoModal