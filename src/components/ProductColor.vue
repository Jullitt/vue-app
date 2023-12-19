<template>
         <li class="colors__item">
         <label class="colors__label">
           <input class="colors__radio sr-only" type="radio" :value="color.id" v-model="currentColor">
           <span class="colors__value" :style="{backgroundColor: color.code}">
           </span>
         </label>
       </li>

</template>

<script>
  export default {
    data(){
      return {
        currentColor: this.product.colors[0].id
      };
    },
    props: ['color', 'product'],
  }

</script>