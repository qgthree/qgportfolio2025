import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    users: [
      {
        name: {
          first: 'Quintus',
          last: 'Greene'
        },
        phone: '301.291.5074',
        email: 'LangstonQ@gmail.com',
        social: [
          {
            name: 'Bluesky',
            url: 'https://bsky.app/profile/onemac.bsky.social',
            handle: '@onemac.bsky.social',
            image: 'bluesky.svg'
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/quintusgreene/',
            handle: 'linkedin.com/in/quintusgreene/',
            image: 'linkedin.svg'
          },
          {
            name: 'GitHub',
            url: 'https://github.com/qgthree/',
            handle: 'qgthree',
            image: 'github-mark.svg'
          },
        ],
        statement: 'Senior Frontend Developer & UX/UI Designer with 10+ years of experience crafting intuitive digital experiences. Adept at modern frontend technologies, minimalistic design, and user-centered solutions. Proven ability to lead cross-functional teams, optimize web applications, and drive product improvements.',
        skills: {
          "Frontend Development": [
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML/CSS",
            "Vue.js",
            "React",
            "Chart.js",
            "Leaflet",
            "Component Libraries"
          ],
          "Backend & APIs": [
            "Node.js",
            "Express",
            "MongoDB",
            "GraphQL"
          ],
          "UX/UI & Accessibility": [
            "UX/UI Design",
            "Figma",
            "Adobe CC",
            "Lighthouse",
            "ANDI (508 Compliance)"
          ],
          "Cloud & DevOps": [
            "AWS"
          ],
          "Collaboration & Tools": [
            "Git",
            "Jira"
          ],
          "Core Competencies": [
            "Collaboration",
            "Leadership",
            "Accessible Design",
            "Responsive Design",
            "Quality Assurance",
            "State Management",
            "Cross-Browser & Cross-Platform Development"
          ]
        },
        experience: [
          {
            job_title: 'Senior Advisor, Web Development',
            company_name: 'Credence LLC',
            location: 'Washington, D.C.',
            joined: '2024-01', //YYYY-MM
            left: '', //YYYY-MM
            current: true,
            description: '<ul>\n<li>Conceptualized and led the development of a vendor identification platform for international crisis response using Vue 3, streamlining access to critical resources.</li>\n<li>Advised and guided the migration of four web applications from legacy systems to the ServiceNow platform to improve security and scalability.</li>\n<li>Led cross-functional teams to review and test applications, ensuring adherence to design and accessibility standards.</li>\n<li>Collaborated with graphic design team to redesign and prototype public-facing web properties, including cidi.usaid.gov.</li>\n<li>Provided expert analysis of UX/UI designs presented by partnering contractors, improving usability and functionality.</li>\n</ul>',
          },
          {
            job_title: 'Senior Web Developer',
            company_name: 'Macfadden',
            location: 'Washington, D.C.',
            joined: '2019-01',
            left: '2025-01',
            current: false,
            description: '<ul>\n<li>Spearheaded the design and development of a monitoring & evaluation tool under tight deadlines, earning an award from USAID Food for Peace.</li>\n<li>Developed a Vue 2-based dashboard for USAID’s Bureau for Humanitarian Assistance (BHA), enhancing program planning capabilities.</li>\n<li>Led the redesign of BHA’s Jobs Portal, transforming UI concepts into functional prototypes and integrating with a .NET backend through collaboration.</li>\n<li>Designed and led a team to build the “International Authorities Database,” a Drupal-based platform for cross-agency policy reference in international crisis response.</li>\n</ul>',
          },
          {
            job_title: 'Web Developer',
            company_name: 'American Society of Hematology',
            location: 'Washington, D.C.',
            joined: '2016-05',
            left: '2018-12',
            current: false,
            description: '<ul>\n<li>Designed and developed an interactive "text to donate" application using Vue 2 and Firebase, showcased at ASH Annual Meeting, contributing to record fundraising.</li>\n<li>Built the Sickle Cell Disease Coalition (SCDC) website on GitHub Pages, integrating with CloudCannon CMS and training the SCDC team for content management.</li>\n<li>Managed hematology.org, enhancing component libraries, testing cross-browser compatibility, and optimizing user engagement through Google Analytics.</li>\n</ul>',
          },
          {
            job_title: 'Freelance Web Developer',
            company_name: '',
            location: 'Washington, D.C.',
            joined: '2014-06',
            left: '2016-05',
            current: false,
            description: '<ul>\n<li>Contributed to World Wildlife Fund’s “Apps for Earth” partnership with Apple, conducting testing/debugging for the organization’s ”WWF Together" iOS app.</li>\n<li>Designed html email event invitations for The Detroit Institute of Arts.\n<li>Created digital assets and illustrations used in a UCLA Neuroscience study.</li>\n</ul>',
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
