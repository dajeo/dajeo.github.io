<script lang="ts" setup>
import ProjectItem from "@/components/projects/ProjectItem.vue";
</script>

<template>
  <project-item
    title="Eclipse"
    techs="Kotlin, Android"
    :actions="[
      { title: 'GitHub', url: 'https://github.com/dajeo/knight-nest' },
    ]"
  >
    Multifunctional Discord bot control panel for Android. Developed by a team
    of great people at
    <a class="link" href="https://github.com/Night-Devs">Night Devs</a>.
  </project-item>
</template>
