// src/plugins/axios.js
import axios from 'axios'
import router from '../router'

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

// Interceptor para peticiones: Agrega el token Bearer automáticamente
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

// Interceptor para respuestas: Si el servidor responde 401, redirige al login
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            router.push({ name: 'login' })
        }
        return Promise.reject(error)
    }
)

// Exportación única de nuestra instancia configurada
export default api;