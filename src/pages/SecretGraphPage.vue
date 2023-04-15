<template>
  <div class="img-background window-height flex flex-center">
    <div class="products flex column flex-center">
      <q-card>
        <q-card-section> hola </q-card-section>
        <q-card-section v-for="product in products" :key="product.name">{{
          product.name
        }}</q-card-section>
      </q-card>
      <LoggoutBtn @click="logout" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, reactive, ref, computed } from "vue";
import { api } from "../boot/axios";
import { useRouter } from "vue-router";
import LoggoutBtn from "../components/LoggoutBtn.vue";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

const router = useRouter();
let product = ref();
let price = ref();

const getProducts = gql`
  query Query {
    getProducts2 {
      id
      name
      price
    }
  }
`;

const tokenString = localStorage.getItem("resultToken");
const token = JSON.parse(tokenString);
console.log(token);
const { result } = useQuery(getProducts, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});



console.log(result.value ? result.value.getProducts2 : null);

const products = computed(() =>
  result.value ? result.value.getProducts2 : null
);

// const productsGet =   () => {
//   try {
//     const products = computed( () =>

//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// productsGet();

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
