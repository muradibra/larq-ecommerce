export const checkIsValidEmail = email => {
    // const regex = new RegExp('/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/')
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return regex.test(email)
}

export const checkIsValidPassword = password => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    return regex.test(password)
}

export const checkMonthYear = value => {
    const regExp = /^(0[1-9]|1[0-2]) \d{2}$/;
    return regExp.test(value);
} 