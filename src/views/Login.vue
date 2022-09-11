<template>
  <div class="wrapper">
    <div id="formContent">
      <!-- Tabs Titles -->
      <h2 class="active">Iniciar Sesion</h2>
      <router-link to="/register"
        ><h2 class="inactive">Registrarse</h2></router-link
      >

      <!-- Icon -->
      <div class="fadeIn first">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rootgorw.appspot.com/o/WhatsApp%20Image%202022-06-07%20at%207.03.48%20PM.jpeg?alt=media&token=a4e2d9c4-79a5-4cd1-abc1-50d3a0cc30f3"
          id="icon"
          alt="Logo"
        />
      </div>

      <!-- Login Form -->
      <div class="formulario">
        <div class="inputs">
          <input
            type="text"
            id="correo"
            placeholder="Correo Electronico"
            v-model="email"
          />
          <input
            type="password"
            id="contraseña"
            placeholder="Contraseña"
            v-model="password"
          />
          <ButtonApp @click="login">Iniciar Sesion</ButtonApp>
        </div>
        <div class="formulario-abajo">
          <ButtonApp @click="loginGoogle"
            ><i class="bx bxl-google bx-sm">Login with Google</i></ButtonApp
          >
        </div>
        <div class="notification is-danger" v-if="error">
          {{ error }}
        </div>
      </div>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">Contraseña olvidada?</a>
      </div>
    </div>
  </div>
</template>

 <script>
import ButtonApp from "@/components/ButtonApp.vue";
import firebase from "firebase/compat/app";
import { auth } from "@/firebase";

export default {
  components: {
    ButtonApp,
  },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  created() {
    this.$store.state.isView = true;
  },
  name: "Login",
  methods: {
    async loginGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push({ name: "home" });
          })
          .catch(err => {
            this.error = err.message;
          });
      } else {
        this.error='Todo los campos son requeridos'
      }
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
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  .formulario-abajo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    }
  }
}

#formContent {
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  flex-direction: column;
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
</style>
