<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="" to="/">
          <img class="ui small image" src="../assets/logo.png" alt="Ecomerce" />
        </router-link>
        <template v-for="category in categories" :key="category.id">
          <router-link class="item" :to="category.slug">
            {{ category.Title }}
          </router-link>
        </template>
      </div>
      <!-- Iniciar sesion -->
      <div class="right menu">
        <template v-if="!token">
          <router-link class="nav-link item" to="/nosotros">
            Nosotros
          </router-link>
          <router-link class="nav-link item" to="/servicios">
            Servicios
          </router-link>
          <router-link class="nav-link item" to="/noticias">
            Noticias
          </router-link>
          <router-link class="nav-link item" to="/ayudar">
            ¿Cómo ayudar?
          </router-link>
          <router-link class="item" to="/login"> Iniciar sesión </router-link>
        </template>

        <!-- 
       <a class="ui item" href="/nosotros">Nosotros</a>
       <a class="ui item" href="/servicios">Servicios</a>
        <a class="ui item" href="/noticias">Noticias</a>
            <a class="ui item" href="/ayudar">¿Cómo ayudar?</a> -->

        <!-- <router-link class="item" to="/login" v-if="!token">
          Iniciar sesión
        </router-link> -->

        <template v-if="token">
          <!-- <router-link class="item" to="/orders">Reservas</router-link> -->
          <router-link class="nav-link item" to="/nosotros">
            Nosotros
          </router-link>
          <router-link class="nav-link item" to="/Servicios">
            Servicios
          </router-link>
          <router-link class="nav-link item" to="/Noticias">
            Noticias
          </router-link>
          <router-link class="nav-link item" to="/ayudar">
            ¿Cómo ayudar?
          </router-link>
          <span class="ui item cart">
            <i class="earlybirds icon" @click="openCart"></i>
          </span>
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getTokenApi, deleteTokenApi } from "../api/token";
import { getCategoriesApi } from "../api/category";

export default {
  name: "Menu",

  setup() {
    let categories = ref(null);
    const token = getTokenApi();
    const store = useStore();

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });

    const logout = () => {
      console.log("Cerrar sesión");
      deleteTokenApi();
      location.replace("/");
    };

    const openCart = () => {
      store.commit("setShowCart", true);
    };

    return {
      token,
      logout,
      categories,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  //background-color: #f5540a;
  background-image: url(../assets/Portada.jpeg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  height: 300px;
  width: 100%;
  position: relative;

  .item {
    margin-top: 2rem;
    color: #161414;
    &:hover {
      color: #f1eceb;
    }
  }

  .menu.left {
    width: 50%;
    .ui.image {
      width: 120px;
    }
  }

  .menu.right {
    width: 50%;
    justify-content: flex-end;

    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
