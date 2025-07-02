import {
  mobile,
  annauniv,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  firebase,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  expressjs,
  threejs,
  bdms,
  anderson,
  github,
  c,
  cpp,
  python,
  java,
  sql,
  oracle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coding Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Express JS",
  //   icon: expressjs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "github",
  //   icon: github,
  // },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "Oracle",
  //   icon: oracle,
  // },
];

export const educations = [
  {
    title: "B.E. Computer Science and Engineering",
    school_name: "Madras Institute of Technology, Anna University – Chennai",
    icon: annauniv,
    iconBg: "#fff",
    date: "2023 - 2027",
    points: [
      "CGPA: 9.54 / 10 (Current)",
      "Completed core courses: Data Structures, Algorithms, DBMS, Java Programming, and Object-Oriented Programming.",
      "Built multiple full-stack web applications using React, Node.js, and MongoDB.",
      "Engaged in academic and side projects in AI development, IoT, and software systems.",
      "Active design team member in various technical and cultural clubs.",
    ],
  },
  {
    title: "Higher Secondary Course (11th & 12th Grade)",
    school_name: "Anderson Higher Secondary School, Kanchipuram",
    icon: anderson,
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Scored 98.83% in Higher Secondary Board Exams.",
      "Achieved an exceptional rank in JEE Mains during 12th grade.",
      "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      "Consistently topped the class across both years.",
      "Participated in multiple inter and intra-school quiz competitions.",
    ],
  },
  {
    title: "SSLC (10th Grade and below)",
    school_name:
      "Bharathidasan Matriculation Higher Secondary School, Kanchipuram",
    icon: bdms,
    iconBg: "#fff",
    date: "2009 - 2021",
    points: [
      "Maintained top rank throughout all academic years.",
      "Recognized for excellence in Mathematics and Science subjects.",
      "Represented school in various intra-school quiz and general knowledge competitions.",
      "Built early interest in programming through basic logic-building and computer projects.",
    ],
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Travel Itinerary App",
    description:
      "Developed a chat-based AI travel itinerary generation app using the MERN stack and the Gemini API for chat responses. Integrated a dynamic expense tracker and implemented Firebase Authentication for secure login and signup functionality.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs-Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini-AI",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "gray-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Hack-Hero-17/Ai-Travel-Itinerary.git",
  },
  {
    name: "Placeify – Personalized App for Managing your Favorite Spots",
    description:
      "Placeify is a smart web app that helps users discover and organize favorite spots—like restaurants, parks, and shops—using Google Maps & Places API. With JWT-based authentication, users can securely manage personalized, categorized place lists.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs-Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Google-Maps-API",
        color: "yellow-text-gradient",
      },
      {
        name: "JWT-Authentication",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hack-Hero-17/Placeify-Frontend.git",
  },
  {
    name: "IOT-Based Irrigation Control System",
    description:
      "An IOT Based Irrigation Control and Management System based on moisture, humidity and temperature levels developed on MERN stack with IOT & MQTT protocol. The system allows users to monitor and control irrigation systems remotely, ensuring efficient water usage and crop management.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "IOT-ESP32",
        color: "green-text-gradient",
      },
      {
        name: "MQTT Protocol",
        color: "pink-text-gradient",
      },
      {
        name: "Real-time Monitoring",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Hack-Hero-17/Irrigation-Control-System.git",
  },
];

export { services, technologies, testimonials, projects };
