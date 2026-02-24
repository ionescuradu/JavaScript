const API_BASE_URL = "http://localhost:5173"

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/Login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Login failed")
    }

    const data = await response.json()
    localStorage.setItem("token", data.token)
    return data
}

export async function createUser(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/user/AddUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Registration failed")
    }

    return await response.json()
}
