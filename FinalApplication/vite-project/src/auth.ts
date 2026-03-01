export function checkAuth(): "dashboard" | "login" {
    const token = localStorage.getItem("token");
    if (token) {
        return "dashboard";
    }
    return "login";
}

export function redirectByAuth(): void {
    const token = localStorage.getItem("token");
    if (token) {
        window.location.href = "/dashboard";
    } else {
        window.location.href = "/";
    }
}
