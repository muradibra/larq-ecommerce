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

function Step4Payment() {
  const [inputValue, setInputValue] = useState('');
  const [validationErrors, setValidationErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { step1, step2, step3, step4 } = useSelector(store => store.step)
  const { cartData } = useSelector(store => store.cartData)
  // console.log(cartData)


  const validate = (data) => {
    const errors = {
      credit_card: "",
      expiration: "",
      name_on_card: "",
      cvv: ""
    }

    if (!data.credit_card) {
      errors.credit_card = errorMessages.required("Credit card number")
    }
    if (!data.expiration) {
      errors.expiration = errorMessages.required("Expiration date")
    } else if (checkMonthYear(data.expiration)) {
      errors.expiration = "Invalid format for the Expiration Date"
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
      data[key] = value
    }

    const errors = validate(data);
    setValidationErrors(errors);

    if (Object.values(errors).filter(string => string).length) {
      console.log(Object.values(errors));
      return;
    }

    const obj = {
      ...step1,
      ...step2,
      ...step3,
      credit_card: data.credit_card,
      expiration: data.expiration,
      name_on_card: data.name_on_card,
      cvv: data.cvv,
    }
    // console.log(obj)

    dispatch(placeOrder(obj))
    // cartData.length = 0

    toast.success("Order successfully placed")
    navigate("/")

    // cartData = cartData.splice(0, cartData.length)


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
                <StepInputs validationErrors={validationErrors} label="Credit Card Number" name="credit_card" step="step4" />
                <StepInputs validationErrors={validationErrors} label="Expiration" name="expiration" step="step4" />
              </div>

              <div className='name-on-card-and-cvv'>
                <StepInputs validationErrors={validationErrors} label="Name on Card" name="name_on_card" step="step4" />
                <StepInputs validationErrors={validationErrors} label="CVV" name="cvv" step="step4" />
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