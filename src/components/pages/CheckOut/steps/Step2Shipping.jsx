import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { errorMessages } from '../../../utils/renderErrorMessages'
import { useDispatch, useSelector } from 'react-redux'
import { goToSelectedStep, nextStep, updateStep } from '../../../../slices/stepSlice/stepSlice'
import ScrollToTop from '../../../lib/ScrollToTop'
import Step2Inputs from './StepComponents/StepInputs'

function Step2Shipping() {
  const [country, setCountry] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const dispatch = useDispatch()
  const { step2, step3 } = useSelector(store => store.step);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(resp => setCountry(resp.data.sort((a, b) => a.name.common.localeCompare(b.name.common))))


  }, [])

  const validate = (data) => {
    const errors = {
      first_name: "",
      last_name: "",
      country: "",
      postal_code: "",
      city: "",
      address1: ""
    }

    if (!data.first_name) {
      errors.first_name = errorMessages.required("First Name");
    }
    if (!data.last_name) {
      errors.last_name = errorMessages.required("Last Name")
    }
    if (!data.country) {
      errors.country = errorMessages.required("Country")
    }
    if (!data.postal_code) {
      errors.postal_code = errorMessages.required("Postal Code")
    }
    if (!data.city) {
      errors.city = errorMessages.required("City")
    }
    if (!data.address1) {
      errors.address1 = errorMessages.required("Address Line 1")
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value.trim();
    }

    const errors = validate(data);
    setValidationErrors(errors);

    if (Object.values(errors).filter(string => string).length) {
      console.log(Object.values(errors));
      return;
    }


    if (!step2.isSame) {
      dispatch(nextStep())
      return
    }

    const fieldsToCopy = [
      {
        fieldName: "first_name",
        value: step2.first_name
      },
      {
        fieldName: "last_name",
        value: step2.last_name
      },
      {
        fieldName: "company",
        value: step2.company
      },
      {
        fieldName: "country",
        value: step2.country
      },
      {
        fieldName: "postal_code",
        value: step2.postal_code
      },
      {
        fieldName: "city",
        value: step2.city
      },
      {
        fieldName: "state_or_province",
        value: step2.state_or_province
      },
      {
        fieldName: "address1",
        value: step2.address1
      },
      {
        fieldName: "address2",
        value: step2.address2
      },
      {
        fieldName: "phone_number",
        value: step2.phone_number
      },

    ]

    fieldsToCopy.map(item => dispatch(updateStep({stateName: "step3", field: item.fieldName, value: item.value})))
    dispatch(goToSelectedStep(4))
  }


  const postalClick = () => {
    if (!selectedCountry) {
      Swal.fire(
        'Missing country',
        'Please select a country from the dropdown'
      );
    }
  }

  return (
    <div className='step2'>

      <div className='title'>
        <h4>Shipping Address</h4>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="first-last-name">
          <div className='input-wrapper'>
            <Step2Inputs name="first_name" label="First Name" step="step2" />
            {
              validationErrors.first_name &&
              <p className='step-error'>{validationErrors.first_name}</p>
            }
          </div>

          {/* <div className='input'> */}
          {/* <label htmlFor="last_name">Last Name</label> */}
          <div className='input-wrapper'>
            <Step2Inputs name="last_name" label="Last Name" step="step2" />
            {
              validationErrors.last_name &&
              <p className='step-error'>{validationErrors.last_name}</p>
            }
          </div>
          {/* <input
              type="text"
              id='last_name'
              name="last_name"
              value={step2.last_name}
              onChange={(e) => dispatch(updateStep({
                stateName: "step2",
                field: "last_name",
                value: e.target.value
              }))}
            /> */}
          {/* </div> */}
        </div>

        <Step2Inputs name="company" label="Company Name (Optional)" step="step2" />

        <div className='input'>
          <label htmlFor="country">Country</label>
          <Select
            name='country'
            className='react-select-container'
            placeholder='Select a country...'
            classNamePrefix={'select'}
            value={selectedCountry}
            isClearable
            onChange={(option) => {
              setSelectedCountry(option)
              dispatch(updateStep({
                stateName: "step2",
                field: "country",
                value: option?.name?.common
              }))
            }}
            options={country}
            getOptionValue={option => option.name.common}
            getOptionLabel={option => option.name.common}
          />
          {
            validationErrors.country &&
            <p className='step-error'>{validationErrors.country}</p>
          }
        </div>

        <div className="postal-and-city">
          <div className='input' onClick={postalClick}>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id='postal'
              name='postal_code'
              value={step2.postal_code.length > 0 ? step2.postal_code : ""}
              onChange={(e) => dispatch(updateStep({
                stateName: "step2",
                field: "postal_code",
                value: e.target.value
              }))}
              disabled={!selectedCountry}
            />
            {
              validationErrors.postal_code &&
              <p className="step-error">{validationErrors.postal_code}</p>
            }
          </div>

          <div className='input-wrapper'>
            <Step2Inputs name="city" label="City" step="step2" />
            {
              validationErrors.city &&
              <p className="step-error">{validationErrors.city}</p>
            }
          </div>
        </div>

        <Step2Inputs name="state_or_province" label="State/Province" step="step2" />

        <Step2Inputs name="address1" label="Address Line 1" step="step2" />
        {
          validationErrors.address1 &&
          <p className="step-error">{validationErrors.address1}</p>
        }

        <Step2Inputs name="address2" label="Address Line 2" step="step2" />

        <Step2Inputs name="phone_number" label="Phone Number (Optional)" step="step2" />

        <div className='checkbox'>
          <input
            type="checkbox"
            id='same'
            name='isSame'
            onChange={(e) => dispatch(updateStep({
              stateName: "step2",
              field: 'isSame',
              value: e.target.checked
            }))}
          />
          <label htmlFor="same">My Billing address is the same as my Shipping address</label>
        </div>

        <div className="continue-button">
          <button>Continue</button>
        </div>

        {/* <div className='continue-button'> */}
        {/* <button
            type='button'
            onClick={() => {
              // handleSubmit()
              // if (!step2.isSame) {
              //   dispatch(nextStep())
              //   return
              // }
              // dispatch(goToSelectedStep(4))
            }}
          >
            Continue
          </button> */}
        {/* </div> */}

      </form>

    </div>
  )
}

export default Step2Shipping