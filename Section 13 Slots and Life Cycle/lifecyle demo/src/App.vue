<template>
  <h1>{{ message }}</h1>
  <button @click="showMessage">Show Message</button>
  <br/>
  <h1>{{ count }}</h1>
  <button @click="count++">Count: {{ count }}</button>
  <button v-if="count==1"></button>
</template>
<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import {onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, ref} from 'vue';
const message = ref('Hello Vue');
const showMessage = () => {
  message.value = 'Hello Vue from function!';
};
onBeforeMount(() => {
  console.log('OnBeforeMount: app.vue');
});
const count = ref(0);
onMounted(() => {
  console.log('OnMounted: app.vue');
});
onBeforeUnmount(() => {
  console.log('OnBeforeUnmount: app.vue');
});
onUnmounted(() => {
  console.log('OnUnmounted: app.vue');
}); 


</script>
