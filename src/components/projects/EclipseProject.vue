<script lang="ts" setup>
import ProjectItem from "@/components/projects/ProjectItem.vue";
</script>

<template>
  <project-item
    title="Eclipse"
    techs="Kotlin, Android"
    :actions="[
      { title: 'GitHub', url: 'https://github.com/HeadcrabJ/knight-nest' },
    ]"
  >
    Multifunctional Discord bot control panel for Android.
  </project-item>
</template>
