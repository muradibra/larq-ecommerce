import React, { useState } from 'react';
import PayPalIcon from '../../../lib/PayPalIcon';
import AmazonIcon from '../../../lib/AmazonIcon';
import GooglePayIcon from '../../../lib/GooglePayIcon';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, updateStep } from '../../../../slices/stepSlice/stepSlice';
import { checkIsValidEmail } from '../../../utils/regExp';

function Step1Email() {
    const dispatch = useDispatch();
    const { email } = useSelector(store => store.step.step1);
    const [emailErr, setEmailErr] = useState("");

    // const checkEmail = () => {
    //     if (!email || emailErr.length > 0) {
    //         return; // Don't proceed if email is empty or invalid
    //     }

    //     if (!checkIsValidEmail(email)) {
    //         setEmailErr("Invalid Email!");
    //         console.log(emailErr)
    //     } else {
    //         setEmailErr("");
    //     }
    // }

    const checkEmail = () => {
        if(!email) {
            setEmailErr("Email address is required!")
            return 
        }

        if(!checkIsValidEmail(email)) {
            setEmailErr('Email address must be valid!')
            // alert("Invalid email!")
            return
        }

        dispatch(nextStep())
    }

    // const submitEmail = () => {
    //     checkEmail()

    // }

    return (
        <div className='step1'>
            <fieldset>
                <legend>Express checkout with</legend>
                <div className='fieldset-inner'>
                    <PayPalIcon />
                    <AmazonIcon />
                    <GooglePayIcon />
                </div>
            </fieldset>

            <div className="email-input">
                <div className='input-wrapper'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => {
                            dispatch(updateStep({
                                stateName: "step1",
                                field: "email",
                                value: e.target.value
                            }));
                            setEmailErr(""); // Clear the error message when input changes
                        }}
                    />
                    {emailErr.length > 0 && (
                        <p className='step-error' style={{color: "#d14343", margin: "0.1875rem 0 0"}}>
                            {emailErr}
                        </p>
                    )}
                </div>
                <button onClick={() => {
                    checkEmail()
                }}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
}

export default Step1Email;
