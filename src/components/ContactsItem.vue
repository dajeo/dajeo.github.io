<script setup lang="ts">
const props = defineProps<{
  title: string;
  url: string;
}>();
</script>

<template>
  <a :href="props.url" target="_blank">{{ props.title }}</a>
</template>

<style scoped>
a {
  padding: 8px;
  margin-left: 6px;
  margin-right: 6px;
  text-decoration: underline;
  transition: ease 0.2s;
}

a:hover {
  background-color: white;
  color: black;
  text-decoration: none;
}
</style>
