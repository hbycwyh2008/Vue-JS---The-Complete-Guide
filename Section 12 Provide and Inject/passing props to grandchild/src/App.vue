<template>
  <div class="container bg-black text pt-3" :style="{height: '100vh'}">
    <h1 class="text-center text-success">ContactOpedia</h1>

    <div class="row align-items-center">
      <div class="row text-white p-2 mb-2">
        <div class="col-6">
          Owner Name: <input v-model="ownerName">
        </div>
        <div class="col-6">
          Max Lucky Number: <input  v-model="maxNumber">
        </div>
      </div>
      <div class="col-12 text-white">       
        <AddContact @add-contact="onAddContact"/>
        <div class="row">
          <div v-for="contact in contacts" :key="contact.name">
            <Contact
              :name="contact.name"
              :phone="contact.phone"
              :ownerName="contactsOwner"
              :email="contact.email"
              :maxLuckyNumber="maxNumber"
              :isFavorite="contact.isFavorite"
              @update-favorite="contact.isFavorite = !contact.isFavorite"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import Contact from './components/Contact.vue';
import AddContact from './components/AddContact.vue';


const maxNumber = ref(100);
const msg = 'Hello Vue';
const contactsOwner = ref("Vue");
const contacts = reactive([
  {
    name: 'John',
    phone: '123-456-7890',
    isFavorite: false
  },
  {
    name: 'Jane',
    phone: '987-654-3210',
    isFavorite: true
  },
  {
    name: 'Bob',
    phone: '555-555-5555',
    isFavorite: false
  }
]);

function onAddContact(contact){
  contact.ownerName = contactsOwner.value;
  contact.isFavorite = false;
  contacts.push(contact);
}
</script>