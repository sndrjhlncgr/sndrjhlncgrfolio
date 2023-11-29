export const METADATA = {
  author: "Sandro Cagara",
  title: "Sandro Cagara | Full Stack Developer",
  description: "Sandro Cagara is a Senior Full Stack Developer from philippines, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.sandrocagara.me/",
  keywords: [
    "Sandro Cagara",
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  language: "English",
};

export const INTRO = {
  firstname: "Sandro",
  lastname: "Cagara",
  about: "some about me description here..."
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Services",
    ref: "services",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "$ A Full Stack Developer",
  "$ A Graphic Designer",
  "$ A Gamer",
  "$ A Content Creator",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:sandrojhulianocagara@gmail.com",
  },
  {
    name: "github",
    url: "https://github.com/sndrjhlncgr",
  },
  {
    name: "medium",
    url: "https://medium.com/sandrocagara",
  },
  {
    name: "stackoverflow",
    url: "https://stackoverflow.com/users/13614769/sandro-jhuliano-cagara",
  },
  {
    name: "behance",
    url: "https://behance.net/sandrocagaraofficial",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/sandrocagara",
  },
  {
    name: "dev",
    url: "https://dev.to/sandrocagara",
  },
  {
    name: "codesandbox",
    url: "https://codesandbox.io/u/sandrocagara",
  },
];

export const SKILLS = {
  id: "skills",
  title: "My Skills",
  description:
    "I like to take responsibility to craft aesthetic user experience using modern frontend architecture.",
  languagesAndTools: [
    "php",
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "python",
    "nodejs",
    "webpack",
    "vite",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "laravel",
    "codeigniter",
    "materialui",
    "react",
    "bootstrap5",
    "tailwind",
    "redux",
    "jquery",
    "nextjs",
    "tailwindcss",
    "vue",
    "antdesign",
    "express",
  ],
  databases: ["mysql", "mongodb", "sql-server"],
  developmentTools: [
    "git",
    "gitlab",
    "jira",
    "jenkins",
    "docker",
    "xampp",
    "visual-studio-code",
    "postman",
    "linux",
  ],
  graphicTechnologies: [
    "adobe-photoshop",
    "adobe-illustrator",
    "adobe-lightroom",
    "adobe-audition",
    "adobe-after-effects",
    "adobe-premiere",
  ],
};

export const PROJECTS = {
  id: "projects",
  title: "My Projects",
  description:
    "Some things I've built with love, expertise and a pinch of magical ingredients.",
  lists: [
    {
      name: "HELP",
      image: "/projects/no-image.png",
      blurImage: "/projects/blur/no-image-blur.png",
      description: {
        title: "Hospital Emergency Room Link Program",
      },
      gradient: ["#ffba08", "#faa307"],
      url: "https://test.app/",
      tech: ["codeigniter", "jquery", "sql-server", "bootstrap5", "docker"],
    },
    {
      name: "Love, Skin",
      image: "/projects/no-image.png",
      blurImage: "/projects/blur/no-image-blur.png",
      description: {
        title: "Love, Skin (Aesthetic clinic corp)",
      },
      gradient: ["#e29578", "#ffddd2"],
      url: "https://test.app/",
      tech: [
        "laravel",
        "react",
        "tanstack-query",
        "materialui",
        "redux",
        "mysql",
      ],
    },
    {
      name: "Spotify Status",
      image: "/projects/no-image.png",
      blurImage: "/projects/blur/no-image-blur.png",
      description: {
        title: "Spotify Status (readme)",
      },
      gradient: ["#16e58b", "#5ef550"],
      url: "https://github.com/sndrjhlncgr/README-Spotify-Status",
      tech: ["python", "flask", "vercel", "spotify"],
    },
    {
      name: "Laravel Authentication Package",
      image: "/projects/no-image.png",
      blurImage: "/projects/blur/no-image-blur.png",
      description: {
        title: "Laravel Native Multi Authentication",
      },
      gradient: ["#669bbc", "#003049"],
      url: "https://github.com/sndrjhlncgr/Laravel-Native-Multi-Authentication-5.6",
      tech: ["laravel", "php"],
    },
    {
      name: "Stream Overlay",
      image: "/projects/no-image.png",
      blurImage: "/projects/blur/no-image-blur.png",
      description: {
        title: "Valorant Stream Overlay",
      },
      gradient: ["#fd4556", "#bd3944"],
      url: "https://www.behance.net/gallery/115842267/Valorant-Stream-Overlay",
      tech: ["adobe-photoshop"],
    },
  ],
};

