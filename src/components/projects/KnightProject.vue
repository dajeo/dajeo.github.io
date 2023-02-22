<script lang="ts" setup>
import ProjectItem from "@/components/projects/ProjectItem.vue";
</script>

<template>
  <project-item
    title="Knight"
    techs="TypeScript, Nest.js"
    :actions="[
      {
        title: 'GitHub',
        url: 'https://github.com/Night-Devs/EclipseAndroid',
      },
    ]"
  >
    Chess Social Network Knight.
  </project-item>
</template>
