<script setup>
defineProps({
  projects: Array
})

const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}
</script>

<template>
  <div id="tl_items" v-if="projects">
    <div class="tl_item" v-for="(project, index) in projects" :key="index">
      <div class="details">
        <div class="details_left">
          <span v-if="project.user.userImage" class="userImage" v-bind:style="{ backgroundImage: 'url(' + project.user.userImage + ')' }"></span>
          <span v-else class="material-symbols-outlined">account_circle</span>
          <span>{{ project.user.username }}</span>
          <span>&nbsp;∙&nbsp;</span>
          <span class="lighter">{{ project.year }}</span>
        </div>
        <div class="details_right">
          <span class="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      <h3>
        {{ project.title }}
      </h3>
      <div class="project_banner" v-bind:style="{ backgroundImage: 'url(' + getImageUrl(project.banner) + ')' }"></div>
      <div class="details">
        <div class="details_left">
          <a v-for="(skill, index) in project.skills" class="details_button" :key="index">{{ skill }}</a>
        </div>
        <div class="details_right">
          <span class="lighter"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project_banner {
  aspect-ratio: 16 / 9;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: cover;
  /* filter: grayscale(100%); */
  transition: all 0.2s ease;
  filter: grayscale(100%);
}
</style>
