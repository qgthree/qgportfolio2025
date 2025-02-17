<script setup />

<template>
  <div id="ProjectView" class="two-column">
    <div class="two-column_left">
      <router-view name="timeline" />
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
