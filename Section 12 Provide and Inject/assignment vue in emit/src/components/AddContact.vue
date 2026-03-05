<template>
        <div class="border rounded p-2">
                <div class="text-center text-white">Add Contact</div>
                <form @submit.prevent="addContact">
                        <div class="row">
                                <div class="col-4">
                                        <input type="text" class="form-control" 
                                               v-model="contact.name" placeholder="Enter Name"/>
                                </div>

                                 <div class="col-4">
                                        <input type="text" class="form-control" 
                                               v-model="contact.phone" placeholder="Enter Phone"/>
                                </div>

                                 <div class="col-4">
                                        <input type="text" class="form-control" 
                                               v-model="contact.email" placeholder="Enter Email"/>
                                </div>
                                <div class="col-12 p-2">
                                        <button type="submit" class="btn btn-secondary w-100">Submit</button>
                                </div>
                        
                              

                        </div>
                        
                </form>

        </div>


</template>

<script setup>
import { reactive,defineEmits } from "vue";
const emit = defineEmits(['add-contact']);
const contact = reactive({
  name: "",
  phone: "",
  email: "",
});
function addContact() 
{
  emit('add-contact', 
  {name: contact.name,
   phone: contact.phone,
   email: contact.email

  });
  console.log(contact);
  contact.name = "";
  contact.phone = "";
  contact.email = "";
}
</script>
