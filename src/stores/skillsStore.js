import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    skills: [
      { name: 'Vue.js', selected: false },
      { name: 'Leaflet', selected: false },
      { name: 'JavaScript', selected: false },
      { name: 'HTML/CSS', selected: false },
      { name: 'Node.js', selected: false },
      { name: 'GraphQL', selected: false },
      { name: 'MongoDB', selected: false },
      { name: 'AWS', selected: false },
      { name: 'GraphQL', selected: false },
      { name: 'Figma', selected: false }
    ]
  })
});
