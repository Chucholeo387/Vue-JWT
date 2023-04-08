<template>
  <router-view />
</template>

<script>
import { defineComponent, provide } from "vue";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineComponent({
  name: "App",

  setup() {
    const httpLink = new createHttpLink({
      uri: "http://localhost:4000/graphql",
    });

    const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });

    provide(DefaultApolloClient, client);
  },
});
</script>
