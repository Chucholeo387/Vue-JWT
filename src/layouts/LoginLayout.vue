<template>
  <q-layout view="lHh Lpr lFf" class="img-background">
    <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLayout",

  setup() {},
});
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  background: #fff url("../assets/astronomy.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
}
</style>
>
