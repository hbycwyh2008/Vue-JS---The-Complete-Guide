<template>
        <div class="float-end">
                <button class="btn btn-outline-danger" 
                @click="generateLuckyNumber()">Generate Lucky Number</button>
                <span v-if="luckyNumber===0" > Generate lucky number <br/>
                        Range: 1- {{props.maxNumber-1}}
                </span>
                <span v-else> Your lucky number is: {{luckyNumber}} <br/>
                        Generate another lucky number
                </span>      
        </div>

</template>
<script setup>
import {ref} from 'vue'
let luckyNumber = ref(0);
const props = defineProps({
        maxNumber:{type: Number, default: 10},
});
function generateLuckyNumber() {
        luckyNumber.value = Math.floor(Math.random() * props.maxNumber);
}
</script>