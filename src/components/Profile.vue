<script setup>
import Filters from '@/components/Filters.vue'

defineProps({
  filter: String
})
</script>

<template>
  <main class="mainContent">
    <Filters filter1="About Quintus" filter2="skills" :qresult="filter" qtype="filter" />
    <div class="verticalContent">
    </div>
  </main>
</template>

<style scoped>
</style>
