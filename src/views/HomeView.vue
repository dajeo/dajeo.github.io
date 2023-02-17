<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProjectsBlock from "@/components/projects/ProjectsBlock.vue";
import AboutBlock from "@/components/about/AboutBlock.vue";
import ContactsBlock from "@/components/contacts/ContactsBlock.vue";

const presentSection = ref<HTMLElement | null>(null);
const projectsSection = ref<HTMLElement | null>(null);
const aboutSection = ref<HTMLElement | null>(null);
const currentPage = ref<number>(0);
const sections = ref<Array<HTMLElement | null>>([]);

function previous() {
  if (currentPage.value == 0) {
    const length = sections.value.length - 1;
    currentPage.value = length;
    sections.value[length]?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }
  currentPage.value -= 1;
  sections.value[currentPage.value]?.scrollIntoView({
    behavior: "smooth",
  });
}

function next() {
  if (currentPage.value == sections.value.length - 1) {
    currentPage.value = 0;
    sections.value[0]?.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }
  currentPage.value += 1;
  sections.value[currentPage.value]?.scrollIntoView({
    behavior: "smooth",
  });
}

onMounted(() => {
  sections.value.push(
    presentSection.value,
    projectsSection.value,
    aboutSection.value
  );
});

window.addEventListener("keyup", (e: KeyboardEvent) => {
  const key = e.code;

  if (key === "ArrowLeft") previous();
  else if (key === "ArrowRight") next();
});
</script>

<template>
  <div>
    <div class="arrow-position">
      <div class="arrow-group">
        <span @click="previous" class="arrow">
          <img src="../assets/a_left.svg" alt="Arrow left" />
        </span>
        <span @click="next" class="arrow">
          <img src="../assets/a_right.svg" alt="Arrow right" />
        </span>
      </div>
    </div>

    <div ref="presentSection" class="block present">
      <h1>Hi, I'm Headcrab.</h1>
      <p class="block-p">
        I'm a young <b>software engineer</b>. Develop
        <b>full-stack</b> applications on many different technologies.
      </p>
    </div>

    <div ref="projectsSection" class="block projects">
      <projects-block />
    </div>

    <div ref="aboutSection" class="block about">
      <about-block />
      <contacts-block />
    </div>
  </div>
</template>

<style scoped>
.block {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
  height: 100vh;
}

.block-p {
  text-align: center;
  max-width: 340px;
}

.present {
  background-image: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.projects {
  background-image: url("../assets/bg2.jpg");
  background-position: center;
}

.about {
  background-image: url("../assets/bg3.jpg");
  background-position: center;
}

.arrow-position {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

.arrow-group {
  display: flex;
  justify-content: space-between;
  padding: 14px 44px 14px 44px;
}

.arrow {
  cursor: pointer;
}
</style>
