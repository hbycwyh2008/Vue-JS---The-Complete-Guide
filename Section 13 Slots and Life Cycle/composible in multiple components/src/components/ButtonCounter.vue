<template>
  <button @click="increment">++</button>
  <span>Count: {{ count }}</span>
  <button @click="decrement">--</button>
  
</template>
<script setup>
  import { useCounter } from '../composibles/useCounter';
const { count, increment, decrement } = useCounter();
</script>
