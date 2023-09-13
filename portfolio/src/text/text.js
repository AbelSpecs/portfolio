import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import js from '../assets/techs/javascript.png';
import react from '../assets/techs/reactjs.png';
import css from '../assets/techs/css.png';
import git from '../assets/techs/git.png';
import mongo from '../assets/techs/mongodb.png';
import tailwind from '../assets/techs/tailwind.png';
import typescript from '../assets/techs/typescript.png';
import threejs from '../assets/techs/threejs.svg';
import html from '../assets/techs/html.png';
import nodejs from '../assets/techs/nodejs.png';
import angular from '../assets/techs/angular.png';
import csharp from '../assets/techs/csharp.png';
import heroes from '../assets/projects/heroes_app_react.png';
import gifts from '../assets/projects/gift-app.png';
import calendar from '../assets/projects/calendar.png';
import hogwarts from '../assets/projects/harrypotter.png';
import social from '../assets/projects/Social.png';
import aerolab from '../assets/projects/aerloab_challenge.png';
import supershooter from '../assets/projects/supershooter.png'; 

export const ocupation = [
    {
        id: 'frontend',
        title: 'FrontEnd Developer',
        icon: web
    },
    {
        id: 'fullstack',
        title: 'FullStack Developer',
        icon: mobile 
    }

]

export const experience = [
    {
        title: 'FrontEnd Developer',
        place: 'World Cloud Services',
        text: [
            {
                activity: 'Develop Features for an insurances application'
            },
            {
                activity: 'Develop a new insurances application'
            }
        ]
    },
    {
        title: 'Software Developer',
        place: 'ASP CONSULTING',
        text: [
            {
                activity: 'Bug Fixes'
            },
            {
                activity: 'Develop new Features for their most used applications'
            },
            {
                activity: 'Began a Develop of a new application for the company'
            }
        ]
    },
    {
        title: 'FullStack Developer',
        place: 'Prodiit',
        text: [
            {
                activity: 'Helped to develop some ideas for a new autocad application'
            },
            {
                activity: 'Render .dxf files into a canvas of web using threejs library'
            }
        ]  
    }
]

export const technologies = [
    {
        tech: 'js',
        img: js
    },
    {
        tech: 'html',
        img: html
    },
    {
        tech: 'css',
        img: css
    },
    {
        tech: 'git',
        img: git
    },
    {
        tech: 'nodejs',
        img: nodejs
    },
    {
        tech: 'mongo',
        img: mongo
    },
    {
        tech: 'tailwind',
        img: tailwind
    },
    {
        tech: 'typescript',
        img: typescript
    },
    {
        tech: 'react',
        img: react
    },
    {
        tech: 'threejs',
        img: threejs
    },
    {
        tech: 'angular',
        img: angular
    },
    {
        tech: 'csharp',
        img: csharp
    }
]

export const projects = [
    {
        id: 'heroesapp',
        name: 'Heroes App',
        icon: heroes,
        description: 'web app where you can see marvel heroes, necessary to understand react basic concepts',
        technologies: [
            'javascript', 'react'
        ]
    },
    {
        id: 'giftapp',
        name: 'Gifts App',
        icon: gifts,
        description: 'web app where you can search gifs, you can add a category, concepts like local storage, useEffect work with apis where used here',
        technologies: [
            'javascript', 'react'
        ]
    },
    {
        id: 'calendar',
        name: 'Calendar App',
        icon: calendar,
        description: 'calendar web app, can save events for a personal account, it was made using redux to learn the state managament',
        technologies: [
            'javascript', 'react', 'redux', 'mongoDb', 'nodejs', 'express'
        ]
    },
    {
        id: 'hogwarts',
        name: 'Harry Potter App',
        icon: hogwarts,
        description: 'hogwarts web app, was test for an interview, is made with angular and the information is from an api',
        technologies: [
            'javascript', 'angular'
        ]
    },
    {
        id: 'social',
        name: 'Social App',
        icon: social,
        description: `social app, is a twitter clone, it has a backend made with nodejs, has likes and comments functionality and is connected with
                        the cohereAi Api so in the feed you can ask questions to the AI and it will answer you like someone writting a new tweet`,
        technologies: [
            'javascript', 'react', 'nodejs', 'mongo' , 'express', 
        ]
    },
    {
        id: 'aerolab',
        name: 'AeroLab App',
        icon: aerolab,
        description: `this aerolab app, is a mini store for electronics, a simple app made with an api but it has a service worker which allows this application
                        to work with no connection to internet, it allows you to add or remove items to the cart changing the points of your account`,
        technologies: [
            'javascript', 'react', 'service workers', 
        ]
    },
    {
        id: 'supershooter',
        name: 'SuperShooter Game',
        icon: supershooter,
        description: `my first game, doing it with C# and unity, it has been a constant exploration with this tools, is a first person shooter and 
                        very interested in this area`,
        technologies: [
            'unity', 'C#' 
        ]
    },
]

export const links = [
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'work',
        title: 'Work'
    },
    {
        id: 'project',
        title: 'Projects'
    }
]