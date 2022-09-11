<template>
  <div class="card">
    <div @click="redirigir" class="card-content">
      <div class="tag-card">{{ ciudad }}</div>
      <div class="footer-card">
        <div class="action">
          <button><i class="bx bx-heart"></i></button>
        </div>
        <div class="footer-card-content">
          <div class="footer-card-left">
            <div class="title">
              <h3>{{ title}}</h3>
            </div>
            <div class="user">
              <div class="content-user">
                <div class="img-content">
                  <img :src="imgUser" alt="" />
                </div>
                <div class="username">
                  {{ username }}
                </div>
              </div>

              <div class="stars">
                <span><i class="bx bxs-star"></i></span>
                <span><i class="bx bxs-star"></i></span>
                <span><i class="bx bxs-star"></i></span>
                <small>{{ start }} Stars</small>
              </div>
            </div>
          </div>
          <div class="footer-card-right">
            <div class="price">
              <h2>{{ price }}</h2>
            </div>
            <div class="rooms">
              <div class="room-items">
                <i class="bx bx-bed"></i>
                {{ recamaras }}
              </div>
              <div class="room-items">
                <i class="bx bx-bath"></i>
                {{ baños }}
              </div>
              <div class="room-items">
                <i class="bx bx-car"></i>
                {{ park }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="imgCard" alt="" />
    </div>
  </div>
</template>


<style lang="less" scoped>
.card {
  .card-content {
    box-shadow: 0px 5px 10px -2px rgba(74, 54, 251, 0.2);
    .footer-card {
      border-radius: 20px;
      overflow: hidden;
      .action {
        position: absolute;
        bottom: 38%;
        right: 10%;
        z-index: 1500;
        button {
          box-shadow: 0px 10px 20px -2px rgba(74, 54, 251, 0.2);
          color: red;
          border: none;
          outline: none;
          border-radius: 50px;
          background-color: white;
          padding: 8px;
        }
      }
      .footer-card-content {
        border-radius: 20px;
        padding: 10px;
        position: absolute;
        bottom: 0%;
        width: 100%;
        display: flex;
        background-color: #fff;
        align-items: center;
      }
      .footer-card-right {
        height: 100%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        .rooms {
          display: flex;
          justify-content: space-between;
          width: 80%;
          .room-items {
            color: rgba(209, 183, 234);
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .footer-card-left {
        .title {
          margin: 10px;
          text-align: start;
        }
        .user {
          display: flex;
          flex-direction: column;
          .stars {
            text-align: start;
            margin: 10px;
            display: flex;
            align-items: center;
            small {
              margin-left: 20px;
            }
            color: rgba(225, 207, 241);
            i {
              color: rgba(69, 208, 215);
            }
          }
          .content-user {
            display: flex;
            align-items: center;
            margin-left: 10px;
            .username {
              margin-left: 10px;
            }
          }
        }
        display: flex;
        flex-direction: column;
        width: 60%;
        .img-content {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    border-radius: 30px;
    overflow: hidden;
    width: 100%;
    height: 400px;
    position: relative;
    .tag-card {
      position: absolute;
      background-color: white;
      padding: 8px;
      z-index: 1500;
      top: 0;
      margin: 20px;
      border-radius: 15px;
      font-size: 0.9rem;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script>
export default {
  name: "CardApp",
  components:{

  },
  mounted() {},
  methods: {
    redirigir() {
      this.$store.state.vista.ciudad=this.ciudad
      this.$store.state.vista.titulo=this.title
      this.$store.state.vista.imgCard=this.imgCard
      this.$store.state.vista.recamaras=this.recamaras
      this.$store.state.vista.baños=this.baños
      this.$store.state.vista.estacionamientos=this.park
      this.$store.state.vista.descripcion=this.descripcion
      this.$store.state.vista.metros=this.metros
      this.$store.state.vista.precio=this.price
      this.$store.state.vista.colonia=this.colonia
      this.$store.state.vista.calle=this.calle
      this.$store.state.vista.vendedor=this.userID
      
    },
  },
  props: {
    title: {
      type: String,
      default: "Not found",
    },
    imgUser: {
      type: String,
      default: "",
    },
    imgCard: {
      type: String,
      default:
        "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg",
    },
    price: {
      type: String,
      default: "0",
    },
    username: {
      Type: String,
      default: "Not found",
    },
    start: {
      Type: String,
      default: "0",
    },
    ciudad: {
      Type: String,
      default: "Not Found",
    },
    baños: {
      Type: String,
      default: "0",
    },
    recamaras: {
      Type: String,
      default: "0",
    },
    park: {
      Type: String,
      default: "0",
    },
    descripcion:{
      Type:String,
      default:"Not Description"
    },
    metros:{
      Type:String,
      default:"Not Found"
    },
    colonia:{
      Type:String,
      default:"Not Found"
    },
    calle:{
      Type:String,
      default:"Not Found"
    },
    userID:{
      Type:String,
      default:"Not Found"
    }
  },
};
</script>


    