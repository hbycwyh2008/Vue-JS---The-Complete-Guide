<template>
    <div class="container bg-white text pt-3" :style="{height: '100vh'}">
      <h1 class="text-center text-success">Learn Slots</h1>
  
      <div class="row align-items-center">
        <slot></slot>
        <button class="btn btn-primary text-black m-2 col-6" @click="toggleComponent">
          Toggle Components
        </button>
        <slot name="moreInfo"></slot>
        <br/>
          <button class="btn btn-primary text-black m-2 col-6" @click="showLuckyNumber">
            Lucky Number1
          </button>
          <button class="btn btn-primary text-black m-2 col-6" @click="showLuckyNumberV2">
            Lucky Number2
          </button>
          <slot name="learnSlot"></slot>
        <br/>
        <keep-alive :include="['LuckyNumberV2', 'LuckyNumber']">
          <component :is="currentComponent" class="border" />
        </keep-alive>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, reactive,provide,compile,computed } from 'vue';
import LuckyNumber from './LuckyNumber.vue';
import LuckyNumberV2 from './LuckyNumberV2.vue';
  
  const newVersion = ref(true);
  const currentComponent = computed(() => {
    return newVersion.value ? LuckyNumberV2 : LuckyNumber;
  });
  
    // Method to toggle component
    function toggleComponent() {
      newVersion.value = !newVersion.value;
    }
  
    // Show LuckyNumber component
    function showLuckyNumber() {
      newVersion.value = false;
    }
  
    // Show LuckyNumberV2 component
    function showLuckyNumberV2() {
      newVersion.value = true;
    }
  
  
  
  
  
  </script>


<style scoped>
    h1 {
        background-color: #c90a8c;
    }
</style>