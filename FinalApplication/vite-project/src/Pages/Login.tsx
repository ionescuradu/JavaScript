import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/Login.Form'
import { loginUser } from '../services/auth.service'

function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleLogin = async (email: string, password: string) => {
        try {
            setError('')
            await loginUser(email, password)
            navigate('/dashboard', { replace: true })
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h1>Radu's Fitness App</h1>
            <LoginForm onSubmit={handleLogin} error={error} />
        </div>
    )
}

export default Login