import React from 'react'
import VisaIcon from '../../../lib/VisaIcon'
import MastercardIcon from '../../../lib/MastercardIcon'
import AmexIcon from '../../../lib/AmexIcon'
import DiscoverIcon from '../../../lib/DiscoverIcon'
import { errorMessages } from '../../../utils/renderErrorMessages'
import { checkMonthYear } from '../../../utils/regExp'
import { useState } from 'react'

function Step4Payment() {
  const [inputValue, setInputValue] = useState('');


  const validate = (data) => {
    const errors = {
      credit_card: "",
      expiration: "",
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
    if (!data.cvv) {
      errors.cvv = errorMessages.required("CVV")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    const errors = validate(data);
    setValidationErrors(errors);

    if (Object.values(errors).filter(string => string).length) {
      // console.log(Object.values(errors));
      return;
    }
  }

 const handleExpirationDate = (event) => {
  const value = event.target.value;
  const pattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format

  if (pattern.test(value) || value === "") {
    setInputValue(value);
  }
}


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
            <input type="text" name='credit_card' />
            <input
              type="text"
              name="expiration"
              value={inputValue}
              onChange={handleExpirationDate}
            />
            <input type="text" name='name_on_card' />
            <input type="text" name='cvv' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step4Payment