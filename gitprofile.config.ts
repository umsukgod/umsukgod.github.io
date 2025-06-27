// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'umsukgod', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Minseok Kim',
    description: '',
    imageURL: '',
  },
  social: {
    // linkedin: 'ariful-alam',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://imo.snu.ac.kr',
    phone: '',
    email: 'minseok@imo.snu.ac.kr',
  },
  resume: {
    fileUrl:
    '', // Empty fileUrl will hide the `Download Resume` button.
    // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'IsaacGym',
    "DartSim",
    'MotionBuilder',
    'Blender'
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    {
      company: 'LG AI Research',
      position: 'Research Intern',
      from: 'March 2022',
      to: 'August 2022',
      companyLink: 'https://www.lgresearch.ai/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'KAIST',
      degree: 'B.S. in Compute Science',
      from: '2012',
      to: '2017',
    },
    {
      institution: 'Seoul National University',
      degree: 'Ph.D. in Computer Science',
      from: '2017',
      to: 'Present',
    },
  ],
  publications: [
    {
      teaser: 'visa_gif_zoom.gif',
      title: 'ViSA: Physics-based Virtual Stunt Actors for Ballistic Stunts',
      conferenceName: 'SIGGRAPH 2025 (Journal Track)',
      journalName: 'ACM Transactions on Graphics',
      authors: 'Minseok Kim, Wonjeong Seo, Sung-Hee Lee, Jungdam Won',
      link: 'https://drive.google.com/file/d/1THMwsGWLqivQCxL7jDl8pi2meyJjkWJV/view?usp=sharing',
      description:
        'We introduce ViSA (Virtual Stunt Actors), an interactive animation system using deep reinforcement learning to generate realistic ballistic stunt actions. It efficiently produces dynamic scenes commonly seen in films and TV dramas, such as traffic accidents and stairway falls. A novel action space design enables scene generation within minutes.',
    },
    {
      teaser: 'fdmr_gif.gif',
      title: 'Functionality-Driven Musculature Retargeting',
      conferenceName: '',
      journalName: 'Computer Graphics Forum',
      authors: 'Hoseok Ryu, Minseok Kim, Seungwhan Lee, Moon Seok Park, Kyoungmin Lee, Jehee Lee',
      link: 'https://mrl.snu.ac.kr/research/ProjectFunctionalityDriven/Functionality_Driven_Musculature_Retargeting.pdf',
      description:
        'We present a novel retargeting algorithm that transfers the musculature of a reference anatomical model to new bodies with different sizes, body proportions, muscle capability, and joint range of motion while preserving the functionality of the original musculature as closely as possible. The retargeted model is simulation-ready, so we can physically simulate muscle-actuated motor skills with the model.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
