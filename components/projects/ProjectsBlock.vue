<script setup>
import { defineComponent } from "vue";
import ProjectsItem from "@/components/projects/ProjectsItem.vue";

defineComponent({
  components: { ProjectsItem },
});
</script>

<template>
  <div class="row">
    <ProjectsItem
      title="Module"
      techs="Java, Spring"
      :actions="[
        { title: 'GitHub', url: 'https://github.com/HeadcrabJ/Module' },
      ]"
    >
      Multifunctional Discord bot, originally written in pure Java with
      Hibernate and JDA, then rewritten in Spring for more convenience.
    </ProjectsItem>
    <ProjectsItem
      title="Eclipse"
      techs="Kotlin, Android"
      :actions="[
        { title: 'GitHub', url: 'https://github.com/HeadcrabJ/knight-nest' },
      ]"
    >
      Multifunctional Discord bot control panel for Android.
    </ProjectsItem>
    <ProjectsItem
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
    </ProjectsItem>
  </div>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
}
</style>
