import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    User: {
      name: {
        first: 'Quintus',
        last: 'Greene'
      },
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
    },
    id: "1"
  })
});
