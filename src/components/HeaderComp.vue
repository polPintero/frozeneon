<template>
  <v-app-bar class="header pt-6">
    <v-text-field v-model="searchString" label="Search" prepend-inner-icon="mdi-magnify" clearable
      variant="outlined"></v-text-field>
  </v-app-bar>
</template>

<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { globalStore } from '@/store/index'

const store = globalStore()
const { getSearch } = store
const { searchString } = storeToRefs(store)

let timeout = null

watch(searchString, () => {
  clearTimeout(timeout)
  timeout = setTimeout(async () => {
    await getSearch()
  }, 200)
})
</script>

<style lang="scss">
.header {
  .v-toolbar__content {
    justify-content: center;
  }

  .v-input {
    flex-grow: unset;
    width: 350px;
  }
}
</style>
