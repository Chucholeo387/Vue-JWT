<template>
  <q-card>
    <q-card-section> hola </q-card-section>
    <q-card-section v-for="character in characters" :key="character.name">{{
      character.name
    }}</q-card-section>
    <q-card-section>
      {{ character }}
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "@apollo/client/core";

const QUERY = gql`
  query {
    allCharacters {
      name
    }
    oneCharacter(id: 2) {
      name
    }
  }
`;

const { result } = useQuery(QUERY);
const characters = computed(() => result.value?.allCharacters);
console.log(characters);

const character = computed(() => result.value?.oneCharacter.name);
</script>
