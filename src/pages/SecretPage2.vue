<template>
  <div class="img-background window-height flex flex-center">
    <div class="products flex column flex-center">
      <p>Usuario: {{ userName }}</p>

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

let userName = ref();

const getUser = async () => {
  try {
    const tokenString = localStorage.getItem("responsePostToken");
    const token = JSON.parse(tokenString);

    const nameString = localStorage.getItem("responsePostName");
    const name = JSON.parse(nameString);

    const responseGet = await api.get("secretpage2", {
      headers: {
        Authorization: `Bearer ${token}`,
        username: name,
      },
    });

    console.log(responseGet.data.name);
    userName.value = responseGet.data.name;

    return responseGet;
  } catch (error) {
    router.push("/login");
    console.log(error);
  }
};

getUser();

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
