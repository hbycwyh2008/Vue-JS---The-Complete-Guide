<template>
        <div >
                <h2>Contact Us</h2>
                <p>Name : {{ name }}</p>
                <p>Email : {{ email }}.</p>
                <p>Phone : {{ phone }}</p>
                <p v-if="ownername != ''">Owner Name : {{ ownername }}</p>
        </div>
</template>

<script setup>
        import { defineProps } from 'vue'
        const { name, phone, ownername, email } = defineProps({
                name: { type: String, required: true },
                phone: { type: String },
                ownername: { type: String },
                email: { type: String, default: 'n/a' },
        })
</script>