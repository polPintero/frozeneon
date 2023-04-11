<template>
  <v-app-bar app class="header pt-6">
    <v-text-field label="Search" prepend-inner-icon="mdi-magnify" clearable
    variant="outlined"></v-text-field>
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
