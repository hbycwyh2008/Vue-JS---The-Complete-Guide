<template>
  <div class="container justify-content-center align-items-center">
    <div class="align-items-center">
      <h2 class="mb-3">{{ msg }}</h2>
      <ContactUs name="John" phone="123-456-7890" ownerName="vue" />
    </div>
  </div>
</template>


<script setup>
import ContactUs from './components/Contact.vue';

const msg = 'Hello Vue'
</script>