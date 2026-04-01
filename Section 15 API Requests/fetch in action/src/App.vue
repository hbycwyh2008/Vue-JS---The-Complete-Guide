<template>
  <div>Hello,World!</div>
  <div v-for="user in userObj.users" :key="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'

const userObj = reactive({
  users: [],
})

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log(response)
  userObj.users = await response.json()
})
</script>
