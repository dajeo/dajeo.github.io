<script setup>
import { defineComponent } from "vue";
import ContactsItem from "@/components/contacts/ContactsItem.vue";

defineComponent({
  components: { ContactsItem },
});
</script>

<template>
  <div>
    <ContactsItem title="GitHub" url="https://github.com/HeadcrabJ" />
    <ContactsItem title="Telegram" url="https://t.me/headcrabj" />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
