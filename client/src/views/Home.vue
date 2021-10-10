<template>
  <BasicLayouts>
    
    <div>
      <Inicio />
    </div>
    <!-- <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div> -->

    

  </BasicLayouts>

 
</template>

<script>
import {ref, onMounted} from  "vue";
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { getProducts} from "../api/product";
import  Product from "../components/Product.vue";
import Inicio from './Inicio.vue'

export default {
  name: 'Home',
  components: {
    BasicLayouts,
    Product,
    Inicio,
  },

  // setup(){
  //   let products= ref(null);

  //   onMounted(async() => {
  //     const response= await getProducts(20);
  //     console.log(response);
  //     products.value = response;
  //   });

  //   return{
  //     products,
  //   };

  // },

};
</script>

