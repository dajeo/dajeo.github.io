<script lang="ts" setup>
import ProjectItem from "@/components/projects/ProjectItem.vue";
</script>

<template>
  <project-item
    title="Module"
    techs="Java, Spring"
    :actions="[{ title: 'GitHub', url: 'https://github.com/dajeo/Module' }]"
  >
    Multifunctional Discord bot, originally written in pure Java with Hibernate
    and JDA, then rewritten in Spring for more convenience.
  </project-item>
</template>
