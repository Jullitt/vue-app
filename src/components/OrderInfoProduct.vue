<template>
  <li class="cart__order">
    <h3>{{ product.product.title }}</h3>
    <b>{{ price | numberFormat }} ₽</b>
    <span>Артикул: {{ product.product.id }}</span>
  </li>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";

  export default {
    data(){
      return {
        price: this.product.price * this.product.quantity,
      }
    },
    filters: {numberFormat},
    props: ['product']
  }
</script>