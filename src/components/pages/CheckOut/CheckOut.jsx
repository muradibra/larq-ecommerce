import React, { useEffect, useState } from 'react'
import Step1Email from './steps/Step1Email'
import Step2Shipping from './steps/Step2Shipping'
import Step3Billing from './steps/Step3Billing'
import Step4Payment from './steps/Step4Payment'
import { useDispatch, useSelector } from 'react-redux'
import { goToSelectedStep } from '../../../slices/stepSlice/stepSlice'
import { Spinner } from '@chakra-ui/react'
import CartInfoModal from './CartInfoModal'
import CheckOutHeader from './CheckOutHeader'

function CheckOut() {
    const [isLoading, setIsLoading] = useState(true)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { currentStep } = useSelector(store => store.step)
    const { email } = useSelector(store => store.step.step1)
    const dispatch = useDispatch()
    const { step2, step3 } = useSelector(store => store.step)
    const { cartData } = useSelector(store => store.cartData)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [currentStep])

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [currentStep]);

    const getCartLength = () => {
        if (cartData.length) {
            return cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
        }
    }

    return (
        <div className='check-out'>
            {/* <CheckOutHeader /> */}
            <div className='product-details' onClick={() => setIsOpenModal(!isOpenModal)}>
                <div className='img-and-count'>
                    <div className='img'>
                        <img src={cartData[0]?.product_img} alt="" />
                    </div>
                    <div className='item-count'>
                        <h3>
                            {getCartLength() === 1 ?
                                `${getCartLength()} item`
                                :
                                `${getCartLength()} items`
                            }
                        </h3>
                        <span>Show details</span>
                    </div>
                </div>

                <div className='price'>
                    <h3>
                        {
                            cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0) + 30
                        }.00$
                    </h3>
                </div>
            </div>
            {
                isOpenModal ?
                    <div className='modal-wrapper'>
                        <CartInfoModal
                            isOpenModal={isOpenModal}
                            setIsOpenModal={setIsOpenModal}
                        />
                    </div>
                    :
                    ""
            }

            {
                isLoading ?
                    <div className='spinner'>
                        <Spinner />
                    </div>
                    :
                    null
            }

            <div className="checkout-wrapper">

                <div className="steps">

                    <div className='customer step-no1'>
                        <div className='step-title'>
                            <h2 className='title'>Customer</h2>

                            {
                                currentStep !== 1 ?
                                    <div className='email-and-edit'>
                                        <span>{email}</span>
                                        <button onClick={() => dispatch(goToSelectedStep(1))}>Edit</button>
                                    </div>
                                    :
                                    null
                            }

                            {
                                currentStep !== 1 ?
                                    <button className='selected-step-btn' onClick={() => dispatch(goToSelectedStep(1))}>Edit</button>
                                    :
                                    null
                            }

                            {
                                currentStep !== 1 ?
                                    <span className='email-span'>{email}</span>
                                    :
                                    null
                            }
                        </div>

                        {
                            currentStep === 1 && !isLoading &&
                            <Step1Email />
                        }
                    </div>

                    <div className='shipping step-no2'>
                        <div className="step-title">
                            <h2 className='title'>Shipping</h2>
                            {
                                currentStep !== 2 && step2.last_name ?
                                    <div className='shipping-info'>
                                        <div className='info'>
                                            <span>{step2.first_name} </span>
                                            <span>{step2.last_name}</span>
                                            <p>{step2.address1}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => dispatch(goToSelectedStep(2))}>Edit</button>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        {/* {renderStep2()} */}
                        {
                            currentStep === 2 && !isLoading &&
                            <Step2Shipping />
                        }
                    </div>

                    <div className="billing step-no3">
                        <div className="step-title">
                            <h2 className='title'>Billing</h2>
                            {
                                currentStep !== 3 && step3.last_name ?
                                    <div className='shipping-info'>
                                        <div className='info'>
                                            <span>{step3.first_name} </span>
                                            <span>{step3.last_name}</span>
                                            <p>{step3.address1}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => {
                                                dispatch(goToSelectedStep(3))
                                            }}>Edit</button>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        {/* {renderStep3()} */}
                        {
                            currentStep === 3 && !isLoading &&
                            <Step3Billing />
                        }
                    </div>

                    <div className="payment step-no4">
                        <div className="step-title">
                            <h2 className='title'>Payment</h2>
                        </div>
                        {/* {renderStep4()} */}
                        {
                            currentStep === 4 && !isLoading &&
                            <Step4Payment />
                        }
                    </div>

                </div>

                <div className='order-summary'>
                    <div className="summary">
                        <div className="title">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="order-details">
                            {
                                cartData.map(item => (
                                    <div className='details-inner' key={item.id}>
                                        <div className='item-img-wrapper'>
                                            <img src={item.product_img} alt={item.product_name} />
                                        </div>

                                        <div className='item-info'>
                                            <h4>{item.quantity} x {item.product_name}</h4>
                                            <ul>
                                                <li>Size {item.size}</li>
                                                <li>Color {item.product_color}</li>
                                                <li>Type {item.insulation}</li>
                                            </ul>
                                        </div>

                                        <div className='item-price'>
                                            {item.product_price * item.quantity}.00$
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="subtotal-section">
                            <div className='subtotal'>
                                <span>Subtotal</span>
                                <span>
                                    ${cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0)}
                                </span>
                            </div>
                            <div className='shipping-cost'>
                                <span>Shipping</span>
                                <span>
                                    {/* $30 */}
                                    {
                                        cartData.length ? "$30" : "$0"
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="total-section">
                            <span>Total (USD)</span>
                            <span>
                                ${cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0) + (cartData.length ? 30 : 0)}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CheckOut