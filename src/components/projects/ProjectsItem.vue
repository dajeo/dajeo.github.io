<script setup lang="ts">
const props = defineProps<{
  title: string;
  techs: string;
  actions: Array<{ title: string; url: string }>;
}>();
</script>

<template>
  <div class="item">
    <div>
      <div class="item-header">
        <div class="item-title">
          {{ props.title }}
        </div>
        <div class="item-techs">({{ props.techs }})</div>
      </div>
      <div class="item-text">
        <slot />
      </div>
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
  text-align: left;
  padding: 8px;
  border: 2px solid white;
  transition: ease 0.2s;
}

.item:hover {
  background-color: white;
  color: black;
}

.item-header {
  display: flex;
}

.item-title {
  font-weight: bold;
  margin-right: 4px;
}

.item-techs {
  opacity: 0.6;
}

.item-actions {
  margin-top: 12px;
  text-decoration: underline;
  color: inherit;
}
</style>
