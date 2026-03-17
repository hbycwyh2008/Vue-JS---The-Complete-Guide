<template>
        <div class="col-6 bg-white text-center m-2 p-4">
                <h4 class="text-success">Random Number Generator</h4>
                <hr/>
                Max Range:
                <input class= "rounded" type="number" v-model.number="maxNumber">
                <br/>
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
const maxNumber = ref(100);
function generateLuckyNumber() {
	luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
}
</script>
