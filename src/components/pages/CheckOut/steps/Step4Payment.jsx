import React from 'react'
import VisaIcon from '../../../lib/VisaIcon'
import MastercardIcon from '../../../lib/MastercardIcon'
import AmexIcon from '../../../lib/AmexIcon'
import DiscoverIcon from '../../../lib/DiscoverIcon'
import { errorMessages } from '../../../utils/renderErrorMessages'
import { checkMonthYear } from '../../../utils/regExp'
import { useState } from 'react'
import StepInputs from './StepComponents/StepInputs'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../../../../slices/orderSlice/orderSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../../../config'
import { checkCreditCard } from '../../../utils/checkCreditCard'

function Step4Payment() {
  // const [inputValue, setInputValue] = useState('');
  const [validationErrors, setValidationErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { step1, step2, step3, step4 } = useSelector(store => store.step)
  const { cartData } = useSelector(store => store.cartData)
  const date = new Date
  const currentYear = date.getFullYear() % 100
  const total = cartData.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.product_price, 0) + (cartData.length ? 30 : 0)

  const validate = (data) => {
    const errors = {
      credit_card: "",
      expiration: "",
      name_on_card: "",
      cvv: ""
    }

    if (!data.credit_card) {
      errors.credit_card = errorMessages.required("Credit card number")
    } else if (!checkCreditCard(data.credit_card)) {
      errors.credit_card = "Invalid Credit Card Number!"
    }
    if (!data.expiration) {
      errors.expiration = errorMessages.required("Expiration date")
    } else if (!checkMonthYear(data.expiration)) {
      errors.expiration = "Invalid format for the Expiration Date"
    } else if (Number(data.expiration[0] + data.expiration[1]) < 1 || Number(data.expiration[0] + data.expiration[1]) > 12) {
      errors.expiration = 'Invalid month!'
    } else if (Number(data.expiration[3] + data.expiration[4]) < currentYear) {
      errors.expiration = 'Invalid year!'
      console.log('year', Number(data.expiration[3] + data.expiration[4]))
    }
    if (!data.name_on_card) {
      errors.name_on_card = errorMessages.required("Name on card")
    }
    if (!data.cvv) {
      errors.cvv = errorMessages.required("CVV")
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log()

    const formData = new FormData(e.target)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value.trim()
    }
    console.log('expiration', data.expiration[3] + data.expiration[4])
    console.log('expiration length', data.expiration.length)

    const errors = validate(data);
    setValidationErrors(errors);

    if (Object.values(errors).filter(string => string).length) {
      console.log(Object.values(errors));
      return;
    }

    const obj = {
      purchased_items: [
        ...cartData
      ],
      customer: {
        ...step1
      },
      shipping: {
        ...step2
      },
      billing: {
        ...step3
      },
      payment: {
        ...step4
      },
      total: total
    }

    // console.log(obj)

    dispatch(placeOrder(obj))
    // cartData.length = 0

    toast.success("Order successfully placed")
    navigate("/")

  }

  // const handleExpirationDate = (event) => {
  //   const value = event.target.value;
  //   const pattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format

  //   if (pattern.test(value) || value === "") {
  //     setInputValue(value);
  //   }
  // }


  return (
    <div className='step4'>
      <div className='step4-inner'>
        <div className="step4-header">

          <div className="title">
            <h4>Credit Card</h4>
          </div>

          <div className='payment-cards'>
            <VisaIcon />
            <MastercardIcon />
            <AmexIcon />
            <DiscoverIcon />
          </div>

        </div>

        <div className="step4-body">
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
              <div className='card-number-and-expiration'>
                <div className='input-component-wrapper' >
                  <StepInputs
                    validationErrors={validationErrors}
                    label="Credit Card Number"
                    name="credit_card"
                    step="step4"
                  />
                  {
                    validationErrors.credit_card &&
                    <p className='step-error'>{validationErrors.credit_card}</p>
                  }
                </div>
                <div className='input-component-wrapper'>
                  <StepInputs
                    validationErrors={validationErrors}
                    label="Expiration"
                    name="expiration"
                    step="step4"
                    placeHolder='MM YY'
                  />
                  {
                    validationErrors.expiration &&
                    <p className='step-error'>{validationErrors.expiration}</p>
                  }
                </div>
              </div>

              <div className='name-on-card-and-cvv'>
                <div className="input-component-wrapper">
                  <StepInputs
                    validationErrors={validationErrors}
                    label="Name on Card"
                    name="name_on_card"
                    step="step4"
                  />
                  {
                    validationErrors.name_on_card &&
                    <p className='step-error'>{validationErrors.name_on_card}</p>
                  }
                </div>

                <div className="input-component-wrapper">
                  <StepInputs
                    validationErrors={validationErrors}
                    label="CVV"
                    name="cvv"
                    step="step4"
                  />
                  {
                    validationErrors.cvv &&
                    <p className='step-error'>{validationErrors.cvv}</p>
                  }
                </div>
              </div>
            </div>

            <div className="order-button">
              <button>Place Order</button>
            </div>
          </form>
        </div>



      </div>



    </div>
  )
}

export default Step4Payment