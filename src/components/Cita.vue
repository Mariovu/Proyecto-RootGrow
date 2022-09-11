<template>
  <div class="Cita">
    <div class="container">
      <div class="Titulo">Agenda una Cita</div>
      <div class="formulario">
        <div class="Fecha">
          Elegir Fecha:
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            v-model="fecha"
          />
        </div>
        <div class="Hora">
          Hora:
          <input type="time" min="08:00" max="20:00" required v-model="hora" />
        </div>
        <div class="Ciudad">Ciudad: {{ ciudad }}</div>
        <div class="Colonia">Calle: {{ colonia }}</div>
        <div class="Calle">Calle: {{ calle }}</div>
        <div class="Boton">
          <ButtonApp @click="AgregarCita">Aceptar</ButtonApp>
          
        </div>
        <div class="notification is-danger" v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
    
  </div>
</template>



<script>
import firebase from "@/firebase.js"
import ButtonApp from "./ButtonApp.vue";
import { db } from "@/firebase.js";
export default {
  components: {
    ButtonApp,
  },
  data() {
    return {
      ciudad: "",
      colonia: "",
      calle: "",
      fecha: "",
      hora: "",
      error:"",
      cliente:"",
      vendedor:""
    };
  },
  mounted() {
    this.ciudad = this.$store.state.vista.ciudad;
    this.colonia = this.$store.state.vista.colonia;
    this.calle = this.$store.state.vista.calle;
  },
  methods: {
    AgregarCita() {
      if (this.fecha && this.hora) {
        this.cliente=this.getUserId();
        this.vendedor=this.$store.state.vista.vendedor
        if(this.cliente == this.vendedor){
          this.error="No puedes Citar una propiedad tuya"
        }else{
          db.collection("Citas")
          .doc()
          .set({
            fecha: this.fecha,
            hora: this.hora,
            inmueble: this.$store.state.vista.imgCard,
            vendedor:this.$store.state.vista.vendedor,
            cliente:this.getUserId(),
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            this.error=error.message
          });
                this.$router.push("/");
        }
        
      } else {
        this.error="Rellenar Datos"
      }

    },
    getUserId(){
       const user = firebase.auth().currentUser;
      if (user !== null) {
        this.useruid = user.uid;
        return this.useruid;
      }
    },
  },
};
</script>



<style lang="less">
.Cita {
  .container {
    flex-direction: column;
    justify-content: center;
    position: absolute;
    background: white;
    left: 5%;
    width: 90%;
    height: 500px;
    top: 30%;
    z-index: 7000;
    border-radius: 50px;
    -webkit-box-shadow: 10px 10px 77px 22px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 10px 10px 77px 22px rgba(0, 0, 0, 0.48);
    box-shadow: 10px 10px 77px 22px rgba(0, 0, 0, 0.48);
    .Titulo {
      position: relative;
      text-align: center;
      margin: 10px;
      font-size: 30px;
      font-variant: small-caps;
    }
    .formulario {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-content: center;
      text-align: center;
      font-size: 20px;
      padding: 10px;
      .Fecha {
        margin: 5px;
      }
      .Hora {
        margin: 5px;
      }
      .Ciudad {
        margin: 5px;
      }
      .Colonia {
        margin: 5px;
      }
      .Calle {
        margin: 5px;
      }

    }
  }
}

input[type="date"] {
  background-color: rgba(70, 208, 218);
  padding: 15px;
  top: 50%;
  left: 50%;
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
}
input[type="time"] {
  background-color: rgba(70, 208, 218);
  padding: 15px;
  top: 50%;
  left: 50%;
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
}
</style>