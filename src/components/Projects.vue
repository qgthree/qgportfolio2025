<script setup>
import Filters from '@/components/Filters.vue'
import { useProjectsStore } from '@/stores/projectsStore'

defineProps({
  projects: Array,
  filter: String
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
      :qresult="filter" />
    <transition-group name="timeline" tag="div" class="verticalContent">
      <div class="tl_item" v-for="(project) in projects" :key="project.id">
        <div class="details">
          <div class="details_left">
            <span v-if="project.user.userImage" class="userImage" v-bind:style="{ backgroundImage: 'url(' + getImageUrl(project.user.userImage) + ')' }"></span>
            <span v-else class="material-symbols-outlined">account_circle</span>
            <span class="details_left_text">
              <span>{{ project.user.username }}&nbsp;∙&nbsp;<span class="lighter">{{ project.year }}</span></span>
            </span>
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
          <div class="content_banner_overlay">
            read more
          </div>
        </router-link>
        <div class="details">
          <div class="details_left">
            <div v-for="(skill, index) in project.skills" class="details_button lighter" :key="index">{{ skill }}</div>
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
.content_banner_overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  font-size: 12px;
}

.content_banner:hover .content_banner_overlay {
  opacity: 1;
}
</style>
