<template>
  <div class="wrapper">
    <div id="formContent">
      <!-- Tabs Titles -->
      <div class="header">
        <div class="container">
          <div class="iconos">
            <div class="flecha" @click="regresar">
              <i class="bx bx-chevron-left"></i>
            </div>
            <div class="titulo">
              <h2>Editar Inmueble</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="Imagen">
        <i class="bx bx-image-add bx-lg"></i>
      </div>
      <div class="file">
        <input @change="clickImagen($event)" type="file" accept="image/*" />
      </div>

      <!-- Login Form -->
      <div class="formulario">
        <div class="inputs">
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            v-model="nombre"
          />
          <input
            type="text"
            id="ciudad"
            placeholder="Ciudad/Alcaldia"
            v-model="ciudad"
          />
          <input
            type="text"
            id="colonia"
            placeholder="Colonia"
            v-model="colonia"
          />
          <input type="text" id="calle" placeholder="Calle" v-model="calle" />
          <!--   Radio Buttom    -->
          <div class="RecamarasOptions">
            <p>Recamaras</p>
            <div class="recamara">
              <input
                type="radio"
                value="1"
                v-model="recamaras"
                name="recamaras"
              />
              1
              <input
                type="radio"
                value="2"
                v-model="recamaras"
                name="recamaras"
              />
              2
              <input
                type="radio"
                value="3"
                v-model="recamaras"
                name="recamaras"
              />
              3
              <input
                type="radio"
                value="4"
                v-model="recamaras"
                name="recamaras"
              />
              4
              <input
                type="radio"
                value="5"
                v-model="recamaras"
                name="recamaras"
              />
              5
            </div>
          </div>
          <div class="BañosOptions">
            <p>Baños</p>
            <div class="baños">
              <input type="radio" value="1" v-model="baños" name="baños" />
              1
              <input type="radio" value="2" v-model="baños" name="baños" />
              2
              <input type="radio" value="3" v-model="baños" name="baños" />
              3
              <input type="radio" value="4" v-model="baños" name="baños" />
              4
              <input type="radio" value="5" v-model="baños" name="baños" />
              5
            </div>
          </div>
          <div class="EstacionamientoOptions">
            <p>Estacionamientos</p>
            <div class="estacionamiento">
              <input
                type="radio"
                value="1"
                v-model="estacionamientos"
                name="estacionamientos"
              />
              1
              <input
                type="radio"
                value="2"
                v-model="estacionamientos"
                name="estacionamientos"
              />
              2
              <input
                type="radio"
                value="3"
                v-model="estacionamientos"
                name="estacionamientos"
              />
              3
              <input
                type="radio"
                value="4"
                v-model="estacionamientos"
                name="estacionamientos"
              />
              4
              <input
                type="radio"
                value="5"
                v-model="estacionamientos"
                name="estacionamientos"
              />
              5
            </div>
          </div>
          <input
            type="text"
            id="metros"
            placeholder="Metros cuadrados"
            v-model="metros"
          />
          <input
            type="text"
            id="precio"
            placeholder="Precio"
            v-model="precio"
          />
          <div class="area">
            <textarea
              class="textarea is-info"
              placeholder="Descripcion"
              v-model="descripcion"
            ></textarea>
          </div>
          <div class="botones">
            <button class="button is-warning" @click="Actualizar">
              Actualizar
            </button>
            <button class="button is-danger" @click="Eliminar">Eliminar</button>
          </div>
        </div>
        <div class="notification is-danger" v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase.js";
