<script setup>
import Filters from '@/components/Filters.vue'

defineProps({
  thoughts: Array,
  filter: String
})

const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}
</script>

<template>
  <main class="mainContent">
    <Filters
      :filters="['thoughts']"
      :qresult="filter"
      qkey="filter"
    />
    <div class="verticalContent">
      <div class="tl_item" v-for="(thought) in thoughts" :key="thought.id">
        <div class="details">
          <div class="details_left">
            <span v-if="thought.user.userImage" class="userImage" v-bind:style="{ backgroundImage: 'url(' + getImageUrl(thought.user.userImage) + ')' }"></span>
            <span v-else class="material-symbols-outlined">account_circle</span>
            <span>{{ thought.user.username }}</span>
            <span>&nbsp;∙&nbsp;</span>
            <span class="lighter">{{ thought.date }}</span>
          </div>
          <div class="details_right">
          </div>
        </div>
        <div v-html="thought.text"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.content_banner:hover .content_banner_overlay {
  opacity: 1;
}
</style>
