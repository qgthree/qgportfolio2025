<script setup>
import { useSkillsStore } from '@/stores/skillsStore';

const data = useSkillsStore().skills;
console.log(data);

/* methods */
const updateSkill = (index) => {
  let bool = data[index].selected
  data[index].selected = !bool
}
</script>

<template>
  <section id="skills">
    <a
      v-for="(skill, index) in data"
      :key="index"
      :class="{ active: skill.selected && skill.selected === true }"
      @click="updateSkill(index)"
      class="filters_button">
      {{ skill.name }}
    </a>
  </section>
</template>

<style scoped>
.section_heading {
  border-bottom-color: #fff;
  border-bottom-width: 0.1px;
}
.section_label {
  color: #fff;
}
</style>
