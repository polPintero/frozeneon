<template>
  <div class="social-links">
    <a class="social-links__item" target="_blank" :href="href" v-for="(href, key) in links" :title="key" :key="key">
      <v-icon size="32px">{{ getIcon(key) }}</v-icon>
    </a>
  </div>
</template>

<script setup>
defineProps({
  links: { type: Object }
})
const iconList = {
  repository: "mdi-github",
  default: "mdi-home",
  npm: "mdi-npm",
  bugs: "mdi-bug",
}

function getIcon (key) {
  const icon = iconList[key];
  if (!icon) return iconList.default;
  return icon;
}
</script>

<style lang="scss">
.social-links {
  margin-top: 10px;

  &__item {
    text-decoration: none;
    margin-right: 12px;
    color: inherit;

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