export const WORK = {
  id: "work",
  title: "Experience",
  description: "A quick recap of where I've worked.",
  lists: [
    {
      id: 1,
      company: "Love, Skin (AESTHETIC CLINIC CORP)",
      title: "Full Stack Developer",
      location: "Taguig Philippines",
      range: "NOVEMBER 2022 - PRESENT",
      responsibilities: [
        "Responsible for writing clean code and driving technical design.",
        "Implementing user interfaces, features, maintaining cleanliness and quality of code both front end and backend.",
        "Setup CI with Jenkins and make use of wide range of plugins available to setup smooth developer friendly workflows.",
        "Setup full CI/CD pipelines so that each commit a developer makes will go through standard process of software lifecycle and gets tested well enough before it can make it to the production.",
        "Supervise and guide other developers.",
        "In charge of releasing and deploying builds to development, staging and productionEnvironment.",
        "Gathered requirements from business stakeholders and translated them into technical specifications.",
      ],
      url: "_________________",
      video: "_________________",
    },
    {
      id: 2,
      company: "National Center for Mental Health",
      title: "Full Stack Developer",
      location: "Mandaluyong, Philippines",
      range: "APRIL 2021 - PRESENT",
      responsibilities: [
        "Develop front end website architecture and features to enhance the user experience.",
        "Worked on the company (ER, OPD and IPD) information system including login authentication and user interface implementations and etc.",
        "Responsible for writing clean code and driving technical design.",
        "Supervise and guide entry-level developers; responsible for reviewing their code.",
        "Assigned to mentor some of the junior developers in the team.",
        "Participated in interviewing and recruiting candidates.",
        "In charge of releasing and deploying builds to development, staging and production environment",
        "Approve merge/pull request and set up task breakdown for junior developers during the development",
        "Ensures proper documentation and reports in all stages of the development cycle",
      ],
      url: "_________________",
      video: "_________________",
    },
    {
      id: 3,
      company: "Vast Bridges",
      title: "PHP Developer",
      location: "Mandaluyong, Philippines",
      range: "JULY 2019 - FEBRUARY 2021",
      responsibilities: [
        "Responsible for writing clean code and driving technical design.",
        "Building APIs and RESTful services and in charge for implementing Mailshake, hunterio, and ZeroBounce APIs. for exporting and importing huge amount of data.",
        "Implementing user interfaces and maintaining cleanliness of code both front end and backend.",
        "In charge of creating scalable API endpoints for the project.",
        "Integrate payment service using stripe.",
      ],
      url: "_________________",
      video: "_________________",
    },
    {
      id: 4,
      company: "System Administrator (INTERN)",
      title: "TTEC - TeleTech",
      location: "Eastwood, Quezon City, Philippines",
      range: "JAN 2019 – MAY 2019",
      responsibilities: [
        "Assisting agents who are having a problem with their pc/laptop.",
        "Replacing pc/laptop parts sometimes.",
      ],
      url: "_________________",
      video: "_________________",
    },
  ],
};

export const SERVICES = {
  id: "services",
  title: "Services",
  description: "A lot of things i can provide for you.",
  lists: [
    {
      id: 1,
      title: "Web Design",
      description: "Custom made web design templates",
      icon: "/icons/test.svg",
      gradient: ["#669bbc", "#003049"],
    }, 
    {
      id: 2,
      title: "Web Applications",
      description: "Web systems with functionalities",
      icon: "/icon",
      gradient: ["#669bbc", "#003049"],
    },
    {
      id: 3,
      title: "Layout Editing",
      description: "Tarpaulin Designs, icons, storyboards",
      icon: "/icon",
      gradient: ["#669bbc", "#003049"],
    },
    {
      id: 4,
      title: "Troubleshooting",
      description: "Fixing software problems in computers",
      icon: "/icon",
      gradient: ["#669bbc", "#003049"],
    },
    {
      id: 5,
      title: "Computer Hardware Upgrade",
      description: "Upgrade the components of personal computer",
      icon: "/icon",
      gradient: ["#669bbc", "#003049"],
    },
    {
      id: 6,
      title: "Additional Services",
      description: "Integrations, Custom Web Systems",
      icon: "/icon",
      gradient: ["#669bbc", "#003049"],
    },
  ],
};
