<script setup>
import { useProfileStore } from '@/stores/profileStore'
import Filters from '@/components/Filters.vue'

const profile = useProfileStore().users.find(user => user.id === 1);
const education = profile.education;

defineProps({
  filter: String
})
</script>

<template>
  <main class="mainContent">
    <Filters
      :filters="[`about ${profile.name.first}`, 'skills', 'experience', 'education']"
      :qresult="filter"
      qkey="filter"
    />
    <div class="verticalContent" v-if="filter === 'education'">
      <div class="profile_item" v-for="(school, index) in education" :key="index">
        <div style="text-transform: uppercase;">{{ school.school_name }}</div>
        <div>{{ school.degree }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .verticalContent > .profile_item {
    padding-top: 30px;
    font-size: 15px;
    font-weight: 300;
  }
</style>
