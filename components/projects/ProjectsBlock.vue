<script lang="ts" setup>
import { defineComponent } from "vue";
import ProjectsItem from "@/components/projects/ProjectsItem.vue";

defineComponent({
  components: { ProjectsItem },
});
</script>

<template>
  <h2>Projects</h2>
  <div class="row">
    <projects-item
      title="Module"
      techs="Java, Spring"
      :actions="[
        { title: 'GitHub', url: 'https://github.com/HeadcrabJ/Module' },
      ]"
    >
      Multifunctional Discord bot, originally written in pure Java with
      Hibernate and JDA, then rewritten in Spring for more convenience.
    </projects-item>
    <projects-item
      title="Eclipse"
      techs="Kotlin, Android"
      :actions="[
        { title: 'GitHub', url: 'https://github.com/HeadcrabJ/knight-nest' },
      ]"
    >
      Multifunctional Discord bot control panel for Android.
    </projects-item>
    <projects-item
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
    </projects-item>
  </div>
  <a
    class="btn mt-10" 
    href="#"
  >All projects</a>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
}
</style>
