import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { errorMessages } from '../../utils/renderErrorMessages'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../slices/usersSlice/usersSlice'
import { checkIsValidEmail, checkIsValidPassword } from '../../utils/regExp'
import toast from 'react-hot-toast'
import axios from 'axios'
import Select from 'react-select'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function Register() {
    const [inpType1, setInpType1] = useState("password")
    const [inpType2, setInpType2] = useState("password")
    const [validationErrors, setValidationErrors] = useState({})
    const dispatch = useDispatch()
    const [country, setCountry] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(resp => setCountry(resp.data.sort((a, b) => a.name.common.localeCompare(b.name.common))))
    }, [])

    const validation = (data) => {
        const errors = {
            email: "",
            password: "",
            confirm_password: "",
            country: "",
            first_name: "",
            last_name: "",
            address_1: "",
            suburb_or_city: "",
            zip: "",
        }

        if (!data.email) {
            errors.email = errorMessages.required("Email")
        } else if (!checkIsValidEmail(data.email)) {
            errors.email = errorMessages.invalid("Email")
        }
        if (!data.password) {
            errors.password = errorMessages.required("Password")
        } else if (!checkIsValidPassword(data.password)) {
            errors.password = errorMessages.invalidPassword("Password")
        }
        if (!data.confirm_password) {
            errors.confirm_password = errorMessages.required("Password")
        } else if (data.password !== data.confirm_password) {
            errors.confirm_password = "Passwords do not match!"
        }
        if (!data.country) {
            errors.country = "The 'Country' field cannot be blank."
        }
        if (!data.first_name) {
            errors.first_name = errorMessages.required("First name")
        }
        if (!data.last_name) {
            errors.last_name = errorMessages.required("Last name")
        }
        if (!data.address_1) {
            errors.address_1 = errorMessages.required("Address line 1")
        }
        if (!data.suburb_or_city) {
            errors.suburb_or_city = errorMessages.required("Suburb/City")
        }
        if (!data.zip) {
            errors.zip = errorMessages.required("Zip/Postcode")
        }

        return errors

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }

        const errors = validation(data)
        setValidationErrors(errors)

        if (Object.values(errors).filter(string => string).length) {
            console.log(Object.values(errors).filter(string => string));
            // alert("ERRORRRR")
            console.log(data);
            return
        }
        const obj = {
            email: data.email,
            password: data.password,
            country: data.country,
            first_name: data.first_name,
            last_name: data.last_name,
            address_1: data.address_1,
            address_2: data.address_2,
            company_name: data.company_name,
            suburb_or_city: data.suburb_or_city,
            state_or_province: data.state_or_province,
            zip: data.zip,
            phone_number: data.phone_number
        }

        dispatch(addUser(obj))
        toast.success("Registered successfully!")
    }


    return (
        <div className='register'>
            <div className="title">
                <h1>
                    New Account
                </h1>
            </div>

            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>

                        <div className='form-input email'>
                            <div className='label'>
                                <label htmlFor="email">Email Address</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='email'
                                id='email'
                                className={`${validationErrors.email ? "error" : ""}`}
                            />
                            {
                                validationErrors.email &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.email}</p>
                            }
                        </div>

                        <div className='form-input password'>
                            <div className='label'>
                                <label htmlFor="password">Password</label>
                                <span>Required</span>

                            </div>
                            <div className='input'>
                                <input
                                    type={inpType1}
                                    name='password'
                                    id='password'
                                    className={`${validationErrors.password ? "error" : ""}`}
                                />
                                <span
                                    className='visibility-icon'
                                    onClick={() => setInpType1(prevType => prevType == "password" ? "text" : "password")}
                                >
                                    {
                                        inpType1 == "password" ?
                                            <AiFillEye />
                                            :
                                            <AiFillEyeInvisible />
                                    }

                                </span>

                            </div>
                            {
                                validationErrors.password &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.password}</p>
                            }
                        </div>

                        <div className='form-input confirm-password'>
                            <div className='label'>
                                <label htmlFor="password">Confirm Password</label>
                                <span>Required</span>
                            </div>
                            <div className="input">
                                <input
                                    type={inpType2}
                                    name='confirm_password'
                                    id='confirm-password'
                                    className={`${validationErrors.confirm_password ? "error" : ""}`}
                                />
                                <span
                                    className='visibility-icon'
                                    onClick={() => setInpType2(prevType => prevType == "password" ? "text" : "password")}
                                >
                                    {
                                        inpType2 == "password" ?
                                            <AiFillEye />
                                            :
                                            <AiFillEyeInvisible />
                                    }
                                </span>

                            </div>
                            {
                                validationErrors.confirm_password &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.confirm_password}</p>
                            }
                        </div>

                        <div className='form-input country'>
                            <div className='label'>
                                <label>Country</label>
                                <span>Required</span>
                            </div>
                            <Select
                                name='country'
                                // unstyled
                                className='react-select-container'
                                classNamePrefix={'select'}
                                value={selectedCountry}
                                onChange={(option) => setSelectedCountry(option)}
                                options={country}
                                getOptionValue={option => option.name.common}
                                getOptionLabel={option => option.name.common}
                                isClearable
                            />

                            {
                                validationErrors.country &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.country}</p>
                            }
                        </div>

                        <div className='form-input first-name'>
                            <div className='label'>
                                <label htmlFor="first-name">First Name</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='first_name'
                                id='first-name'
                                className={`${validationErrors.first_name ? "error" : ""}`}
                            />

                            {
                                validationErrors.first_name &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.first_name}</p>
                            }
                        </div>

                        <div className='form-input last-name'>
                            <div className='label'>
                                <label htmlFor="last-name">Last Name</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='last_name'
                                id='last-name'
                                className={`${validationErrors.last_name ? "error" : ""}`}
                            />

                            {
                                validationErrors.last_name &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.last_name}</p>
                            }
                        </div>

                        <div className='form-input address-1'>
                            <div className='label'>
                                <label htmlFor="address-1">Address Line 1</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='address_1'
                                id='address-1'
                                className={`${validationErrors.address_1 ? "error" : ""}`}
                            />

                            {
                                validationErrors.address_1 &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.address_1}</p>
                            }
                        </div>

                        <div className='form-input address-2'>
                            <div className="label">
                                <label htmlFor="address-2">Address Line 2</label>
                            </div>
                            <input
                                type="text"
                                name='address_2'
                                id='address-2'
                            />
                        </div>

                        <div className='form-input company'>
                            <div className="label">
                                <label htmlFor="company">Company Name</label>
                            </div>
                            <input
                                type="text"
                                name='company'
                                id='company'
                            />
                        </div>

                        <div className='form-input suburb-or-city'>
                            <div className='label'>
                                <label htmlFor="suburb-or-city">Suburb/City</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='suburb_or_city'
                                id='suburb-or-city'
                                className={`${validationErrors.suburb_or_city ? "error" : ""}`}
                            />

                            {
                                validationErrors.suburb_or_city &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.suburb_or_city}</p>
                            }
                        </div>

                        <div className='form-input state-or-province'>
                            <div className='label'>
                                <label htmlFor="state-or-province">State/Province</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='state_or_province'
                                id='state-or-province'
                                className={`${validationErrors.state_or_province ? "error" : ""}`}
                            />
                        </div>

                        <div className='form-input zip-code'>
                            <div className='label'>
                                <label htmlFor="zip">Zip/Postcode</label>
                                <span>Required</span>
                            </div>
                            <input
                                type="text"
                                name='zip'
                                id='zip'
                                className={`${validationErrors.zip ? "error" : ""}`}
                            />

                            {
                                validationErrors.zip &&
                                <p className='error-message' style={{ marginTop: "3px" }}>{validationErrors.zip}</p>
                            }
                        </div>

                        <div className='form-input phone-number'>
                            <div className="label">
                                <label htmlFor="phone-number">Phone Number</label>
                            </div>
                            <PhoneInput
                                className='reactPhoneInput'
                                name='phone_number'
                                id='phone_number'
                                value={phoneNum}
                                onChange={setPhoneNum}
                            />
                        </div>

                    </div>

                    <div className='create-account'>
                        <button>Create account</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register