import axios from "axios";

const tokenCrf = document.getElementById('token-xsrf') as HTMLInputElement

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'RequestVerificationToken': tokenCrf?.value
    },
})

export default httpClient