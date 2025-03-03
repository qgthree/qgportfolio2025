<script setup>
import Message from '@/components/Message.vue'
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const filter = ref(route.query.filter);

watch(() => route.query, (newQuery) => {
  filter.value = newQuery.filter;
});
</script>

<template>
  <div id="MessageView" class="two-column">
    <div class="two-column_left">
      <Message :filter="filter" />
    </div>
    <div class="two-column_right">
    </div>
  </div>
</template>
<style scoped>
.two-column_right {
  background-image: url('@/assets/images/rupert.jpg');
}
</style>
