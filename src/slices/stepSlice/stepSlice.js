import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    selectedCountry: null,
    step1: {
        email: ""
    },
    step2: {
        first_name: "",
        last_name: "",
        company: "",
        country: "",
        postal_code: "",
        city: "",
        state_or_province: "",
        address1: "",
        address2: "",
        phone_number: "",
        isSame: ""
    },
    step3: {
        first_name: "",
        last_name: "",
        company: "",
        country: "",
        postal_code: "",
        city: "",
        state_or_province: "",
        address1: "",
        address2: "",
        phone_number: "",
    },
    step4: {
        credit_card: "",
        expiration: "",
        name_on_card: "",
        cvv: ""
    },

}

export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1
        },
        prevStep: (state) => {
            state.currentStep -= 1
        },
        goToSelectedStep: (state, action) => {
            state.currentStep = action.payload
        },
        updateStep: (state, action) => {
            const { stateName, field, value } = action.payload
            state[stateName][field] = value
        },
        // setSelectedCountry: (state, action) => {
        //     state.selectedCountry = action.payload;
        // }
    }
})

export const {
    nextStep,
    prevStep,
    goToSelectedStep,
    updateStep,
    // selectedCountry
} = stepSlice.actions

export default stepSlice.reducer