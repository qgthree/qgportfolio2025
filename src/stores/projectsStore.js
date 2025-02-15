import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: [
      {
        "title": "Awards Planning Tool",
        "description": "BHA’s Nigeria Field Operations Team desired a tool to visualize awards data, showing where in the country our partners are committed to perform, and within what sectors of engagement. This would aid the team as they plan programming for the upcoming cycle, and make it easier to observe gaps. The primary interface was envisioned as a map.\n\nI had recently become enamoured with a web interactive presented by ESPN titled “Bron Bron Land.” The layout used a sidepanel to navigate Lebron’s various ventures in Los Angeles, with descriptions that collapsed into the sidepanel. Users could click on projects using the panel, or interact directly with a map to toggle the same project descriptions. I began to envision how I could employ a similar design for our project.\n\nIt would be easy enough from a design perspective. However, I wanted the navigation to be multi-dimensional. We would need to swap sidepanels between partners, sectors, and locations. Additionally, we would need the ability to filter awards to display only those that remained active beyond a specific date. I had fun designing two separate components for this task, and decided to include them both.\n\nI built the frontend in Vue 2, using Leaflet as our mapping library. Because it was an internal product, I decided to use Electron to deliver the project as a desktop application. The demo provided uses sample data.",
        "skills": ["Vue 2", "Leaflet", "Electron", "JavaScript", "HTML/CSS"],
        "year": "2021",
        "banner": "awards_planning_tool.png",
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "url": "https://qgthree.github.io/ng-map_demo/#/",
        "role": ["designer", "developer"]
      },
      {
        "title": "Global Resource Database",
        "description": "As a requirement for its contract with USAID’s Bureau for Humanitarian Assistance, Credence was tasked with developing a reference tool to aid in identifying vendors available for emergency crisis responses. I was asked to help conceptualize the tool and lead a team to build it. For this project, I requested one additional developer, to assist with the backend.\n\nI began by working with the contract’s Program Director to discover requirements. To identify use cases, I also met with intended users. We determined the most important need was the ability to cross-reference geographic locations and service categories. A map would provide an easy interface, alongside other UI components for listing and filtering vendors.\n\nI designed a low-fidelity mockup in Figma and worked with the client to design a database schema from sample data. After designs were approved, we moved to development. The REST API was assigned to our junior developer, and I focused on the frontend. Due to familiarity, I chose Vue 3 and Leaflet as our framework and mapping library, respectively.",
        "skills": ["Figma", "Vue 3", "Leaflet", "JavaScript", "HTML/CSS"],
        "year": "2024",
        "banner": "GRD.png",
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Development Advisor, Credence LLC"
        },
        "url": "",
        "role": ["designer", "developer"]
      },
      {
        "title": "BHA Jobs",
        "description": "BHA's Strategic Communications Division Chief noticed that the BHA Jobs website was in desperate need of a redesign. Initially, she simply asked me to work with a designer to mockup a new look, since the project belonged to another team that lacked design expertise. But the design was so simple and clean, I was tempted to build it out anyway.\n\nFrom the designer’s mockup, I constructed a responsive frontend and handed the assets off to the .net developer, who only needed a few meetings to integrate the backend. This was such a simple and easy project, it was a delight to work on, and it didn't hurt that it produced a great deal of praise for everyone involved.",
        "skills": ["HTML/CSS", "JavaScript"],
        "year": "2022",
        "banner": "bhajobs.png",
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Developer, Macfadden"
        },
        "url": "https://qgthree.github.io/bhajobs/index.html",
        "role": ["developer", "advisor"]
      },
      {
        "role": ["advisor"],
        "user": {
          "userImage": "https://live.staticflickr.com/65535/52339866739_c8e1c10371_h.jpg",
          "username": "Senior Web Development Advisor, Credence LLC"
        },
        "year": "2023",
        "title": "Center for International Disaster Information",
        "banner": "cidi.png",
        "description": "The Wordpress site was due for a redesign. It had been neglected for too long, and now it appeared dated. After our success with the BHA Jobs website, the graphic designers and I were eager to take on another fun project.\n\nFor this project, I took a content-first approach. Several pages had unique layouts, so we needed drafts of near-final content to proceed. I began by outlining the site’s menus and taking an inventory of each page. Thereafter, I copied the text to a separate document and worked with writers from the Content Team to refine it.\n\nI went through a few different drafts with the design team to produce feasible components. After high-fidelity mockups were finalized, I expected to build the front-end, but the project took an unexpected turn: due to security concerns, IT decided to migrate the site to ServiceNow. My new role would be to advise a ServiceNow-dedicated team as they translate the designs.",
        "skills": [],
        "url": "https://qgthree.github.io/bhajobs/index.html"
      },
    ]
  })
});
