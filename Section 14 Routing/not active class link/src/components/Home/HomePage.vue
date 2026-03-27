<template>
  <div>
    <h2>Home Page</h2>
    <button @click="goToContact">Contact Us</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToContact = () => {
  router.push('/contact');
};
</script>
