<script setup>
defineProps({
  filters: Array,
  qkey: String,
  qresult: String
});
</script>

<template>
  <div class="filters">
    <router-link
      class="filter"
      v-for="(value, index) in filters"
      :key="index"
      :to="index > 0 ? { query: {[qkey]: value} } : $route.path"
      :class="{ 'active': !qresult && index === 0 || qresult && qresult === value }"
      >
      {{ value }}
    </router-link>
  </div>
</template>

<style scoped>
.filters {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  max-width: 700px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: sticky;
  top: -40px;
  background-color: #fff;
  z-index: 2;
}
  & .filter {
    display: inline-flex;
    padding: 5px 0px 5px 0px;
    font-size: 0.875rem;
    font-weight: 300;
    color: #000;
    margin-right: 30px;
    text-transform: capitalize;
  }
  & .filter:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -11px;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }
  & .filter.active {
    font-weight: 400;
  }
  & .active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
@media (hover: hover) {
  .filter:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@media screen and (max-width: 800px) {
    .filter {
      margin-right: 20px;
    }
  }
</style>
