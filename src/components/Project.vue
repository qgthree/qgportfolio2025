<script setup>
defineProps({
  Projects: Array
})
</script>

<template>
  <Filters filter1="designer" filter2="developer" filter3="advisor" />
  <section id="tl_items">
    <transition-group name="tl_item" tag="div">
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
            <span class="material-symbols-outlined lighter" :class="{ 'liked': project.liked }" @click="useProjectsStore().toggleProjectLike(project.id)">favorite</span>
          </div>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<style scoped>
.tl_item {
  transition: all 0.3s;
}

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

.tl_item-enter, .tl_item-leave-to
  /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-50%);
  }
  .tl_item-leave-active {
    position: absolute;
  }
</style>
