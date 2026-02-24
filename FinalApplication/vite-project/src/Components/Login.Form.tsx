import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void
    error?: string
}

function LoginForm({ onSubmit, error }: LoginFormProps) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
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
                    <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '6px' }}>Login</button>
                    <p style={{ textAlign: 'center', margin: 0 }}>
                        Don't have an account?{' '}
                        <span onClick={() => navigate('/register')} style={{ color: '#3498db', cursor: 'pointer' }}>Register here</span>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm