<template>
  <div class="view">
    <div class="img-header">
      <div class="icons">
        <div class="icons-container">
          <router-link to="/">
            <div @click="changeState" class="icon">
            <i class="bx bx-chevron-left"></i>
          </div>
          </router-link>
          <div class="text">Avaliable</div>
          <div class="icon color-pink">
            <i class="bx bx-heart"></i>
          </div>
        </div>
      </div>
      <img
        :src="imgCard"
        alt=""
      />
    </div>
    <div class="view-text">
      <div class="view-text-content">
        <div class="header-view">
          <div class="left">
            <div class="location">
              <i class="bx bx-current-location"></i>
              {{ciudad}}
            </div>
            <div class="title-text">{{titulo}}</div>
          </div>
          <div class="right">
            <div class="top-bar-img">
              <img
                src="https://josefacchin.com/wp-content/uploads/2019/07/buyer-persona.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="tags-view">
          <small>
            High speed wifi <span>-</span> Deskspace <span>-</span> Safe
            location</small
          >
        </div>
        <div class="icons-view">
          <div class="room-items">
            <i class="bx bx-bed"></i>
            {{recamaras}}
          </div>
          <div class="room-items">
            <i class='bx bx-bath'></i>
            {{baños}}
          </div>
          <div class="room-items">
            <i class='bx bx-car' ></i>
            {{estacionamientos}}
          </div>
          <div class="room-items">
            {{metros}}m <sup>2</sup>
          </div>
        </div>
        <div class="options-view">
          <button class="selected">
            <i class="bx bx-info-circle bx-sm"></i>
            Informacion
          </button>
          <button>
            <i class="bx bx-comment bx-sm"></i>
            Comentarios
          </button>
          <button>
            <i class="bx bxs-offer bx-sm"></i>
            Ofertas
          </button>
          <button>
            <i class="bx bx-share-alt bx-sm"></i>
            Compartir
          </button>
        </div>
        <div class="description-view">
          <p>Descripcion</p>
          <small
            >{{descripcion}}</small
          >
        </div>
      </div>
    </div>
    <div class="bottom-price">
      <div class="content">
        <p> {{precio}} pesos mexicanos</p>
        <ButtonApp @click="MostrarAgenda">Reserva ahora!</ButtonApp>
      </div>
    </div>
    <Cita v-if="Agenda"></Cita>
  </div>
</template>

<script>
import ButtonApp from "@/components/ButtonApp.vue";
import Cita from "@/components/Cita.vue";
export default {
  name:"view",
  components: {
    Cita,
    ButtonApp,
  },
  data(){
    return{
      ciudad:"",
      titulo:"",
      imgCard:"",
      recamaras:"",
      baños:"",
      estacionamientos:"",
      metros:"",
      descripcion:"",
      precio:"",
      Agenda:false

    }
  },
  mounted(){  
    this.ciudad=this.$store.state.vista.ciudad
    this.titulo=this.$store.state.vista.titulo
    this.imgCard=this.$store.state.vista.imgCard
    this.recamaras=this.$store.state.vista.recamaras
    this.baños=this.$store.state.vista.baños
    this.estacionamientos=this.$store.state.vista.estacionamientos
    this.precio=this.$store.state.vista.precio
    this.descripcion=this.$store.state.vista.descripcion
    this.metros=this.$store.state.vista.metros
  },
  created(){
      this.$store.state.isView=true;
    },
  methods: {
    changeState() {
      this.$store.state.isView = false;
    },
    MostrarAgenda(){
      this.Agenda=true;
    }
  },
};
</script>

<style lang="less">
.view {
  width: 100%;
  .bottom-price {
    background-color: white;
    z-index: 2000;
    position: fixed;
    bottom: 0;
    width: 100%;
    .content {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
      }
    }
  }
  .view-text {
    width: 100%;
    height: 60%;
    .view-text-content {
      height: 30%;
      .description-view {
        width: 98%;
        overflow-y: auto;
        height: 100%;
        margin-top: 20px;
        p {
          font-weight: bold;
          color: rgba(31, 63, 95);
        }
        small {
          font-weight: bold;
          color: rgba(164, 179, 192);
          font-weight: bold;
        }
      }
      .options-view {
        display: flex;
        justify-content: space-between;
        margin-top: 13px;
        width: 90%;
        button {
          border: none;
          outline: none;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          color: rgba(164, 179, 192);
          &:hover {
            color: rgba(70, 208, 218);
            i {
              color: rgba(70, 208, 2018);
            }
          }
        }
      }
      .icons-view {
        margin-top: 10px;
        width: 60%;
        display: flex;
        justify-content: space-between;
        color: rgba(164, 179, 192);
        font-weight: bold;

        i {
          color: rgba(70, 208, 218);
          font-weight: bold;
        }
      }
      .tags-view {
        color: rgba(208, 216, 225);
        font-weight: bold;
        span {
          color: rgba(70, 208, 218);
        }
      }
      .header-view {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          .title-text {
            font-weight: bold;
            font-size: 1.2rem;
          }
        }
        .right {
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
        }
      }
    }
    width: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 1000;
    border-radius: 25px;
    padding: 20px;
    margin-top: 45vh;
  }
  .img-header {
    width: 100%;
    height: 50vh;
    position: fixed;
    top: 0;
    .icons {
      position: fixed;
      width: 100%;
      .icons-container {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        align-items: center;

        .text {
          background-color: rgba(108, 200, 117);
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
        }
        .icon {
          background-color: white;
          padding: 8px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          &.color-pink {
            color: rgba(233, 73, 111);
          }
        }
      }
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>