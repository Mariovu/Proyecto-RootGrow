<template>
  <div class="home">
    <div class="title">
      <p>Usuario : {{ username }}</p>
      <p class="text-bold">Empieza a buscar casa</p>
    </div>
    <div class="busqueda">
      <input type="text" placeholder="Que estas buscando ?" />
      <i class="bx bx-slider-alt bx-rotate-90"></i>
    </div>
    <div class="tags">
      <div class="avatar-tag selected">
        <i class="bx bx-home-alt bx-sm"></i>
      </div>
      <div class="avatar-tag">
        <i class="bx bx-building-house bx-sm"></i>
      </div>
      <div class="avatar-tag">
      </div>
      <div class="avatar-tag">
        <router-link to="/inmueble"
          ><i class='bx bx-list-plus bx-sm'></i></router-link>
      </div>
    </div>
    <div class="card">
      <CardApp
        v-for="inmueble in inmuebles"
        @click="redirigir"
        :key="inmueble.email"
        style="margin-top: 10px"
        :title="inmueble.nombre"
        :price="inmueble.precio"
        :username="inmueble.usuario"
        :baños="inmueble.baños"
        :recamaras="inmueble.recamaras"
        :park="inmueble.estacionamientos"
        :ciudad="inmueble.ciudad"
        :imgCard="inmueble.url"
        :descripcion="inmueble.descripcion"
        :metros="inmueble.metros"
        :colonia="inmueble.colonia"
        :calle="inmueble.calle"
        :userID="inmueble.userID"
      />
    </div>
    <div class="espacio"></div>
  </div>
</template>

<style lang="less">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
.home {
  .espacio{
    margin: 50px;
  }
  padding: 10px;
  .tags {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .avatar-tag {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      color: rgba(140, 138, 136);
      &.selected {
        color: white;
        background-color: rgba(70, 208, 218);
      }
    }
  }
  .busqueda {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 10px;
    input {
      width: 100%;
    }
    i {
      border: none;
      position: absolute;
      right: 20px;
      margin-right: 10px;
      font-size: 1.1rem;
    }
  }
  .title {
    margin-top: 70px;
    margin-bottom: 35px;
    p {
      color: rgba(182, 182, 178);
    }
    .text-bold {
      font-weight: bold;
      color: rgba(20, 73, 123);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import CardApp from "@/components/CardApp";
import firebase from "firebase/compat/app";
import { db } from "@/firebase.js";

class Inmuebles {
  constructor(
    nombre,
    ciudad,
    recamaras,
    baños,
    estacionamientos,
    precio,
    usuario,
    url,
    descripcion,
    metros,
    colonia,
    calle,
    userID
  ) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.recamaras = recamaras;
    this.baños = baños;
    this.estacionamientos = estacionamientos;
    this.precio = precio;
    this.usuario = usuario;
    this.url=url;
    this.descripcion=descripcion;
    this.metros=metros;
    this.colonia=colonia
    this.calle=calle
    this.userID=userID
  }
}

const inmuebleConverter = {
  toFirestore: (inmueble) => {
    return {
      nombre: inmueble.nombre,
      ciudad: inmueble.ciudad,
      recamaras: inmueble.recamaras,
      baños: inmueble.baños,
      estacionamientos: inmueble.estacionamientos,
      precio: inmueble.precio,
      usuario: inmueble.usuario,
      url:inmueble.url,
      descripcion:inmueble.descripcion,
      metros:inmueble.metros,
      colonia:inmueble.colonia,
      calle:inmueble.calle,
      userId:inmueble.userID
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Inmuebles(
      data.nombre,
      data.ciudad,
      data.recamaras,
      data.baños,
      data.estacionamientos,
      data.precio,
      data.usuario,
      data.url,
      data.descripcion,
      data.metros,
      data.colonia,
      data.calle,
      data.userID
    );
  },
};

export default {
  name: "Home",
  mounted() {
    this.getAll();
  },
  components: {
    CardApp,
  },
  created() {
    this.$store.state.isView = false;
  },
  beforeMount() {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      this.username = user.displayName;
    }
  },
  data() {
    return {
      username: "",
      inmuebles: [],
      Inmuebles,
    };
  },
  methods: {
    getAll() {
      db.collection("Inmueble")
        .withConverter(inmuebleConverter)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.inmuebles.push(doc.data());
          });
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    redirigir(){
            this.$router.push("/view");
    }
  },
  props: {
    displayName: String,
  },
};
</script>