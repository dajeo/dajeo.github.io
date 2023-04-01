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
  <div>
    <div class="arrow-position">
      <div class="arrow-group">
        <span @click="previous" class="pointer">
          <img src="./assets/a_before.svg" alt="Arrow before" width="30" height="30" />
        </span>
        <span @click="refs" class="pointer">
          Refs
        </span>
        <span @click="next" class="pointer">
          <img src="./assets/a_next.svg" alt="Arrow next" width="30" height="30" />
        </span>
      </div>
    </div>

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

.arrow-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.pointer {
  cursor: pointer;
}
</style>
