<template>
  <v-footer class="footer">
    <v-row justify="center" no-gutters>
      <SocialLinks :links="myLinks"></SocialLinks>
    </v-row>
  </v-footer>
</template>

<script setup>
import SocialLinks from '@/components/SocialLinks.vue';

const myLinks = {
  repository: "https://github.com/polPintero",
  default: "http://realsitecard.dobuy.com.ua/",
  phone: "tel:+380965253550",
  email: 'mailto:zp00v0518@gmail.com'
}

</script>

<style lang="scss">
.footer {
  .row {
    align-items: center;

    a {
      margin-right: 24px;
    }
  }
}
</style>
