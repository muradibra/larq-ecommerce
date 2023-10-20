import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStep } from '../../../../../slices/stepSlice/stepSlice'

function StepInputs({ label, name, step, validationErrors }) {
    const dispatch = useDispatch()
    const stepData = useSelector(store => store.step[step])
    // console.log(stepData)

    return (
        <div className='input'>
            <label className={``} htmlFor={name}>{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={stepData[name].length > 0 ? stepData[name] : ""}
                onChange={(e) => dispatch(updateStep({
                    stateName: step,
                    field: name,
                    value: e.target.value
                }))}
                className={``}
            // disabled={!selectedCountry}
            />
        </div>
    )
}

export default StepInputs