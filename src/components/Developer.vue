<script setup>
import Projects from './Projects.vue'
import { useProjectsStore } from '@/stores/projectsStore';

const data = useProjectsStore().projects;
</script>

<template>
  <Projects :projects="data" />
</template>
