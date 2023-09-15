import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/appContext'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../../features/usersSlice/usersSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setIsAuth } = useContext(AppContext)
    const dispatch = useDispatch()
    const { users } = useSelector(store => store.users)
    const [img, setImg] = useState("")


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    console.log();

    const handleLogin = () => {
        const user = users.find(item => item.username === username && item.password === password)
        // console.log(user)
        if (!user) {
            alert("Username or password is not correct!")
            return
        }

        setIsAuth(true)
        localStorage.setItem('isAuth', true)
        navigate("/home")
    }

    return (
        <div className='login'>
            <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <button onClick={() => handleLogin()} >Log In</button>
            </div>

        </div>
    )
}

export default Login