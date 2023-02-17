<script setup lang="ts">
import { defineComponent } from "vue";
import ContactsItem from "@/components/contacts/ContactsItem.vue";

defineComponent({
  components: { ContactsItem },
});
</script>

<template>
  <h2>Contacts</h2>
  <div>
    <contacts-item title="GitHub" url="https://github.com/HeadcrabJ" />
    <contacts-item title="Telegram" url="https://t.me/headcrabj" />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
