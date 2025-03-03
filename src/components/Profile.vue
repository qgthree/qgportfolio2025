<script setup>
import { useProfileStore } from '@/stores/profileStore'
import Filters from '@/components/Filters.vue'

const profile = useProfileStore().users.find(user => user.id === 1);

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
    <transition name="slide" tag="div" mode="out-in">
      <div class="verticalContent" v-if="!filter">
        <div class="content_item">
          <p>{{ profile.statement }}</p>
        </div>
      </div>
      <div class="verticalContent" v-else-if="filter === 'skills'">
        <div class="content_item" v-for="(category, key) in profile.skills" :key="key">
          <h5>{{ key }}</h5>
          <ul>
            <li class="content_details" v-for="(skill, index) in category" :key="index">{{ skill }}</li>
          </ul>
        </div>
      </div>
      <div class="verticalContent" v-else-if="filter === 'experience'">
        <div class="content_item" v-for="(job, index) in profile.experience" :key="index">
          <h5>{{ job.job_title }}</h5>
          <div class="content_details"><span v-if="job.company_name">{{ job.company_name }} | </span>{{ job.location }} | {{ job.joined }} to {{ job.left || 'present' }}</div>
          <div v-html="job.description"></div>
        </div>
      </div>
      <div class="verticalContent" v-else-if="filter === 'education'">
        <div class="content_item" v-for="(school, index) in profile.education" :key="index">
          <h5>{{ school.school_name }}</h5>
          <div>{{ school.degree }}</div>
        </div>
      </div>
    </transition>
  </main>
</template>
