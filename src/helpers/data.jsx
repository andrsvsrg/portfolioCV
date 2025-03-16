import taskManager from "../assets/ReactTaskManager.jpg";
import marvelGame from "../assets/MarvelGame.jpg";
import map from "../assets/map.jpg";
import cad from "../assets/cad.jpg";
import memoryGame from "../assets/game.jpg";
import inst from "../assets/inst.jpg";
import React from "react";

export const myProjects = [
  {
    name: "Instagram Parser",
    description:
      "The project was created to consolidate knowledge in the backend: node js, expressJS, mongoDB",
    img: inst,
    codeLink: "https://github.com/andrsvsrg/scrap-inst-back",
    website: "",
  },
  {
    name: "Task manager",
    description:
      "Creations for consolidating knowledge on React, Redux, LocalStorage.",
    img: taskManager,
    codeLink: "https://github.com/andrsvsrg/reactToDo/tree/copyForComment",
    website: "https://andrsvsrg.github.io/reactToDo/",
  },
  {
    name: "Marvel Game",
    description:
      "Team project for a charity competition, technologies: React, Redux, MockAPI.",
    img: marvelGame,
    codeLink: "https://github.com/andrsvsrg/marvel-game",
    website: "https://andrsvsrg.github.io/marvel-game/",
  },
  {
    name: "Interactive Map",
    description:
      "Created during the IT competition DEV-Challenge, on vanilla JS + Canvas, without libraries",
    img: map,
    codeLink: "https://github.com/andrsvsrg/dev-challenge",
    website: "https://andrsvsrg.github.io/dev-challenge/",
  },
  {
    name: "Mini CAD program",
    description:
      "The most interesting test task that I decided to scale, the main emphasis was on OOP and design patterns. (JS Classes)",
    img: cad,
    codeLink: "https://github.com/andrsvsrg/cadUpdated",
    website: "https://andrsvsrg.github.io/cadUpdated/",
  },
  {
    name: "Memory Game",
    description:
      "Designed to consolidate knowledge of JS and practice with algorithms.",
    img: memoryGame,
    codeLink: "https://github.com/andrsvsrg/game",
    website: "https://andrsvsrg.github.io/game/",
  },
];

export const skills = [
  {
    name: "HTML + CSS (SCSS)",
    description: "Advanced skills in creating responsive UI elements with HTML and CSS (SCSS).",
    percentage: "95",
  },
  {
    name: "React, Redux, JavaScript",
    description: "Advanced skills in building scalable applications with React, Redux, and JavaScript.",
    percentage: "95",
  },
  {
    name: "Node.js, Express.js, MongoDB, MySQL",
    description: "Intermediate skills in building APIs and working with databases (MongoDB, MySQL).",
    percentage: "60",
  },
  {
    name: "OOP and Design Patterns",
    description: "Good understanding of OOP principles and basic design patterns.",
    percentage: "70",
  },
  {
    name: "Figma",
    description: "Confident in creating UI/UX designs and prototypes using Figma.",
    percentage: "80",
  },
];

export const skillsArr = [
  "Redux Toolkit",
  "RTK Query",
  "Styled Components",
  "Three.js",
  "ChakraUI",
  "MaterialUI",
  "Tailwind CSS",
  "Axios",
  "React Router",
  "Puppeteer",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Sequelize",
  "OAuth2",
  "WebSockets",
  "Git",
  "Docker",
  "Mongoose",
  "Nginx",
  "Linux/Unix",
  "Unit Testing (Jest, Mocha)",
  "JWT Authentication",
  "BasicAuth",
];

export const contents = {
  email: (
    <a href="mailto:androsov.srg@gmail.com" target="_blank">
      androsov.srg@gmail.com
    </a>
  ),
  telegram: (
    <a href="https://t.me/androsov_srg" target="_blank">
      Androsov_srg
    </a>
  ),
  linkedin: (
    <a
      href="https://www.linkedin.com/in/sergey-androsov-8b8964253/"
      target="_blank"
    >
      Sergey Androsov
    </a>
  ),
  phone: (
    <a href="tel:+380965445283" target="_blank">
      +38 (096) 544-52-83
    </a>
  ),
};

