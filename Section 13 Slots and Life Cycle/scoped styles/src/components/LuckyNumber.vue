<template>
        <div class="col-6 bg-white text-center m-2 p-4">
                <button class="btn btn-danger text-black" 
                @click="generateLuckyNumber()">Generate Lucky Number</button>
                <span v-if="luckyNumber===0" > Generate lucky number <br/>
                        (Range: 1- 100)
                </span>
                <span v-else> Your lucky number is: {{luckyNumber}} <br/>
                        Generate another lucky number
                </span>      
        </div>

</template>
<script setup>
import {ref} from 'vue'
let luckyNumber = ref(0);

function generateLuckyNumber() {
	luckyNumber.value = Math.floor(Math.random() * 100);
}
</script>
