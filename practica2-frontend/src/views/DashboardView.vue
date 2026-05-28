<template>
  <div style="max-width: 600px; margin: 40px auto; padding: 25px; font-family: Arial, sans-serif; background: #fafafa; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <h2 style="color: #2c3e50;">📊 Panel de Control (Dashboard)</h2>
    <p style="color: #27ae60; font-weight: bold;">✓ Has accedido a una ruta completamente protegida por el sistema.</p>
    <hr style="border:0; height:1px; background:#ccc; margin:20px 0;">
    
    <h3>Tus Datos de Perfil (Desde la API):</h3>
    <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
      <p><strong>ID de Usuario:</strong> {{ authStore.user?.id }}</p>
      <p><strong>Nombre Completo:</strong> {{ authStore.user?.name }}</p>
      <p><strong>Email Registrado:</strong> {{ authStore.user?.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
</script>