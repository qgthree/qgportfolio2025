<script setup>
  defineProps({
    filter1: String,
    filter2: String,
    filter3: String,
    filter4: String
  })
</script>

<template>
  <div id="filters">
    <router-link class="filter" :to="{ name: filter1 }" tag="span">
      {{ filter1 }}
    </router-link>
    <router-link v-if="filter2" class="filter" :to="{ name: filter2 }" tag="span">
      {{ filter2 }}
    </router-link>
    <router-link v-if="filter3" class="filter" :to="{ name: filter3 }" tag="span">
      {{ filter3 }}
    </router-link>
    <router-link v-if="filter4" class="filter" :to="{ name: filter4 }" tag="span">
      {{ filter4 }}
    </router-link>
  </div>
</template>

<style scoped>
#filters {
  width: 100%;
  max-width: 700px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.filter {
  display: inline-flex;
  padding: 5px 0px 5px 0px;
  font-size: 14px;
  font-weight: 300;
  color: #000;
  margin-right: 30px;
  text-transform: capitalize;
}
.filter.router-link-active {
  font-weight: 400;
}
.filter:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -1px;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
}
@media (hover: hover) {
  .filter:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
.filter.router-link-exact-active:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
