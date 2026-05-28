<template>
  <div>
    <NavBar />
    
    <div style="padding: 20px;">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>