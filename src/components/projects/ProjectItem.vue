<script setup lang="ts">
const props = defineProps<{
  title: string;
  techs: string;
  actions: Array<{ title: string; url: string }>;
}>();
</script>

<template>
  <h1 class="item-title">{{ props.title }}</h1>
  <span class="item-techs text-muted">({{ props.techs }})</span>
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
.item-title {
  margin: 0;
}

.item-techs {
  margin-bottom: 22px;
}

.item {
  max-width: 400px;
}

.item-actions {
  margin-top: 12px;
  color: inherit;
}
</style>
