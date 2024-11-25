<script setup>
import { onMounted } from 'vue';
import { setupFormValidation } from '@/assets/js/index.js';
import LeftBlock from './components/LeftBlock.vue';
import RightBlock from './components/RightBlock.vue';
onMounted(() => {
  setupFormValidation();
});
</script>

<template>
  <main class="container">
    <LeftBlock />
    <RightBlock />
  </main>
</template>
<style scoped>

</style>
