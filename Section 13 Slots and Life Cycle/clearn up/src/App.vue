<template>
  <luckyNumberParentComponent>
    <template v-slot:default>
      <p class="pt-2">We have two versions for picking lucky numbers!</p>
      <hr/>

    </template>
    
    <template v-slot:moreInfo>
      <p>Click the button to google between the two versions</p>
    </template>
    
    
    <template v-slot:learnSlot>
      <button @click="showMessage">What will we learn?</button>
      <h4 class="text-success">{{ message }}</h4>

    </template>
    
  </luckyNumberParentComponent>

</template>
<script setup>
import LuckyNumberParentComponent from './components/LuckyNumberParentComponent.vue';
import { ref } from 'vue';

const message = ref('');

function showMessage() {
  message.value = 'We will learn about Vue.js slots!';
}
</script>

