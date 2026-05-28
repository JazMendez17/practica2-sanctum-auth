<template>
  <nav style="background: #2c3e50; padding: 15px; display: flex; justify-content: space-between; align-items: center; color: white;">
    <h3 style="margin: 0;">🔐 AuthSystem</h3>
    <div v-if="authStore.isAuthenticated">
      <span style="margin-right: 15px;">Bienvenido, <strong>{{ authStore.user?.name }}</strong></span>
      <button @click="handleLogout" style="background: #e74c3c; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
        Cerrar Sesión
      </button>
    </div>
    <div v-else>
      <router-link to="/login" style="color: white; margin-right: 15px; text-decoration: none;">Iniciar Sesión</router-link>
      <router-link to="/register" style="color: white; text-decoration: none;">Registrarse</router-link>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  await authStore.logout()
  router.push({ name: 'login' })
}
</script>