import.meta.env.PROD = true
export const serverUrl =
    import.meta.env.VITE_SERVER_URL || "http//localhost:3000/api";