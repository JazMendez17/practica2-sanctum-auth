<template>
  <div style="max-width: 400px; margin: 50px auto; padding: 25px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif;">
    <h2>Crear Cuenta</h2>
    <div v-if="errorMsg" style="background: #fdedec; color: #922b21; padding: 10px; margin-bottom: 15px; border-radius: 4px;">{{ errorMsg }}</div>
    
    <form @submit.prevent="handleSubmit">
      <div style="margin-bottom: 12px;">
        <label style="display:block; margin-bottom:5px;">Nombre</label>
        <input v-model="form.name" type="text" required style="width:100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 12px;">
        <label style="display:block; margin-bottom:5px;">Correo Electrónico</label>
        <input v-model="form.email" type="email" required style="width:100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 12px;">
        <label style="display:block; margin-bottom:5px;">Contraseña</label>
        <input v-model="form.password" type="password" required style="width:100%; padding: 8px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 15px;">
        <label style="display:block; margin-bottom:5px;">Confirmar Contraseña</label>
        <input v-model="form.password_confirmation" type="password" required style="width:100%; padding: 8px; box-sizing: border-box;">
      </div>
      <button type="submit" :disabled="authStore.loading" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer;">
        {{ authStore.loading ? 'Registrando...' : 'Registrar Cuenta' }}
      </button>
    </form>
    <p style="margin-top:15px; text-align:center; font-size:14px;">
      ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = ref({ name: '', email: '', password: '', password_confirmation: '' })
const errorMsg = ref('')

const handleSubmit = async () => {
  errorMsg.value = ''
  const result = await authStore.register(form.value)
  if (result.success) {
    router.push({ name: 'dashboard' })
  } else {
    errorMsg.value = result.message
  }
}
</script>