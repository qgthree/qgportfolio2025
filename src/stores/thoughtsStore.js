import { defineStore } from 'pinia';

export const useThoughtsStore = defineStore('thoughtsStore', {
  state: () => ({
    thoughts: [
      {
        "user": {
          "userImage": "qg3.jpg",
          "username": "Quintus"
        },
        'bucket': '',
        'date': '2025-02-23', //yyyy-mm-dd
        'text': '<p>What is happening!? I’m following my usual process for finding answers: searching Google, but I’m not making it to my usual sources! No Medium tutorial. No Stack. Not even a library’s docs. I’m just… immediately getting an answer from Gemini. With sample code. And it’s good! I had previously avoided coding with the help of AI, but now I guess I don’t have a choice! This feels like… playing God of War, when Atreus jumps in with the solution to a puzzle before you’re ready. But I won’t complain!</p>',
        'id': '1',
        'liked': false
      },
      {
        "user": {
          "userImage": "qg3.jpg",
          "username": "Quintus"
        },
        'bucket': '',
        'date': '2025-02-22', //yyyy-mm-dd
        'text': '<p>I believe my strength lies in making things simpler. While coding, this means exploring how to make the code as attractive as the interface. <em>Can I make it more compact? Is it easy to read? What can I remove? Is my html well-structured? Can I reuse that function or component?</em></p>\n\n<p>On the design side, the questions are similar. <em>Can we simplify the navigation? What information does the user expect to see here? What can be nested into the next view?</em></p>\n\n<p>“In character, in manner, in style, in all things, the supreme excellence is simplicity.”<br />  –  Henry Wadsworth Longfellow</p>',
        'id': '2',
        'liked': false
      },
      {
        "user": {
          "userImage": "qg3.jpg",
          "username": "Quintus"
        },
        'bucket': '',
        'date': '2025-02-21', //yyyy-mm-dd
        'text': '<p>So I found a new obsession: an accessibility testing tool named ANDI, offered by the Social Security Administration. It’s awesome. I’m using it for all projects moving forward, beginning with this portfolio (don’t look too hard at the old projects 😰). It almost gamifies meeting WCAG standards. I need more green readings!</p>',
        'id': '3',
        'liked': false
      }
    ]
  })
});
