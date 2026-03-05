<template>
  <div class="container bg-black text pt-3">

    <div class="row align-items-center">
      <div class="col-12 text-white">
        
        Contact Owner Name : <input v-model="contactsOwner" />
        
        <AddContact @add-contact="onAddContact"/>
        <div class="row">
          <div v-for="contact in contacts" :key="contact.name">
            <Contact
              :name="contact.name"
              :phone="contact.phone"
              :ownerName="contactsOwner"
              :email="contact.email"
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