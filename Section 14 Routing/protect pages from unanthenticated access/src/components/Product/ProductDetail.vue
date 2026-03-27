<template>
  <div>
    <h1>Product Detail</h1>
    <div v-if="resolvedProductId">
      <p>Product ID: {{ resolvedProductId }}</p>
      <p>Category ID: {{ resolvedCategoryId }}</p>
    </div>
    <div v-else>
      <p>No product Id found</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  productId?: string
  categoryId?: string
}>()

const route = useRoute()
const resolvedProductId = computed(
  () => props.productId ?? (route.params.productId as string | undefined),
)
const resolvedCategoryId = computed(
  () => props.categoryId ?? (route.params.categoryId as string | undefined),
)
</script>
