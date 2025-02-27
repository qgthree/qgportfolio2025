<script setup>
import { useProfileStore } from '@/stores/profileStore'
import Filters from '@/components/Filters.vue'
import Applink from '@/components/Applink.vue'

const profile = useProfileStore().users.find(user => user.id === 1);

const getImageUrl = (assetName) => {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href
}

defineProps({
  filter: String
})
</script>

<template>
  <main class="mainContent">
    <Filters
      :filters="[`contact ${profile.name.first}`]"
      :qresult="filter"
      qkey="filter"
    />
    <div class="verticalContent" v-if="!filter">
      <div class="content_item">
        <div class="content_details">
          <span class="material-symbols-outlined">phone_in_talk</span>Phone: {{ profile.phone }}
        </div>
        <div class="content_details">
          <span class="material-symbols-outlined">mail</span>Email: {{ profile.email }}
        </div>
        <div class="content_details" v-for="(platform, index) in profile.social" :key="index">
          <img :src="getImageUrl(platform.image)" />
          <span>{{ platform.name }}:&nbsp;</span>
          <Applink :to="platform.url">{{ platform.handle }}</Applink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .content_details > .material-symbols-outlined,
  .content_details > img {
    margin-right: 8px;
    width: 24px;
    height: auto;
  }
</style>
