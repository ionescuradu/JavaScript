import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/', { replace: true })
    }

    const handleUploadActivities = () => {
        console.log('Upload cycling activities clicked')
    }

    const handleSuggestWorkout = () => {
        console.log('Suggest cycling workout clicked')
    }

    return (
        <div>
            <button
                onClick={handleLogout}
                style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '1rem', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '6px' }}
            >
                Logout
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
                <button
                    onClick={handleUploadActivities}
                    style={{ padding: '1rem', cursor: 'pointer', fontSize: '1rem', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '6px' }}
                >
                    Upload cycling activities
                </button>

                <button
                    onClick={handleSuggestWorkout}
                    style={{ padding: '1rem', cursor: 'pointer', fontSize: '1rem', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '6px' }}
                >
                    Suggest cycling workout
                </button>
            </div>
        </div>
    )
}

export default Dashboard
