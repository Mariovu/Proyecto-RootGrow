<template>
  <div class="publicaciones">
    <div class="header">
      <div class="flecha" @click="regresar">
        <i class="bx bx-chevron-left"></i>
      </div>
      <div class="title">Mis Publicaciones</div>
    </div>
    <div class="container">
      <CardApp
        v-for="inmueble in inmuebles"
        :key="inmueble.email"
        @click="redirigir"
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
  </div>
</template>

<script>
import firebase from "@/firebase.js";
import CardApp from "@/components/CardApp";
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
  created() {
    this.$store.state.isView = true;
  },
  mounted(){
    this.getPublicaciones();
  },
  data(){
    return{
        user:"",
        inmuebles:[],
        Inmuebles,
    }
  },
  methods: {
    regresar() {
      this.$router.push("/");
    },
    getPublicaciones() {
        this.user=this.getUserID();
      db.collection("Inmueble").where("userID","==",this.user)
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
    getUserID(){
        const user = firebase.auth().currentUser;
      if (user !== null) {
        this.useruid = user.uid;
        return this.useruid;
      }
    },
    redirigir(){
        this.$router.push("/editar")
    }
  },
  components: {
    CardApp,
  },
};
</script>

<style lang="less">
.publicaciones {
  position: flex;
  background-color: white;
  width: 100%;
  height: 100%;
  .header {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      margin-top: 10px;
      text-align: center;
    }
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
    .title {
      font-size: 25px;
      width: 70%;
    }
    .container {
      margin: 10px;
    }
  }
}
</style>