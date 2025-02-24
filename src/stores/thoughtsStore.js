import { defineStore } from 'pinia';

export const useThoughtsStore = defineStore('thoughtsStore', {
  state: () => ({
    projects: [
      {
        "role": ["designer", "developer"],
        "userID": "",
        "bucket": "",
        "date": "2019", //yyyy-mm-dd
        "thought": "",
        "id": "1",
        "liked": false
      }
    ]
  })
});
