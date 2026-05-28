import { defineStore } from 'pinia'
import api from '../plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async register(data) {
      this.loading = true
      try {
        const response = await api.post('/register', data)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
        return { success: true }
      } catch (error) {
        return { success: false, message: error.response?.data?.message || 'Error en el registro.' }
      } finally {
        this.loading = false
      }
    },
    async login(credentials) {
      this.loading = true
      try {
        const response = await api.post('/login', credentials)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
        return { success: true }
      } catch (error) {
        return { success: false, message: error.response?.data?.message || 'Credenciales incorrectas.' }
      } finally {
        this.loading = false
      }
    },
    async logout() {
      try {
        await api.post('/logout')
      } catch (error) {
        console.error('Error al revocar token en servidor', error)
      } finally {
        // Siempre limpiamos el estado local aunque el servidor falle
        this.token = null
        this.user = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    }
  }
})