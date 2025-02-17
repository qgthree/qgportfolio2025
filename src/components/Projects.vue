<script setup>
import Filters from './Filters.vue'
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useProjectsStore } from '@/stores/projectsStore'

const route = useRoute();
const currentName = ref(route.name);

const projects = () => {
  return useProjectsStore().projects.filter(project => project.role.includes(currentName.value)).sort((a,b) => b.year - a.year);
}

watch(() => route.name,
  (newName) => {
    currentName.value = newName;
  },
  { deep: true }
);

const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}
</script>

<template>
  <Filters filter1="designer" filter2="developer" filter3="advisor" />
  <section id="tl_items" v-if="projects()">
    <div class="tl_item" v-for="(project, index) in projects()" :key="index">
      <div class="details">
        <div class="details_left">
          <span v-if="project.user.userImage" class="userImage" v-bind:style="{ backgroundImage: 'url(' + project.user.userImage + ')' }"></span>
          <span v-else class="material-symbols-outlined">account_circle</span>
          <span>{{ project.user.username }}</span>
          <span>&nbsp;∙&nbsp;</span>
          <span class="lighter">{{ project.year }}</span>
        </div>
        <div class="details_right">
        </div>
      </div>
      <h3>
        {{ project.title }}
      </h3>
      <a
        class="project_banner"
        role="img"
        :style="{ backgroundImage: 'url(' + getImageUrl(project.banner.image) + ')' }"
        :aria-label="project.banner.alt"
      >
      </a>
      <div class="details">
        <div class="details_left">
          <a v-for="(skill, index) in project.skills" class="details_button" :key="index">{{ skill }}</a>
        </div>
        <div class="details_right">
          <span class="material-symbols-outlined lighter">favorite</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project_banner {
  display: block;
  cursor: pointer;
  aspect-ratio: 16 / 9;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: cover;
  /* filter: grayscale(100%); */
  transition: all 0.2s ease;
  filter: grayscale(100%);
}
</style>