export const icons = {
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_73_125)">
        <path
          d="M16.484 11.976L22.635 6.632V17.259L16.484 11.976ZM8.558 12.881L10.718 14.756C11.057 15.044 11.499 15.218 11.982 15.218H11.999H12.012C12.496 15.218 12.938 15.043 13.281 14.753L13.278 14.755L15.438 12.88L22.004 18.519H1.995L8.558 12.881ZM1.986 5.365H22.016L12.395 13.721C12.2868 13.8066 12.1529 13.8531 12.015 13.853H12.001H11.988C11.8496 13.8532 11.7152 13.8063 11.607 13.72L11.608 13.721L1.986 5.365ZM1.365 6.631L7.515 11.975L1.365 17.255V6.631ZM22.965 4.19C22.725 4.07 22.443 4 22.144 4H1.859C1.56916 4.00007 1.28331 4.06751 1.024 4.197L1.035 4.192C0.724573 4.34511 0.463148 4.58198 0.280254 4.87585C0.0973606 5.16971 0.000287348 5.50887 0 5.855L0 18.027C0.000529404 18.5196 0.196452 18.9919 0.54478 19.3402C0.893108 19.6885 1.36539 19.8845 1.858 19.885H22.141C22.6336 19.8845 23.1059 19.6885 23.4542 19.3402C23.8025 18.9919 23.9985 18.5196 23.999 18.027V5.855C23.999 5.128 23.58 4.498 22.97 4.195L22.959 4.19H22.965Z"
          fill="#C9692D"
        />
      </g>
      <defs>
        <clipPath id="clip0_73_125">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  telegram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.0851 2.59688C21.9946 2.51876 21.8846 2.46681 21.7668 2.44666C21.649 2.4265 21.5279 2.4389 21.4166 2.4825L2.41725 9.91782C2.18616 10.0082 1.99064 10.1712 1.86006 10.3822C1.72948 10.5932 1.67088 10.8409 1.69307 11.0881C1.71526 11.3352 1.81704 11.5685 1.98312 11.7529C2.1492 11.9373 2.37062 12.0628 2.61412 12.1106L7.68787 13.1072V18.75C7.68798 19.0116 7.76626 19.2672 7.91266 19.484C8.05906 19.7008 8.26691 19.8689 8.50953 19.9667C8.75214 20.0646 9.01846 20.0877 9.2743 20.0331C9.53014 19.9785 9.76383 19.8487 9.94537 19.6603L12.4429 17.07L16.341 20.4872C16.579 20.6978 16.8857 20.8141 17.2035 20.8144C17.3423 20.8141 17.4802 20.7922 17.6123 20.7497C17.8288 20.6812 18.0236 20.5571 18.1772 20.3898C18.3309 20.2225 18.438 20.0178 18.4879 19.7963L22.296 3.24094C22.3228 3.12455 22.3173 3.00307 22.2801 2.88957C22.2429 2.77608 22.1755 2.67488 22.0851 2.59688ZM2.81756 11.0034C2.81397 10.9938 2.81397 10.9831 2.81756 10.9734C2.8218 10.9702 2.82655 10.9676 2.83162 10.9659L17.8044 5.10469L8.12006 12.0422L2.83162 11.0072L2.81756 11.0034ZM9.13537 18.8784C9.10954 18.9053 9.0763 18.9238 9.0399 18.9316C9.0035 18.9395 8.96559 18.9363 8.93099 18.9225C8.8964 18.9087 8.86669 18.885 8.84565 18.8543C8.82462 18.8235 8.81321 18.7872 8.81287 18.75V13.8853L11.5963 16.3228L9.13537 18.8784ZM17.3919 19.5422C17.385 19.5739 17.3697 19.6031 17.3476 19.6269C17.3255 19.6506 17.2974 19.668 17.2663 19.6772C17.2346 19.6883 17.2004 19.6907 17.1674 19.6841C17.1344 19.6775 17.1038 19.6622 17.0788 19.6397L9.15412 12.6881L20.9066 4.26563L17.3919 19.5422Z"
        fill="#C9692D"
      />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.001 9.55C12.918 8.613 14.112 8 15.501 8C16.9597 8 18.3586 8.57946 19.3901 9.61091C20.4215 10.6424 21.001 12.0413 21.001 13.5V21H19.001V13.5C19.001 12.5717 18.6322 11.6815 17.9759 11.0251C17.3195 10.3687 16.4292 10 15.501 10C14.5727 10 13.6825 10.3687 13.0261 11.0251C12.3697 11.6815 12.001 12.5717 12.001 13.5V21H10.001V8.5H12.001V9.55ZM5.00098 6.5C4.60315 6.5 4.22162 6.34196 3.94032 6.06066C3.65901 5.77936 3.50098 5.39782 3.50098 5C3.50098 4.60218 3.65901 4.22064 3.94032 3.93934C4.22162 3.65804 4.60315 3.5 5.00098 3.5C5.3988 3.5 5.78033 3.65804 6.06164 3.93934C6.34294 4.22064 6.50098 4.60218 6.50098 5C6.50098 5.39782 6.34294 5.77936 6.06164 6.06066C5.78033 6.34196 5.3988 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"
        fill="#C9692D"
      />
    </svg>
  ),
  phone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.8472 14.8557L16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06426 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.90749 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557ZM16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.50219 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235H20.25C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001Z"
        fill="#C9692D"
      />
    </svg>
  ),
};
