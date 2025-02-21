<script setup>
import Projects from '@/components/Projects.vue'
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useProjectsStore } from '@/stores/projectsStore'

const projects = useProjectsStore().projects.sort((a,b) => b.year - a.year);
const route = useRoute();
const role = ref(route.query.role);

const filteredProjects = (query) => {
  if (query) {
    return projects.filter(project => project.role.includes(query));
  }
  else {
    return projects;
  }
}

watch(() => route.query, (newQuery) => {
  role.value = newQuery.role;
});
</script>

<template>
  <div id="ProjectView" class="two-column">
    <div class="two-column_left">
      <Projects v-if="!route.params.id" :projects="filteredProjects(role)" :role="role" />
      <router-view name="main" />
    </div>
    <div class="two-column_right">
    </div>
  </div>
</template>
<style scoped>
.two-column_right {
  background-image: url('../../assets/images/workdesk.jpg');
}
</style>
