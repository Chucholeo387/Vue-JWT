<template>
  <div class="img-background window-height flex flex-center">
    <div class="products flex column flex-center">
      <p>Product: {{ product }}</p>
      <p>Price: {{ price }}</p>
      <LoggoutBtn @click="logout" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, reactive, ref } from "vue";
import { api } from "../boot/axios";
import { useRouter } from "vue-router";
import LoggoutBtn from "../components/LoggoutBtn.vue";

const router = useRouter();

let product = ref();
let price = ref();

const productsGet = async () => {
  try {
    const tokenString = localStorage.getItem("responsePostToken");
    const token = JSON.parse(tokenString);

    const responseGet = await api.get("secretpage", {
      headers: { Authorization: `Bearer ${token}` },
    });

    product.value = responseGet.data[0].name;
    price.value = responseGet.data[0].price;

    return responseGet;
  } catch (error) {
    router.push("/login");
    console.log(error);
  }
};

productsGet();

const logout = () => {
  localStorage.removeItem("responsePostToken");
  router.push("/login");
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  background: #fff url("../assets/hombreholeblack.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
}

.products {
  background: white;
  border-radius: 8px;
  height: 500px;
  width: 400px;
}
</style>
>
