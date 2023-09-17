import taskManager from '../assets/ReactTaskManager.jpg'
import marvelGame from '../assets/MarvelGame.jpg'
import map from '../assets/map.jpg'
import cad from '../assets/cad.jpg'
import memoryGame from '../assets/game.jpg'

export const myProjects = [
  {
    name:"Marvel Game",
    description: 'Team project for a charity competition, technologies: React, Redux, MockAPI.',
    img: marvelGame,
    codeLink: 'https://github.com/andrsvsrg/marvel-game',
    website: 'https://andrsvsrg.github.io/marvel-game/'
  },
  {
    name:"Task manager",
    description: 'Creations for consolidating knowledge on React, Redux, LocalStorage.',
    img: taskManager,
    codeLink: 'https://github.com/andrsvsrg/reactToDo/tree/copyForComment',
    website: 'https://andrsvsrg.github.io/reactToDo/'
  },
  {
    name:"Interactive Map",
    description: 'Created during the IT competition DEV-Challenge, on vanilla JS + Canvas, without libraries',
    img: map,
    codeLink: 'https://github.com/andrsvsrg/dev-challenge',
    website: 'https://andrsvsrg.github.io/dev-challenge/'
  },
  {
    name:"Mini CAD program",
    description: 'The most interesting test task that I decided to scale, the main emphasis was on OOP and design patterns. (JS Classes)',
    img: cad,
    codeLink: 'https://github.com/andrsvsrg/cadUpdated',
    website: 'https://andrsvsrg.github.io/cadUpdated/'
  },
  {
    name:"Memory Game",
    description: 'Designed to consolidate knowledge of JS and practice with algorithms.',
    img: memoryGame,
    codeLink: 'https://github.com/andrsvsrg/game',
    website: 'https://andrsvsrg.github.io/game/'
  }
]


export const skills = [
  {
    name:'HTML + CSS(SCSS)',
    description: 'I confidently create complex UI elements.',
    percentage: '90'
  },
  {
    name:'JavaScript(Typescript)',
    description: 'Solid knowledge from primitives to asynchronous server requests and event loop',
    percentage: '90'
  },
  {
    name:'React + Redux',
    description: 'Advanced level using various libraries and creating custom hooks.',
    percentage: '70'
  },
  {
    name:'Node.js, Express.js, MongoDB(mongoose)',
    description: 'Beginner level, building simple APIs, registration and interaction with the database.',
    percentage: '45'
  },
  {
    name:'OOP and design patterns',
    description: 'I have knowledge of OOP principles and basic design patterns',
    percentage: '60'
  },
  {
    name:'Figma',
    description: 'Confident knowledge even for creating a site design from scratch.',
    percentage: '70'
  }
]