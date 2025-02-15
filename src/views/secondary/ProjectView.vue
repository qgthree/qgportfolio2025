<script setup>
  import Filters from '../../components/Filters.vue'
  import Skills from '../../components/Skills.vue'
</script>

<template>
  <div id="ProjectView" class="two-column">
    <div class="two-column_left">
      <Filters filter1="designer" filter2="developer" filter3="advisor" />
      <router-view v-slot="{ Component }" name="timeline">
        <transition name="slide-up" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div class="two-column_right">
    </div>
  </div>
</template>
<style scoped>
.two-column_right {
  background-image: url('../../assets/images/workdesk.jpg');
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
}
</style>
