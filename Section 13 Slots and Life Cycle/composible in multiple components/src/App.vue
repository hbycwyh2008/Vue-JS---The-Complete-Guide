<template>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>Count: {{ count }}</p>
  <br>
  <ButtonCounter></ButtonCounter>
</template>
<script setup>
import { useCounter } from './composibles/useCounter';
import ButtonCounter from './components/ButtonCounter.vue';
const { count, increment, decrement } = useCounter();
</script>