import { db } from "@/firebase.js";
import ButtonApp from "@/components/ButtonApp.vue";
import { storage } from "@/firebase.js";
const ref = storage.ref();
export default {
  data() {
    return {
      nombre: "",
      ciudad: "",
      colonia: "",
      calle: "",
      recamaras: "",
      baños: "",
      estacionamientos: "",
      metros: "",
      precio: "",
      descripcion: "",
      error: "",
      imagenes: [],
      imagen: null,
      link: "",
      bimagen: false,
      email: "",
      busqueda: "",
      id: "",
    };
  },
  components: {
    ButtonApp,
  },
  name: "Inmueble",
  created() {
    this.$store.state.isView = true;
  },
  mounted() {
    this.nombre = this.$store.state.vista.titulo;
    this.ciudad = this.$store.state.vista.ciudad;
    this.colonia = this.$store.state.vista.colonia;
    this.calle = this.$store.state.vista.calle;
    this.recamaras = this.$store.state.vista.recamaras;
    this.baños = this.$store.state.vista.baños;
    this.estacionamientos = this.$store.state.vista.estacionamientos;
    this.metros = this.$store.state.vista.metros;
    this.precio = this.$store.state.vista.precio;
    this.descripcion = this.$store.state.vista.descripcion;
    this.busqueda = this.$store.state.vista.imgCard;
    this.link = this.busqueda;
    this.id = this.getID();
  },
  methods: {
    Agregar() {
      if (this.Validacion()) {
      } else {
        this.error = "Todo los campos son requeridos";
      }
    },
    getEmail() {
      const user = firebase.auth().currentUser;
      if (user !== null) {
        this.email = user.email;
        return this.email;
      }
    },
    Validacion() {
      if (
        this.nombre &&
        this.ciudad &&
        this.colonia &&
        this.calle &&
        this.recamaras &&
        this.baños &&
        this.estacionamientos &&
        this.metros &&
        this.precio &&
        this.descripcion
      ) {
        return true;
      } else {
        return false;
      }
    },
    limpiar() {
      (this.nombre = ""),
        (this.ciudad = ""),
        (this.colonia = ""),
        (this.calle = ""),
        (this.recamaras = ""),
        (this.baños = ""),
        (this.estacionamientos = ""),
        (this.metros = ""),
        (this.precio = ""),
        (this.descripcion = ""),
        (this.error = ""),
        (this.email = ""),
        (this.usuario = "");
      this.descripcion = "";
    },

    regresar() {
      this.$store.state.isView = false;
      this.$router.push("/mispublicaciones");
    },
    clickImagen(e) {
      this.imagen = e.target.files[0];
      this.subirImagen();
      this.link = this.getUrl();
    },
    subirImagen() {
      this.email = this.getEmail();
      const refImg = ref.child(
        "imagenes/" + this.getEmail() + "/" + this.imagen.name
      );
      const metadata = { contentType: "image/jpeg" };
      refImg.put(this.imagen, metadata).then((e) => console.log(e));
      console.log("Se subio");
    },
    getUrl() {
      ref
        .child("imagenes/" + this.getEmail() + "/" + this.imagen.name)
        .getDownloadURL()
        .then((url) => {
          this.link = url;
          if (url !== null) {
            this.link = url;
          }
        });
      return this.link;
    },

    getID() {
      db.collection("Inmueble")
        .where("url", "==", this.busqueda)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.id;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      return this.id;
    },
    Actualizar() {
      if (this.Validacion()) {
        db.collection("Inmueble").doc(this.id).update({
          nombre: this.nombre,
          ciudad: this.ciudad,
          colonia: this.colonia,
          calle: this.calle,
          recamaras: this.recamaras,
          baños: this.baños,
          estacionamientos: this.estacionamientos,
          metros: this.metros,
          precio: this.precio,
          descripcion: this.descripcion,
          url: this.link,
        });
        this.$router.push("/mispublicaciones");
      } else {
        this.error = "LLena todo los datos";
      }
    },
    Eliminar() {
      db.collection("Inmueble")
        .doc(this.id)
        .delete()
        .then(() => {
          this.$router.push("/mispublicaciones")
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>


<style lang="less">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url("https://fonts.googleapis.com/css?family=Poppins");

/* BASIC */

html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #302f2f;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
  .formulario {
    background: #fff;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .inputs {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .RecamarasOptions {
        align-items: center;
        background-color: #f6f6f6;
        width: 85%;
        margin: 5px;
        border-radius: 10px;
        .recamara {
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 98%;
        }
      }
      .BañosOptions {
        align-items: center;
        background-color: #f6f6f6;
        width: 85%;
        margin: 5px;
        border-radius: 10px;
        .baños {
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 98%;
        }
      }
      .EstacionamientoOptions {
        align-items: center;
        background-color: #f6f6f6;
        width: 85%;
        margin: 5px;
        border-radius: 10px;
        .estacionamiento {
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 98%;
        }
      }
      .area {
        margin: 10px;
        width: 80%;
      }
      .botones {
        margin: 10px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}

#formContent {
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  width: 100%;
  max-width: 500px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  flex-direction: column;
  .header {
    position: relative;
    width: 100%;
    display: flex;
    .container {
      width: 100%;
      position: static;
      align-content: center;
      .iconos {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .flecha {
          left: 50px;
          background-color: rgb(182, 182, 182);
          padding: 8px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          width: 10%;
          height: 15%;
        }
        .titulo {
          width: 70%;
        }
      }
    }
  }

  .file {
    justify-content: center;
    margin: 10px;
  }
  .Imagen {
    margin: 10px;
    border-radius: 10px 10px 10px 10px;
    border-style: solid;
    border-color: rgb(104, 102, 102);
    height: 200px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 20%;
  }
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;

  border-radius: 5px 5px 5px 5px;
}

input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;

  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

* {
  box-sizing: border-box;
}

/* Radio */
input[type="radio"] {
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 6px;
  /* background-color only for content */
  border: 2px solid #bbbbbb;
  background-color: #e7e6e7;
  border-radius: 50%;
  margin: 10px;
}
input[type="radio"]:checked {
  background-color: pink;
}
</style>