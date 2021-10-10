<template>
  
    <main class="servicios-cont section-container">
      <h2 class="title">
        <span class="title__span">s</span>
        <span class="title__span">e</span>
        <span class="title__span">r</span>
        <span class="title__span">v</span>
        <span class="title__span">i</span>
        <span class="title__span">c</span>
        <span class="title__span">i</span>
        <span class="title__span">o</span>
        <span class="title__span">s</span>
      </h2>

      <div class="card__container">
        <div class="card">
          <img class="card__img" src="../assets/conservacion.jpeg" />
          <h4 class="card__h4">Conservacion <i class="earlybirds icon"></i></h4>
          <p class="card__p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            excepturi unde?
          </p>
          <a class="card__link" href="/servicios">Leer más</a>
        </div>

        <div class="card">
          <img class="card__img" src="../assets/Educación.jpg" />
          <h4 class="card__h4">Educación <i class="book icon"></i></h4>
          <p class="card__p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            excepturi unde?
          </p>
          <a class="card__link" href="/servicios">Leer más</a>
        </div>

        <div class="card">
          <img class="card__img" src="../assets/Ecoturismo.jpg" />
          <h4 class="card__h4">
            Ecoturismo <i class="camera retro icon"></i>
          </h4>
          <p class="card__p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
            excepturi unde?
          </p>
          <a class="card__link" href="/servicios">Leer más</a>
        </div>
      </div>
    </main>
    <!-- FIN SERVICIOS-->

    <!--VIAJES-->
    <section class="viajes section-container" id="book">
      <h2 class="title">
        <span class="title__span">r</span>
        <span class="title__span">e</span>
        <span class="title__span">s</span>
        <span class="title__span">e</span>
        <span class="title__span">r</span>
        <span class="title__span">v</span>
         <span class="title__span">a</span>
          <span class="title__span">s</span>
      </h2>

      <div class="row">
        <div class="row__image">
          <img class="row__img" src="../assets/ruta5.jpg" alt="" />
        </div>

        <form class="form" action="">
          <div class="form__inputBox">
            <h3 class="form__h3">Destino</h3>
            <input class="form__input" type="text" placeholder="Lugar" />
          </div>
          <div class="form__inputBox">
            <h3 class="form__h3">Personas</h3>
            <input
              class="form__input"
              type="number"
              placeholder="Numero de personas"
            />
          </div>
          <div class="form__inputBox">
            <h3 class="form__h3">Ida</h3>
            <input class="form__input" type="date" />
          </div>
          <div class="form__inputBox">
            <h3 class="form__h3">Vuelta</h3>
            <input class="form__input" type="date" />
          </div>
          <input type="submit" class="btn" value="Reservar" />
        </form>
      </div>
    </section>

    <!--INICIO RUTAS Y TRAVESIAS-->
    <section class="travesias section-container">
      <div class="travesias__div">
        <h2 class="title">
          <span class="title__span">R</span>
          <span class="title__span">U</span>
          <span class="title__span">T</span>
          <span class="title__span">A</span>
          <span class="title__span">S</span>
         
        </h2>
        <div class="travesias__items">
          <div class="destinos">
            <div>
              <h3> Puracé</h3>
            <a href="/rutas-y-destinos">
            <img
              class="destinos__img "
              src="../assets/ruta8.jpg"
              alt=""
            />
            </a>
            </div>
            <div>
              <h3>Cueva de los Guacharos</h3>
            <a href="/rutas-y-destinos">
            <img class="destinos__img" src="../assets/repo6.jpeg" alt="" />
            </a>
            </div>

            <div>
              <h3>Bordones</h3>
            <a href="/rutas-y-destinos">
            <img
              class="destinos__img"
              src="../assets/ruta7.jpg"
              alt=""
            />
            </a>
            </div>

            <div>
              <h3>Caquetá</h3>
            <a href="/rutas-y-destinos">
            <img class="destinos__img" src="../assets/ruta1.jpeg" alt="" /> 
            </a>
            </div>

            <div>
              <h3>ídolos</h3>
            <a href="/rutas-y-destinos">
            <img class="destinos__img" src="../assets/ruta10.jpeg" alt="" />
            </a>
            </div>

            <div>
              <h3>Putumayo</h3>
            <a href="/rutas-y-destinos">
            <img class="destinos__img" src="../assets/ruta11.jpeg" alt="" />
            </a>
            </div>
          </div>
          <div class="tour">
            <div class="tour__div">
              <h3 class="tour__titulo">
                ¿Quieres vivir una experiencia inolvidable?
              </h3>
              <p class="tour__cotiza">Encuentra las próximas travesías...</p>

              <p class="tour__cotiza">Cotice su tour</p>
              <a class="tour__btn" href="/servicios">leer más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
