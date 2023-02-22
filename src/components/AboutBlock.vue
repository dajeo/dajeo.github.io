<script setup lang="ts">
import ContactsItem from "@/components/ContactsItem.vue";
</script>

<template>
  <h1>About me</h1>
  <p>
    It all started with the very same grown-ups who wrote interesting projects,
    shared their experiences, kind of joked and tried to teach you only good
    things, to start small, not to jump from technology to technology, etc. I
    was so excited by the idea, that I immediately started reading textbooks,
    looking for tutorials, writing code. I started with something simple...
    Java, wrote a simple blog in Spring using a PostgreSQL database. Found some
    new friends and made a feature-rich Module bot on the same Spring and
    PostgreSQL stack. After the bot, I was invited to work as an Android
    developer and create a control panel for the bot, I agreed. With the
    acquaintances I mentioned earlier, I started to develop a chess social
    network called Knight. Frontend on Svelte, backend on Nest.js.
  </p>

  <div>
    <contacts-item title="GitHub" url="https://github.com/HeadcrabJ" />
    <contacts-item title="Telegram" url="https://t.me/headcrabj" />
    <contacts-item
      title="Monkeytype"
      url="https://monkeytype.com/profile/Headcrab"
    />
  </div>
</template>

<style scoped>
p {
  max-width: 600px;
}
</style>
