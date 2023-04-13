<template>
  <v-main class="v-body">
    <div class="v-body__content">
      <v-hover v-slot="{ isHovering, props }" v-for="item in packagesList" :key="item">
        <v-card :elevation="isHovering ? 24 : 6" class="mx-auto pa-6" v-bind="props" :title="item.package?.name"
          :subtitle="item.package?.author?.name" :text="item.package?.version" @click="setActiveItem(item.package)">
        </v-card>
      </v-hover>
    </div>

    <v-pagination v-if="pageCount" class="mt-10" v-model="currPage" :length="pageCount" :total-visible="6"></v-pagination>
    
    <v-dialog v-model="showModal" width="auto">
      <v-card class="pa-6">
        <v-card-title class="text-h4">
          {{ activeItem.name }}
        </v-card-title>
        <v-card-text>
          {{ activeItem.name }}
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn color="green-darken-1" variant="text" @click="showModal = false">
          Close
        </v-btn>
      </v-card>
    </v-dialog>

  </v-main>
</template>

<script setup>
import { watch, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { globalStore } from '@/store/index'

const store = globalStore()
const { getSearch } = store
const { packagesList, pageCount, currPage } = storeToRefs(store)

let activeItem = reactive({})
const showModal = ref(false)

watch(currPage, () => getSearch())
watch(currPage, () => getSearch())

function setActiveItem (item) {
  activeItem = item
  showModal.value = true
}
</script>

<style lang="scss">
.v-body {
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;

    .v-card {
      cursor: pointer;
      width: 100%;
    }
  }
}
</style>
