<template>
  <div class="m-2 d-inline-block">
    <div class="bg-info rounded p-2">
      <div class="row">
        <div class="col-6">
          <p>Name : {{ name }}</p>
          <p>Email : {{ email }}</p>
          <p>Phone : {{ phone }}</p>
        </div>
        <div class="col-3">
          <button @click="toggleFavorite" :class="isFavorite ? 'btn btn-warning' : 'btn btn-success'">
                {{ isFavorite ? 'Remove From' : 'Add To' }} Favorite
          </button>
        </div>
      </div>
    </div>
    <span class="small text-end mb-0 mt-1 float-end" v-if="ownerName != ''">
      This contact info belongs to {{ ownerName }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  phone: String,
  isFavorite: Boolean,
  ownerName: String,
  email: {
    type: String,
    required: true,
    default: "N/A",
  },
});

const emit = defineEmits(['update-favorite']);
function toggleFavorite() {
  emit('update-favorite',[props.isFavorite,props.name]);
}
</script>
