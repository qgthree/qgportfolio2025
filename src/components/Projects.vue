<script setup>
import Filters from '@/components/Filters.vue'
import { useProjectsStore } from '@/stores/projectsStore'

defineProps({
  projects: Array,
  role: String
})

const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}
</script>

<template>
  <main class="mainContent">
    <Filters
      :filters="['all projects', 'designer', 'developer', 'advisor']"
      qkey="role"
      :qresult="role" />
    <transition-group name="timeline" tag="div" class="verticalContent">
      <div class="tl_item" v-for="(project) in projects" :key="project.id">
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
          <router-link :to="{ name: 'project', params: { id: project.id } }" class="project_title">
            {{ project.title }}
          </router-link>
        </h3>
        <router-link
          :to="{ name: 'project', params: { id: project.id } }"
          class="content_banner"
          role="img"
          :style="{ backgroundImage: 'url(' + getImageUrl(project.banner.image) + ')' }"
          :aria-label="project.banner.alt"
        >
        </router-link>
        <div class="details">
          <div class="details_left">
            <a v-for="(skill, index) in project.skills" class="details_button" :key="index">{{ skill }}</a>
          </div>
          <div class="details_right">
            <span class="material-symbols-outlined lighter" :class="{ 'liked': project.liked }" @click="useProjectsStore().toggleProjectLike(project.id)">favorite</span>
          </div>
        </div>
      </div>
    </transition-group>
  </main>
</template>

<style scoped>
.project_title {
  color: #000;
}
.content_banner {
  filter: grayscale(100%);
}
</style>
