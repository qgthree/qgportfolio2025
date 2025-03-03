<script setup>
import Thoughts from '@/components/Thoughts.vue'
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useThoughtsStore } from '@/stores/thoughtsStore'

const thoughts = useThoughtsStore().thoughts.sort((a,b) => b.date - a.date);
const route = useRoute();
const filter = ref(route.query.filter);

watch(() => route.query, (newQuery) => {
  filter.value = newQuery.filter;
});
</script>

<template>
  <div id="ThoughtView" class="two-column">
    <div class="two-column_left">
      <Thoughts :thoughts="thoughts" :filter="filter" />
    </div>
    <div class="two-column_right">
    </div>
  </div>
</template>
<style scoped>
.two-column_right {
  background-image: url('@/assets/images/thinker.jpg');
}
</style>
