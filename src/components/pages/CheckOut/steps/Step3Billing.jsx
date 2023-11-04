import React, { useEffect, useState } from 'react'
import Step2Inputs from './StepComponents/StepInputs'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { nextStep, updateStep } from '../../../../slices/stepSlice/stepSlice'
import { errorMessages } from '../../../utils/renderErrorMessages'


function Step3Billing() {
  const [country, setCountry] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const dispatch = useDispatch()
  const { step3 } = useSelector(store => store.step);

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

    const formData = new FormData(e.target)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value.trim()
    }

    const errors = validate(data)
    setValidationErrors(errors)

    if (Object.values(errors).filter(string => string).length) {
      console.log(Object.values(errors).filter(string => string));
      alert("ERRORRRR!");
      return;
    }

    dispatch(nextStep())
  }


  return (
    <div className='step3'>
      <div className='title'>
        <h4>Billing Address</h4>
      </div>

      <form
        onSubmit={handleSubmit}
      >

        <div className="first-last-name">
          {/* <div className='input'> */}
          {/* <label htmlFor="first_name">First Name</label> */}
          <Step2Inputs name="first_name" label="First Name" step="step3" />
          {/* <input
              type="text"
              id='first_name'
              name="first_name"
              value={step2.first_name}
              onChange={(e) => dispatch(updateStep({
                stateName: "step2",
                field: "first_name",
                value: e.target.value
              }))}
            /> */}
          {/* </div> */}

          {/* <div className='input'> */}
          {/* <label htmlFor="last_name">Last Name</label> */}
          <Step2Inputs name="last_name" label="Last Name" step="step3" />
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

        {/* <div className='input'> */}
        {/* <label htmlFor="company">Company Name (Optional)</label> */}
        <Step2Inputs name="company" label="Company Name (Optional)" step="step3" />
        {/* <input
            type="text"
            id='company'
            name='company'
            value={step2.company}
            onChange={(e) => dispatch(updateStep({
              stateName: "step2",
              field: "commpany",
              value: e.target.value
            }))}
          /> */}
        {/* </div> */}

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
                stateName: "step3",
                field: "country",
                value: option?.name?.common
              }))
            }}
            options={country}
            getOptionValue={option => option.name.common}
            getOptionLabel={option => option.name.common}
          />
        </div>

        <div className="postal-and-city">
          <div
            className='input'
          //  onClick={postalClick}
          >
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id='postal'
              name='postal_code'
              value={step3.postal_code.length > 0 ? step3.postal_code : ""}
              onChange={(e) => dispatch(updateStep({
                stateName: "step3",
                field: "postal_code",
                value: e.target.value
              }))}
              disabled={!selectedCountry}
            />
          </div>

          {/* <div className='input'> */}
          <Step2Inputs name="city" label="City" step="step3" />
          {/* <label htmlFor="city">City</label>
            <input
              type="text"
              id='city'
              name='city'
              value={step2.city}
              onChange={(e) => dispatch(updateStep({
                stateName: "step2",
                field: "city",
                value: e.target.value
              }))}
            /> */}
          {/* </div> */}
        </div>

        {/* <div className='input'> */}
        <Step2Inputs name="state_or_province" label="State/Province" step="step3" />
        {/* <label htmlFor="state_or_province">State/Province (Optional)</label>
          <input
            type="text"
            id='state_or_province'
            name='state_or_province'
            value={step2.state_or_province}
            onChange={(e) => dispatch(updateStep({
              stateName: "step2",
              field: "state_or_province",
              value: e.target.value
            }))}
          /> */}
        {/* </div> */}

        {/* <div className='input'> */}
        <Step2Inputs name="address1" label="Address Line 1" step="step3" />
        {/* <label htmlFor="address1">Address Line 1</label> */}
        {/* <input
            type="text"
            id='address1'
            name='address1'
            value={step2.address1}
            onChange={(e) => dispatch(updateStep({
              stateName: "step2",
              field: "address1",
              value: e.target.value
            }))}
          /> */}
        {/* </div> */}

        {/* <div className='input'> */}
        <Step2Inputs name="address2" label="Address Line 2" step="step3" />

        {/* </div> */}

        {/* <div className='input'> */}
        <Step2Inputs name="phone_number" label="Phone Number (Optional)" step="step3" />
        {/* </div> */}

        <div className="continue-button">
          <button>Continue</button>
        </div>

      </form>

    </div>
  )
}

export default Step3Billing