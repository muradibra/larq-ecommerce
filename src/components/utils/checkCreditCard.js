export const checkCreditCard = (val) => {
    let creditCardInt = val.split('').map(Number)
    for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
        let tempVal = creditCardInt[i]
        // console.log("creditCardInt[i]", creditCardInt[i])
        tempVal = tempVal * 2
        // console.log("tempVal", tempVal)

        if (tempVal > 9) {
            tempVal = tempVal % 10 + 1
        }
        creditCardInt[i] = tempVal
    }

    let total = 0

    for (let i = 0; i < creditCardInt.length; i++) {
        total += creditCardInt[i]
    }

    if (total % 10 == 0) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}