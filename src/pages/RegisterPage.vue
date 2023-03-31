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
      <q-form class="Register-form" @submit.prevent="register">
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
        <q-input
          class="q-mt-md"
          v-model="password_repeat"
          label="Repetir Contraseña"
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
            label="register"
            class="register-btn"
          />
        </div>
      </q-form>
    </div>

    <!-- <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none"> {{ err }} </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
    <AlertError :show="show" @close="show = false" :err="err" />
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { api } from "../boot/axios";
import AlertError from "../components/AlertError.vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const password_repeat = ref("");
const error = ref(false);
let show = ref(false);
let err = ref();
const router = useRouter();

const register = async () => {
  try {
    const response = await api.post("register", {
      username: username.value,
      password: password.value,
      password_repeat: password_repeat.value,
    });
    router.push("/login");
    console.log(response);
    return response;
  } catch (error) {
    show.value = true;
    err.value = error.response.data.msg;
    console.log(error.response.data.msg);
  }
};
</script>

<style scoped>
.dark {
  background: #1817309a;
}
.blanco {
  background: white;
  height: 500px;
  width: 400px;
}
</style>
