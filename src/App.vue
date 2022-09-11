<template>
  <div id="app">
    <div v-if="!$store.state.isView" class="top-bar-container">
      <div class="top-bar-content">
        <div class="top-bar-img">
          <img
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475457-Los-Angeles.jpg"
            alt=""
          />
        </div>
        <div class="top-bar-center">
          <i class="bx bx-current-location"></i>
          Mexico <i class="bx bxs-chevron-down"></i>
        </div>
        <div class="top-bar-icons">
          <div class="notifi">
            <div class="circle"></div>
            <i class="bx bx-bell bx-sm"></i>
          </div>
          <div class="config">
            <ul class="nav">
              <ul id="menu">
                <li>
                  <a href=""><i class="bx bx-cog bx-sm"></i></a>
                  <ul>
                    <li><a>Acerca de</a></li>
                    <li><a @click="logout">Cerrar Sesion</a></li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!$store.state.isView" class="navbar-container">
      <div class="navbar-content">
        <router-link to="/"><i class="bx bx-home"></i></router-link>
        <router-link to="/test1"><i class="bx bx-heart"></i></router-link>
        <router-link to="/test2"
          ><i class="bx bx-location-plus"></i
        ></router-link>
        <router-link to="/mispublicaciones"><i class='bx bxs-edit'></i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
.top-bar-container {
  width: 100%;
  position: fixed;
  z-index: 3000;
  background-color: rgb(233, 233, 233);
  align-content: center;
  .top-bar-content {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .top-bar-img {
      width: 44px;
      height: 44px;
      border-radius: 25px;
      overflow: hidden;
      margin-right: 40px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .top-bar-center {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      color: rgba(140, 138, 136);
    }
    .top-bar-icons {
      width: 20%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      color: rgba(140, 138, 136);
      .config {
        position: flex;
      }
    }
  }
}
.navbar-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 3000;
  background-color: rgb(233, 233, 233);
  align-content: center;
  .navbar-content {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    a {
      color: rgba(95, 100, 111);
      &.router-link-exact-active {
        color: rgba(70, 209, 216);
      }
    }
  }
}
* {
  margin: 0px;
  padding: 0px;
  font-family: "Josefin Sans", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul {
  list-style: none;
}
#menu li > a {
  color: rgba(140, 138, 136);
  display: block;
}
#menu li > a:hover {
  color: rgba(70, 209, 216);
  background-color: #eaeaea;
}
#menu > li {
  float: left;
  text-align: center;
}
#menu > li > ul {
  background-color: #fff;
  border-radius: 10px;
  display: none;
}
#menu > li:hover > ul {
  display: block;
  position: absolute;
  right: 20px;
}
</style>

<script>
import firebase from "firebase/compat/app";
export default {
  methods: {
    logout() {
      this.changeState();
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
    changeState() {
      this.$store.state.isView = false;
    },
  },
};
</script>
