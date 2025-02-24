import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: [
      {
        "role": ["designer", "developer"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "year": "2019",
        "title": "Partner Reporting Tool",
        "banner": {
          "image": "prt.png",
          "alt": "Partner Reporting Tool"
        },
        "description": "<p>At USAID’s Food for Peace (FFP), a development team was already contracted to build this tool. However, they were over-extended and had underestimated the project’s urgency. FFP’s Monitoring and Evaluation Team (M&E) reached out to Macfadden to see what can be done in roughly 4 months. We formed a small team of three to take on the project. Mike Weaver served as tech lead and DevOps Engineer, and I led UX/UI design and development.</p><p>As discussions progressed, we learned the project’s requirements were more complex than we initially thought. At first, it was presented as a simple form, but we soon learned that not only we would be collecting data for over 100 analyses, we would need an accounts system to track forms through to completion for dozens of partner organizations. This would allow the orgs to fulfill their annual reporting requirement, and ultimately aid FFP’s report to Congress on the effectiveness of various programs.</p><p>Requirements continued to grow in complexity with each meeting: the app would need to store earlier projections and compare them to outcomes; partner organizations would need to enlist multiple users to complete reports; and because reports would need to progress through various FFP approvals before being accepted, FFP would need a way to provide feedback.</p><p>Mike chose Drupal as our platform, and the three of us began to identify modules that would aid with various requirements. I presented designs and diagrams to the M&E team. Mika focused on building out the forms. All three of us put in overtime to see the project through. We managed to complete it in under three months, well before our deadline, and rich with the “nice to have” features requested along the way.</p><p>The bond our team formed made this one of my most rewarding experiences. My proudest moment wasn’t even the award we received from USAID; it was when I asked Mika to present the completed application to stakeholders, after observing how hard he worked on the project, and how much he deserved the spotlight.</p>",
        "skills": ["Drupal", "JavaScript", "HTML/CSS"],
        "id": "1",
        "liked": false
      },
      /*
      {
        "role": ["designer", "developer"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "year": "2020",
        "title": "U.S. Government International Authorities Database",
        "banner": {
          "image": "usgiad.png",
          "alt": "USGIAD"
        },
        "description": "",
        "skills": ["Drupal", "JavaScript", "HTML/CSS"],
        "id": "2",
        "liked": false
      },
      */
      {
        "role": ["designer", "developer"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "year": "2021",
        "title": "Awards Planning Tool",
        "banner": {
          "image": "awards_planning_tool.png",
          "alt": "Awards Planning Tool"
        },
        "description": "<p>BHA’s Nigeria Field Office desired a tool to visualize awards data, showing where in the country our partners are committed to perform, and within what sectors of engagement. This would aid the team as they plan programming for the upcoming cycle, and make it easier to observe gaps. The primary interface was envisioned as a map.</p><p>I had recently become enamoured with a web interactive presented by ESPN titled “Bron Bron Land.” The layout used a sidepanel to navigate Lebron’s various ventures in Los Angeles, with descriptions that collapsed into the sidepanel. Users could click on projects using the panel, or interact directly with a map to toggle the same project descriptions. I began to envision how I could employ a similar design for our project.</p><p>It would be easy enough from a design perspective. However, I wanted the navigation to be multi-dimensional. We would need to swap sidepanels between partners, sectors, and locations. Additionally, we would need the ability to filter awards to display only those that remained active beyond a specific date. I had fun designing two separate components for this task, and decided to include them both.</p><p>I built the frontend in Vue 2, using Leaflet as our mapping library. Because it was an internal product, I decided to use Electron to deliver the project as a desktop application. The demo provided uses sample data.</p>",
        "skills": ["Vue 2", "Leaflet", "Electron", "JavaScript", "HTML/CSS"],
        "link": {
          "type": "demo",
          "url": "https://qgthree.github.io/ng-map_demo/#/"
        },
        "id": "3",
        "liked": false
      },
      {
        "role": ["developer", "advisor"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "year": "2022",
        "title": "BHA Jobs",
        "banner": {
          "image": "bhajobs.png",
          "alt": "BHA Jobs"
        },
        "description": "<p>BHA’s Strategic Communications Division Chief noticed that the BHA Jobs website was in desperate need of a redesign. Initially, she simply asked me to work with a designer to mockup a new look, since the project belonged to another team that lacked design expertise. The result was so simple and clean, I was tempted to build it out anyway.</p><p>From the designer’s mockup, I constructed a responsive frontend and handed the assets off to the .net developer, who only needed a few meetings to integrate the backend. This was such a simple and easy project, it was a delight to work on, and it didn’t hurt that it produced a great deal of praise for everyone involved.</p>",
        "skills": ["HTML/CSS", "JavaScript"],
        "link": {
          "type": "demo",
          "url": "https://qgthree.github.io/bhajobs/index.html"
        },
        "id": "4",
        "liked": false
      },
      {
        "role": ["advisor"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Development Advisor, Credence LLC"
        },
        "year": "2023",
        "title": "Center for International Disaster Information",
        "banner": {
          "image": "cidi.png",
          "alt": "Center for International Disaster Information"
        },
        "description": "<p>The Wordpress site was due for a redesign. It had been neglected for too long, and now it appeared dated. After our success with the BHA Jobs website, the graphic designers and I were eager to take on another project.</p><p>For this project, I took a content-first approach. Several pages had unique layouts, so we needed drafts of near-final content to proceed. I began by outlining the site’s menus and taking an inventory of each page. Thereafter, I worked with writers from the Content Team to refine the text.</p><p>I went through a few different drafts with the design team to produce feasible components. After high-fidelity mockups were finalized, I expected to build the front-end, but the project took an unexpected turn: IT decided to migrate the site to ServiceNow. My new role would be to help a ServiceNow-dedicated team translate the designs.</p>",
        "skills": ["CSS"],
        "link": {
          "type": "website",
          "url": "https://cidi.usaid.gov"
        },
        "id": "5",
        "liked": false
      },
      {
        "role": ["designer", "developer"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Development Advisor, Credence LLC"
        },
        "year": "2024",
        "title": "Global Resource Database",
        "banner": {
          "image": "GRD.png",
          "alt": "Global Resource Database"
        },
        "description": "<p>As a requirement for its contract with USAID’s Bureau for Humanitarian Assistance, Credence was tasked with developing a reference tool to aid in identifying vendors available for emergency crisis responses. I was asked to help conceptualize the tool and lead a team to build it. For this project, I requested one additional developer, to assist with the backend.</p><p>I began by working with the contract’s Program Director to discover requirements. To identify use cases, I also interviewed intended users. We determined the most important need was the ability to cross-reference geographic locations and service categories. A map would provide an easy interface, alongside other UI components for listing and filtering vendors.</p><p>I designed a low-fidelity mockup in Figma and worked with the client to design a database schema from sample data. After designs were approved, we moved to development. The REST API was assigned to my colleague, and I focused on the frontend. Due to familiarity, I chose Vue 3 and Leaflet as our framework and mapping libraries, respectively.</p>",
        "skills": ["Figma", "Vue 3", "Leaflet", "JavaScript", "HTML/CSS"],
        "id": "6",
        "liked": false
      }
    ]
  }),
  actions: {
    toggleProjectLike(id) {
      const project = this.projects.find(project => project.id === id);
      project.liked = !project.liked;
    }
  }
});
