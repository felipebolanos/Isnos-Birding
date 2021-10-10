<template>
  <div class="basic-layout">
    <Menu />
    <div class="ui container">
      <slot />
    </div>
    <Cart />
  <Footer />
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Cart from '../components/Cart/Cart.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'BasicLayouts',

  components: {
    Menu,
    Cart,
    Footer,
  },
};
</script>

<style></style>
