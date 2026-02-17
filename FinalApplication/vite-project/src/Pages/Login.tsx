import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/Login.Form'

function Login() {
    const navigate = useNavigate()

    const handleLogin = (userName: string, password: string) => {
        console.log('Login attempt:', { userName, password })
        // Add your login logic here (e.g., API call)
        
        // Navigate to the dashboard and replace history entry
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Radu's Fitness App</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default Login