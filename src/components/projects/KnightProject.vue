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
    Chess Social Network Knight. Developed by me,
    <a class="link" href="https://github.com/MineEjo">MineEjo</a> and
    <a class="link" href="https://github.com/orchst">orchst</a>. Originally
    backend developed in Kotlin and Ktor, then rewritten in TypeScript and
    Nest.js. Frontend by
    <a class="link" href="https://github.com/MineEjo">MineEjo</a> written in
    JavaScript and Svelte.
  </project-item>
</template>
