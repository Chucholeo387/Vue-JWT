<template>
  <q-page class="docs-input row justify-center">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xl dark">
      <div class="text-center" style="color: white">
        <img
          src="https://mundoconectado.com.br/uploads/chamadas/microsoft-auth.png"
          width="130em"
        />
        <p class="q-display-1 text-weight-bolder q-pt-lg">Quasar + JWT</p>
        <p class="q-title text-weight-bold q-ma-none">LOGIN TOKEN</p>
      </div>
      <q-form class="login-form" @submit.prevent="login">
        <q-input
          class="q-mt-md"
          v-model="username"
          label="Nombre de usuario"
          dense
          outlined
          required
          clearable
          bg-color="white"
        />
        <q-input
          class="q-mt-md"
          v-model="password"
          label="Contraseña"
          type="password"
          dense
          outlined
          required
          clearable
          bg-color="white"
        />

        <div class="q-mt-xl flex flex-center">
          <q-btn
            type="submit"
            color="primary"
            label="Iniciar sesión"
            class="login-btn"
          />
        </div>
      </q-form>
    </div>

    <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Username or password are incorrect</q-card-section
        >

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "../boot/axios";
import moment from "moment";

console.log(moment().format("DD MM YYYY h:mm"));
console.log(moment().format("l h:mm"));
console.log(moment().format("l 23:59"));

const username = ref("");
const password = ref("");
const error = ref(true);
const router = useRouter();
let show = ref();

const login = async () => {
  try {
    const responsePost = await api.post("login", {
      username: username.value,
      password: password.value,
    });
    console.log(responsePost);
    localStorage.setItem(
      "responsePostToken",
      JSON.stringify(responsePost.data.token)
    );
    localStorage.setItem(
      "responsePostName",
      JSON.stringify(responsePost.data.name)
    );

    router.push({
      name: "SecretPage",
    });

    return responsePost;
  } catch (error) {
    show.value = true;
    console.log(error);
  }
};
</script>

<style scoped>
.dark {
  background: #1817309a;
}
</style>
