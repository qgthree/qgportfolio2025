<script setup>
import Profile from '@/components/Profile.vue'
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const filter = ref(route.query.filter);

watch(() => route.query, (newQuery) => {
  filter.value = newQuery.filter;
});
</script>

<template>
  <div id="ProjectView" class="two-column">
    <div class="two-column_left">
      <Profile :filter="filter" />
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
