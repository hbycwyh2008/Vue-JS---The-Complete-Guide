<template>
  <div>
    <h1>Product Detail</h1>
    <p>Product ID: {{ productId }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  productId: string
}>()
</script>