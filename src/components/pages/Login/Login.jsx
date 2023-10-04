import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/appContext'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../slices/usersSlice/usersSlice'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { errorMessages } from '../../utils/renderErrorMessages'
import { checkIsValidEmail, checkIsValidPassword } from '../../utils/regExp'
import toast from 'react-hot-toast'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const navigate = useNavigate()
    const { setIsAuth } = useContext(AppContext)
    const dispatch = useDispatch()
    const { users } = useSelector(store => store.users)
    const [inpType, setInpType] = useState('password')

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    // console.log();

    const validateErrors = (email, password) => {
        const errors = {
            email: "",
            password: ""
        }

        if (!email) {
            errors.email = errorMessages.required("Email")
        } else if (!checkIsValidEmail(email)) {
            errors.email = errorMessages.invalid("Email")
        }
        if (!password) {
            errors.password = errorMessages.required("Password")
        } else if (!checkIsValidPassword(password)) {
            errors.password = errorMessages.invalidPassword("Password")
        }

        return errors
    }

    const handleLogin = () => {
        const user = users.find(item => item.email === email && item.password === password)
        const errors = validateErrors(email, password)
        setValidationErrors(errors)

        if (Object.values(errors).filter(string => string).length > 0) {
            // toast.error("Fill all inputs!", toast_config)
            return
        }

        if (!user) {
            // alert("Username or password is not correct!")
            toast.error("Username or password is not correct!")
            return
        }

        setIsAuth(true)
        localStorage.setItem('isAuth', true)
        navigate("/home")
    }

    return (
        <div className='login'>
            <div className='title'>
                <h1>Sign in</h1>
            </div>

            <div className='wrapper'>
                <div className='forms'>
                    <div className='email'>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                            validationErrors.email &&
                            <p style={{
                                color: "red",
                                fontWeight: "600"
                            }}>
                                {validationErrors.email}
                            </p>

                        }
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Pasword</label>
                        <div className='password-input'>
                            <input
                                type={inpType}
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span
                                onClick={() => setInpType(prevType => prevType === "password" ? "text" : "password")}
                            >
                                {
                                    inpType === "password" ?
                                        <AiFillEye />
                                        :
                                        <AiFillEyeInvisible />
                                }
                            </span>
                        </div>
                        {
                            validationErrors.password &&
                            <p style={{
                                color: "red",
                                fontWeight: "600"
                            }}>
                                {validationErrors.password}
                            </p>

                        }
                    </div>

                    <div className='sign-in-btn'>
                        <button onClick={() => handleLogin()} >Sign in</button>
                    </div>

                    <div className='forgot-your-password'>
                        <Link>
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <div className='new-customer'>
                    <div className="inner">
                        <div className="title">
                            <h2>New Customer?</h2>
                        </div>

                        <div className="description">
                            <p>Create an account with us and you'll be able to:</p>
                            <ul>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                            </ul>
                            <div className="create-account-btn">
                                <button onClick={() => navigate("/register")}>
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login