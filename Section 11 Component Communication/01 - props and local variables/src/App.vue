<template>
  <div class ="rounded  d-inline-block bg-info p-2 m-2 ">
    <h1>{{ msg }}</h1>
    <Contact name=" Jhson" phone = "123-456-7890" ownername ="abs"/>
    <ButtonCounter />
    
  </div>
</template>

<script setup>
  import { ref } from 'vue';     
  import ButtonCounter from './components/ButtonCounter.vue'
  import Contact from './components/Contact.vue'
  const msg = 'Hello Vue!'
</script>