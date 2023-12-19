<template>
  <li class="cart__order">
    <h3>{{ item.product.title }}</h3>
    <b>{{ (item.amount * item.product.price) | numberFormat }}</b>
    <span>Артикул: {{ item.product.id }}</span>
  </li>
</template>

<script>
  import numberFormat from "@/helpers/numberFormat";
  import { mapGetters } from 'vuex';

  export default {
    props: ['item'],

    filters: {numberFormat},
    computed: {

      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'})
    }
  }

</script>