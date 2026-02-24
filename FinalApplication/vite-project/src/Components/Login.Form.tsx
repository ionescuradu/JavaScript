import { useState, FormEvent } from 'react'

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void
    onRegister: (email: string, password: string) => void
    error?: string
}

function LoginForm({ onSubmit, onRegister, error }: LoginFormProps) {
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
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer', flex: 1 }}>Login</button>
                    <button type="button" onClick={() => onRegister(email, password)} style={{ padding: '0.5rem', cursor: 'pointer', flex: 1 }}>Register</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm