<script setup lang="ts">
import { onMounted, ref } from "vue";
import HomeBlock from "@/components/HomeBlock.vue";
import RefsBlock from "@/components/RefsBlock.vue";
import ModuleProject from "@/components/projects/ModuleProject.vue";
import KnightProject from "@/components/projects/KnightProject.vue";
import EclipseProject from "@/components/projects/EclipseProject.vue";

const currentPage = ref<number>(0);
const sections = ref<Array<Element>>([]);

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

function home() {
  currentPage.value = 0
  sections.value[currentPage.value]?.scrollIntoView({
    behavior: "smooth",
  });
}

function refs() {
  currentPage.value = 4
  sections.value[currentPage.value]?.scrollIntoView({
    behavior: "smooth",
  });
}

onMounted(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  sections.value = [...document.querySelectorAll("div.block")];
});

window.addEventListener("keyup", (e: KeyboardEvent) => {
  const key = e.code;

  if (key === "ArrowLeft" || key === "ArrowUp") previous();
  else if (key === "ArrowRight" || key === "ArrowDown") next();
});

window.addEventListener("keydown", (e: KeyboardEvent) => {
  const key = e.code;

  if (key === "Tab") {
    e.preventDefault();
    e.stopPropagation();
  }
});
</script>

<template>
  <header class="header">
    <div class="header-container">
      <h3 @click="home" class="pointer">
        dajeo
      </h3>
      <div>
        <a @click="refs" class="header-link pointer">References</a>
      </div>
    </div>
  </header>

  <div>
    <div class="block home">
      <home-block />
    </div>

    <div class="block module">
      <module-project />
    </div>

    <div class="block knight">
      <knight-project />
    </div>

    <div class="block eclipse">
      <eclipse-project />
    </div>

    <div class="block refs">
      <refs-block />
    </div>
  </div>

  <footer class="arrow-position">
    <span @click="next" class="arrow pointer">
      Down
    </span>
  </footer>
</template>

<style scoped>
h3 {
  margin: 0;
}

.header {
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.header-container {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-link {
  text-decoration: none;
}

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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.home {
  background-image: url("./assets/bg0.webp");
}

.module {
  background-image: url("./assets/bg1.webp");
}

.knight {
  background-image: url("./assets/bg2.webp");
}

.eclipse {
  background-image: url("./assets/bg3.webp");
}

.refs {
  color: white;
}

.arrow-position {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

.arrow {
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.pointer {
  cursor: pointer;
}
</style>
