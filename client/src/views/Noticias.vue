<template>
    <BasicLayouts>
   
     <main>
       <h1 class="title">
         <span class="title__span">N</span>
        <span class="title__span">o</span>
        <span class="title__span">t</span>
        <span class="title__span">i</span>
        <span class="title__span">c</span>
        <span class="title__span">i</span>
        <span class="title__span">a</span>
        <span class="title__span">s</span>
               </h1>
      <div class="contenedor-noticias con-sidebar">
        
        <article>
          <h2>Titular noticia uno</h2>
          <img src="../assets/noticia2.jpg" alt="colibrí">
          <h3>Birding/Nature/Colombia/Birds</h3>
          <a class="noticias__link" href="#">Enero 2021</a>


          <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend
            dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus. Praesent laoreet tortor vel
            mauris suscipit convallis. Duis
            interdum venenatis metus, ut condimentum tortor fringilla eu. Curabitur mi lorem, pellentesque sed feugiat
            vitae, commodo id leo. Mauris nec dui consectetur, ullamcorper eros vel, volutpat nulla. Mauris mattis
            dignissim laoreet. In at
            tellus et quam iaculis commodo. Aliquam cursus turpis sed elit consequat placerat sit amet in ante. Nulla
            libero ex, imperdiet non faucibus a, sagittis sit amet ligula. Sed blandit ante est, nec aliquet quam
            pulvinar sed. Sed varius, lacus
            in facilisis ultrices, urna turpis ullamcorper nibh, sit amet interdum nisi nisi eget arcu. Vestibulum
            bibendum velit justo, eget cursus ipsum pharetra in.</p>

          <p>Aliquam urna enim, ullamcorper vel urna id, tincidunt lobortis tortor. Donec bibendum condimentum purus, at
            rhoncus sapien. Phasellus ac ipsum metus. Aliquam arcu erat, posuere ac dolor vel, imperdiet tempor enim.
            Fusce tristique consequat
            convallis. Sed auctor fermentum elit. Vestibulum mi libero, tincidunt quis auctor id, faucibus nec augue.
            Pellentesque ut vestibulum augue. Aenean in lorem tincidunt, sodales arcu eget, bibendum nisi. Proin vitae
            magna eu leo vulputate
            congue consectetur sed felis. Ut tempus neque sit amet tortor aliquet hendrerit. Nulla feugiat metus quis
            libero convallis fermentum. Morbi eleifend id tellus quis iaculis. Sed vitae turpis eget eros faucibus
            luctus at vitae lacus. Nunc
            blandit arcu arcu, non condimentum dui posuere vitae. Nulla facilisi.</p>

          <p>Aliquam erat volutpat. Ut dapibus tincidunt odio, a pulvinar dolor dapibus varius. Quisque fringilla
            faucibus sapien nec blandit. Cras at lectus tincidunt mi cursus dapibus in a nunc. Suspendisse vitae velit
            orci. Suspendisse nisi sapien,
            vehicula eget vehicula in, lacinia vitae tellus. Nulla facilisi. Sed consectetur consectetur sapien. Duis
            pretium blandit massa, mattis maximus nunc finibus in. Vestibulum ultrices ex lorem, sed ullamcorper est
            rhoncus sit amet. Pellentesque
            placerat ex sed nisl posuere, a porta augue finibus. Sed auctor mauris nec lacus interdum, nec consequat est
            pharetra. Praesent sit amet rhoncus diam. Nullam risus sapien, euismod vitae condimentum ac, consequat quis
            dui. Donec varius
            condimentum orci ac malesuada. Nulla bibendum quam viverra, bibendum ex vel, suscipit lacus.</p>

          <div class="compartir__redes">
            <i class="facebook square icon"></i>
            <i class="instagram icon"></i>
            <i class="youtube icon"></i>
            <i class="twitter icon"></i>
          </div>

        </article>

        <aside>
          <h3>Titular noticia dos</h3>
          <img src="../assets/noticia3.jpg" alt="colibrí">
          <h4>Birding/Nature/Colombia/Birds</h4>
          <a class="noticias__link" href="#">Enero 2021</a>
          <p>Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
          <a href="#" class="stretched-link noticias__link ">Continúa leyendo...</a>


          <div class="otras-entradas">
            <h3>Otras entradas</h3>
            <ul class="list-unstyled mb-0 ">
              <li><a class="noticias__link" href="#">Marzo 2021</a ></li>
              <li><a class="noticias__link" href="#">Febrero 2021</a ></li>
              <li><a class="noticias__link" href="#">Enero 2021</a ></li>
              <li><a class="noticias__link" href="#">Diciembre 2020</a ></li>
              <li><a class="noticias__link" href="#">Noviembre 2020</a></li>

            </ul>
          </div>


        </aside>
      </div>

    </main>

</BasicLayouts>
</template>

<script>

import BasicLayouts from '../layouts/BasicLayouts.vue'
export default {
    name:'Noticias',
    components: {
      BasicLayouts,
    
  },
    


};



</script>

<style>

/*INCIO NOTICIAS*/

*,
*:before,
*:after {
  box-sizing: inherit;
}

img {
  max-width: 90%;
  border-radius: 4px;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

p {
  font-size: 1.5rem;
  text-align: justify;
}

.icon {
  width: 700px;
  margin-right: 20px;
  cursor: pointer;
}
.icon:hover {
  transition: 0.7s;
  transform: scale(1.7);
}

.title {
  text-align: center;
  padding: 2rem 0;
}

.title__span {
  font-size: 2.2rem;
  background: rgba(255, 165, 0, 0.2);
  color: var(--orange);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  text-transform: uppercase;
}
.space {
  background: none;
}

.contenedor-noticias {
  max-width: 980px;
  width: 95%;
  margin: 0 auto;
}

.otras-entradas {
  font-size: 1.3rem;
  margin-top: 10rem;
}

@media (min-width: 768px) {
  .con-sidebar {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 4rem;
    grid-auto-flow: column; /*se le indica que posicione automaticamente en columnas donde vea espacio*/
  }

  aside {
    grid-column: 2 / 3; /*acomodado a la derecha lo más pequeño*/
    margin-top: 4rem;
  }

  aside p {
    font-size: 1.2rem;
  }
}

.noticias__link {
  color: var(--orange);
  font-size: 1rem;
}

.compartir__redes {
  display: flex;
  flex: 1 1 auto;
  justify-content: end;
  align-items: flex-end;
  border-left: 1px solid #707070;
  flex-direction: row;
  color: orangered;
}

/*FIN NOTICIAS*/




</style>