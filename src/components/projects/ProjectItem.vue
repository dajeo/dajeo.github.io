<script setup lang="ts">
const props = defineProps<{
  title: string;
  techs: string;
  actions: Array<{ title: string; url: string }>;
}>();
</script>

<template>
  <h1>
    {{ props.title }}
    <span class="text-muted">({{ props.techs }})</span>
  </h1>
  <div class="item">
    <div>
      <slot />
    </div>

    <div class="item-actions">
      <a v-for="action in actions" :key="action.title" :href="action.url">
        {{ action.title }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.item {
  max-width: 500px;
}

.item-actions {
  margin-top: 12px;
  text-decoration: underline;
  color: inherit;
}
</style>
