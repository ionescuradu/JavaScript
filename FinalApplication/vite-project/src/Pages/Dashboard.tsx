function Dashboard() {
    const handleUploadActivities = () => {
        console.log('Upload cycling activities clicked')
        // Add your upload logic here
    }

    const handleSuggestWorkout = () => {
        console.log('Suggest cycling workout clicked')
        // Add your workout suggestion logic here
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
                <button 
                    onClick={handleUploadActivities}
                    style={{ padding: '1rem', cursor: 'pointer', fontSize: '1rem' }}
                >
                    Upload cycling activities
                </button>
                
                <button 
                    onClick={handleSuggestWorkout}
                    style={{ padding: '1rem', cursor: 'pointer', fontSize: '1rem' }}
                >
                    Suggest cycling workout
                </button>
            </div>
        </div>
    )
}

export default Dashboard