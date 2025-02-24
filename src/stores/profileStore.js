import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    users: [
      {
        name: {
          first: 'Quintus',
          last: 'Greene'
        },
        statement: 'Senior designer/developer with 10+ years of experience; passionate about intuitive, minimalist design; adept at clear communication; and skilled in modern frontend technologies',
        skills: [
          { name: 'UX/UI Design', type: 'design' },
          { name: 'Frontend Development', type: 'frontend' },
          { name: 'Data Visualization', type: 'frontend' },
          { name: 'Project Management', type: 'general' },
          { name: 'JavaScript', type: 'frontend' },
          { name: 'HTML/CSS', type: 'frontend' },
          { name: 'TypeScript', type: 'frontend' },
          { name: 'Vue.js', type: 'frontend' },
          { name: 'Leaflet', type: 'frontend' },
          { name: 'Chart.js', type: 'frontend' },
          { name: 'ANDI (508 Compliance)', type: 'frontend' },
          { name: 'Node.js', type: 'backend' },
          { name: 'Express', type: 'backend' },
          { name: 'GraphQL', type: 'backend' },
          { name: 'MongoDB', type: 'backend' },
          { name: 'AWS', type: 'devops' },
          { name: 'Git', type: 'general' },
          { name: 'Jira', type: 'general' },
          { name: 'Adobe CC', type: 'design' },
          { name: 'Figma', type: 'design' }
        ],
        experience: [
          {
            job_title: 'Senior Advisor, Web Development',
            company_name: 'Credence LLC',
            location: 'Washington, D.C.',
            joined: '2024-01', //YYYY-MM
            left: '', //YYYY-MM
            current: true,
            description: 'Guide and facilitate development of web applications. Advise project requirements. Lead UX design and UI development initiatives. Examine and provide expert analysis of concepts and designs. Test applications and ensure accessibility standards are met.',
          },
          {
            job_title: 'Senior Web Developer',
            company_name: 'Macfadden',
            location: 'Washington, D.C.',
            joined: '2019-01',
            left: '2025-01',
            current: false,
            description: 'Led development of web applications for USAID’s Bureau for Humanitarian Assistance (BHA). Tested/debugged applications. Noteworthy achievements include design/development of: a monitoring and evaluation reporting tool for partner orgs; interactive tools to map and visualize award data; BHA’s jobs portal; BHA’s International Authorities Database (USGIAD); and BHA’s Center for International Disaster Information website (CIDI).',
          },
          {
            job_title: 'Web Developer',
            company_name: 'American Society of Hematology',
            location: 'Washington, D.C.',
            joined: '2016-05',
            left: '2018-12',
            current: false,
            description: 'Led UX design projects. Developed new applications and features. Optimized web content and navigation. Tested and debugged applications. Maintained web style guide. Measured and analyzed user engagement via Google Analytics.',
          },
          {
            job_title: 'Freelance Web Developer',
            company_name: '',
            location: 'Washington, D.C.',
            joined: '2014-06',
            left: '2016-05',
            current: false,
            description: 'Designed/developed web properties and assets for clients such as the Detroit Institute of Arts and UCLA. Noteworthy projects include an assignment with the World Wildlife Fund, which involved supporting the organization’s “Apps for Earth” partnership with Apple.',
          }
        ],
        education: [
          {
            school_name: 'Wayne State University',
            degree: 'Bachelor of Science, Business Administration',
            image_1: '',
            image_2: ''
          },
          {
            school_name: 'College for Creative Studies',
            degree: 'CE Coursework, Digital Arts',
            image_1: '',
            image_2: ''
          }
        ],
        id: 1
      }
    ]
  })
});
