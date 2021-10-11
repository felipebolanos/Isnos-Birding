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

<div class="header__fondo">
      <h1 class="header__titulo">¡Disfruta de la naturaleza</h1>
      <h2 class="header__titulo header__titulo--h2">con nosotros!</h2>

      <svg
        preserveAspectRatio="none"
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,224L80,224C160,224,320,224,480,202.7C640,181,800,139,960,133.3C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
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
   box-shadow: 0 4px 5px #e5e5e5;
  background-color: #fff;
  width: 100%;
  z-index: 1;
  background-color: #fff;

  .item {
    color: #000;
    &:hover {
      color: #ffa500;
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

.header__fondo {
  background: linear-gradient(
      to right,
      hsla(13, 97%, 55%, 0.058),
      hsla(40, 92%, 58%, 0.058)
    ),
    url(../assets/Portada.jpeg);
  background-position: center;
  background-size: cover;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  text-align: center;
  height: 400px;
}

.header__titulo {
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  font-weight: 400;
  margin: 0 0 0 150px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.192);
}

.header__titulo--h2 {
  font-size: 2rem;
  color: #fff;
  margin: 0 0 0 500px;
}

.wave {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
  top: 0.1rem;
  position: relative;
}

@media (max-width: 950px) {
  .header__fondo {
    background-size: cover;
    background-position: 30%;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  }

  .header__titulo {
    text-align: center;
    margin: 0 0 0 20px;
    justify-content: center;
    align-items: center;
  }
  .header__titulo--h2 {
    margin: 0 0 50px 30px;
  }
}

/*FIN HEADER*/
</style>
