<template>
  <footer class="section-footer">
    <div class="pie">
      <div class="pie__logo">
        <router-link class="pie__img" to="/">
          <img class="pie__img" src="../assets/logo_n.png" alt="logo" />
        </router-link>

        <p>Isnos Birding.</p>
      </div>
      <nav class="pie__nav">
        <ul class="pie__enlaces">
          <li class="pie__li">
            <router-link class="enlaces" to="/ayudar">
              ¿Cómo Ayudar?
            </router-link>
          </li>
          <li class="pie__li">
            <router-link class="enlaces" to="/login">
              Únete al equipo
            </router-link>
          </li>
        </ul>
      </nav>
      <nav class="pie__nav">
        <ul class="pie__enlaces">
          <li class="pie__li">
            <router-link class="enlaces" to="/ayudar"> Donaciones </router-link>
          </li>
          <li class="pie__li">
            <a class="enlaces" href="">Tours</a>
          </li>
          <li class="pie__li">
            <a class="enlaces" href="">Términos y condiciones</a>
          </li>
        </ul>
      </nav>

      <div class="pie__social">
        <div class="pie__contacto">
          <h3 class="contacto">Contáctanos</h3>
        </div>
        <div class="pie__redes">
          <a class="enlace-redes" href="https://www.facebook.com/IsnosBirding">
            <i class="facebook square icon"> </i>
          </a>
          <a
            class="enlace-redes"
            href="https://www.instagram.com/isnosbirding/"
          >
            <i class="instagram icon"></i>
          </a>
          <i class="youtube icon"></i>
          <i class="twitter icon"></i>
        </div>
      </div>
    </div>
    <div class="final">
      <p class="final__texto">
        &copy; 2021 Birding Isnos. All rights reserved - Design & Development
        by: Grupo63 MinTic UTP - SubGrupo2
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.section-footer {
  background: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
}

.pie {
  padding: 60px 0;
  display: flex;
  justify-content: center;
}
.pie__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
  border-right: 1px solid #707070;
  color: #b2b2b2;
  font-size: 12px;
}

.pie__img {
  width: 50px;
  height: 50px;
}
.pie__nav {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
}
.pie__enlaces {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.pie__li {
  list-style-type: none;
}
.enlaces {
  color: #b3b3b3;
  text-decoration: none;
  font-size: 11px;
  line-height: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.enlaces:hover {
  text-decoration: underline;
  transition: 0.7s;
}

.pie__social {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #707070;
  flex-direction: column;
  color: #b3b3b3;
}
.pie__contacto {
  display: flex;
  flex-direction: column;
}

.contacto {
  font-size: 12px;
  line-height: 25px;
  text-transform: uppercase;
}
.icon {
  width: 100%;
  margin-right: 15px;
  cursor: pointer;
}
.icon:hover {
  transition: 0.7s;
  transform: scale(1.3);
}

a.enlace-redes {
  text-decoration: none;
  color: rgb(248, 247, 247);
}

.final {
  background-color: #b3b3b3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.final__texto {
  font-size: 10px;
}
</style>