<template>
        <div class="bg-info rounded p-2 m-2  d-inline-block">
                <h3>Contact Us</h3>
                <p>Name : {{name }}</p>
                <p>Email : {{ email }}</p>
                <p>Phone : {{ phone }}</p>
                <p class="float-end small" v-if="ownerName != ''">
                 This contact info belongs to{{ ownerName }}</p>
        </div>
</template>

<script setup>
        import { defineProps } from 'vue';
        const email = 'vue@vue.org';
        const props = defineProps(["name", "phone", "ownerName"]);
</script>