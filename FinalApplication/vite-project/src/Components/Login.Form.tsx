import { useState, FormEvent } from 'react'

interface LoginFormProps {
    onSubmit: (userName: string, password: string) => void
}

function LoginForm({ onSubmit }: LoginFormProps) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(userName, password)
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem', display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'center', gap: '0.5rem' }}>
                <label htmlFor="userName">User Name:</label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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
                <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>Login</button>
            </div>
        </form>
    )
}

export default LoginForm