name: 'Inicio',
components: {
    
  },
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
:root {
  --theme-color: white;
  --primary-color: #124f88;
  --secundary-color: #002431;
  --text-color-inverse: white;
  --text-color: black;
  --navbar-shallow-color: #e5e5e5;
  --menu-mobile-background-color: #3a4460f5;
  --orange: #ffa500;
}
* {
  box-sizing: border-box;
}

*::selection {
  background: var(--orange);
  color: var(--theme-color);
}

body {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  outline: none;
}

.imagen-tamaño {
  width: 300px;
  height: 300px;
  border-radius: 150px;
}

h3{
  text-align:center;
}


/*INICIO SECCION SERVICIOS*/

.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
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

.card__container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100rem;
  flex-wrap: wrap;
  align-items: center;
}

.card {
  width: 20rem;
  height: 26rem;
  border-radius: 0.5rem;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
}

.card__img {
  width: 100%;
  height: 14rem;
}

.card__h4 {
  font-weight: 600;
  font-size: 1rem;
}

.card__p {
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 300;
}

.card__link {
  font-weight: 500;
  text-decoration: none;
  color: var(--orange);
}

@media (max-width: 750px) {
  .title {
    padding: 2rem 0;
  }
  .title__span {
    font-size: 1.3rem;
    padding: 0.5rem 0.3rem;
  }
}

/*FIN SERVIVIOS*/

/*VIAJES*/

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: 90%;
  justify-content: center;
}

.row__image {
  flex: 1 1 20rem;
}

.row__img {
  width: 100%;
}

.form {
  flex: 1 1 20rem;
  padding: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.form__inputBox {
  padding: 0.5rem;
}

.form__input {
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;
  text-transform: none;
}

.form__h3 {
  font-size: 1.3rem;
  padding: 0.5rem 0;
  color: #666;
  margin: 0;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: var(--orange);
  color: var(--text-color-inverse);
  padding: 0.4rem 1rem;
  border: 0.1rem solid var(--orange);
  cursor: pointer;
  font-size: 1rem;
  border-radius: 1.25rem;
}

.btn:hover {
  background: rgba(255, 165, 0, 0.2);
  color: var(--orange);
}

/*FIN VIAJES*/

/*INCIO TRAVESIAS*/

.travesias {
  background: rgba(255, 166, 0, 0.062);
}

.travesias__div {
  display: flex;
  flex-direction: column;
  max-width: 90%;
}
.travesias__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.destinos {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  gap: 0.3rem;
}
.destinos__img {
  width: 15rem;
  cursor: pointer;
}


.destinos__img:hover{
  
  transition: 0.7s;
  transform: scale(1.3);

}

.tour {
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
}
.tour__div {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.06rem solid #00000062;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  height: 100%;
}

.tour__titulo {
  font-size: 1.2em;
}

.tour__btn {
  margin-top: 1rem;
  width: 7rem;
  padding: 0.2rem;
  color: var(--theme-color);
  cursor: pointer;
  border-radius: 0.6rem;
  background-color: var(--orange);
  border: 0.1rem solid var(--orange);
}

.tour__btn:hover {
  background: rgba(255, 165, 0, 0.2);
  color: var(--orange);
}

@media (max-width: 950px) {
  .travesias__items {
    align-items: center;
    flex-direction: column;
  }

  .tour {
    width: 15rem;
    margin-top: 3rem;
  }
  .destinos {
    width: 100%;
  }
}

.destinos__img {
    max-width: 80%;
    width: 200px;
  height: 200px;
  }

@media (max-width: 780px) {
  .tour {
    width: 100%;
  }
  .destinos__img {
    width: 100%;
   
  }
}

</style>