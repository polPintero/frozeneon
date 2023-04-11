<template>
  <v-app-bar app class="header">
    <v-text-field solo label="Search" prepend-inner-icon="mdi-file-document-box-search-outline" dense clearable
      hide-details></v-text-field>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComp",
};
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
