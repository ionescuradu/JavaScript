import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser, loginUser } from '../services/auth.service'

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError('')
            await createUser(email, password)
            await loginUser(email, password)
            navigate('/dashboard', { replace: true })
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleRegister} style={{ maxWidth: '400px', margin: '0 auto' }}>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <div style={{ marginBottom: '1rem', display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: '0.5rem' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '0.5rem' }}
                    />
                </div>

                <div style={{ marginBottom: '1rem', display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: '0.5rem' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: '0.5rem' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.5rem' }}>
                    <div></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '6px' }}>Register</button>
                        <p style={{ textAlign: 'center', margin: 0 }}>
                            Already have an account?{' '}
                            <span onClick={() => navigate('/')} style={{ color: '#2ecc71', cursor: 'pointer', textDecoration: 'underline' }}>Login here</span>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
