<script setup>
import { useProjectsStore } from '@/stores/projectsStore'
import { useRoute } from 'vue-router';
import Applink from '@/components/Applink.vue'

const route = useRoute();
const projectID = route.params.id;
const project = useProjectsStore().projects.find(project => project.id === projectID);
const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}
</script>

<template>
  <main class="mainContent">
    <div class="verticalContent">
      <div class="tl_item">
        <h1>
          {{ project.title }}
        </h1>
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
        <Applink
          v-if="project.links"
          :to="project.links[0].url">
          <div
            class="content_banner"
            role="img"
            :style="{ backgroundImage: 'url(' + getImageUrl(project.banner.image) + ')' }"
            :aria-label="project.banner.alt"
          >
          </div>
        </Applink>
        <div
          v-else
          class="content_banner"
          role="img"
          :style="{ backgroundImage: 'url(' + getImageUrl(project.banner.image) + ')' }"
          style="cursor: default;"
          :aria-label="project.banner.alt"
        >
        </div>
        <div class="details">
          <div class="details_left">
            <div v-for="(skill, index) in project.skills" class="details_button lighter" :key="index">{{ skill }}</div>
          </div>
          <div class="details_right">
            <span class="material-symbols-outlined lighter" :class="{ 'liked': project.liked }" @click="useProjectsStore().toggleProjectLike(project.id)">favorite</span>
          </div>
        </div>
        <div v-html="project.description"></div>
        <div class="details">
          <div class="details_left">
            <Applink v-for="(link, index) in project.links" :key="index" :to="link.url" class="projectLink">
              <span class="material-symbols-outlined">{{ link.type === 'code' ? 'code' : 'visibility' }}</span>View the {{ link.type }}
            </Applink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tl_item {
  border: none;
}
.details {
  margin-bottom: 40px;
}
.projectLink {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
}
.projectLink .material-symbols-outlined {
  margin-right: 8px;
}
</style>
