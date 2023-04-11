<template>
   <v-app>
     <v-layout>
       <FooterComp></FooterComp>
     </v-layout>
   </v-app>
</template>



<script setup>
import { ref } from 'vue'
import api from './api'
import FooterComp from './components/FooterComp.vue'

let searchResult = ref()
getData()


async function getData () {
  const response =  await api.getSearch('vue')
  searchResult.value = response.results
}


</script>
