import { TechnologyCategory } from "../interfaces/TechnologyCategory";

export const getTechnologies = (): TechnologyCategory[] => [
  {
    name: 'FrontEnd',
    type: 'frontend',
    technologies: [
      {
        name: 'ReactJS',
        logo: 'react',
        experience: '6 months',
        text: 'React Jr. with 6 months working on react projects using webpack, sass and typescript. This project is developed on React :)'
      },
      {
        name: 'Blazor WebAssembly',
        logo: 'blazorWebassembly',
        experience: '1 year',
        text: 'A year working on personal projects'
      },
      {
        name: 'HTML5',
        logo: 'html5',
        text: 'Not much to say all frontend devs need it'
      },
      {
        name: 'CSS3',
        logo: 'css3',
        text: 'This one is nice too ;)'
      },
    ]
  },
  {
    name: 'BackEnd',
    type: 'backend',
    technologies: [
      {
        name: 'C#',
        logo: 'csharp',
        experience: '+5 year',
        text: "Powerfull language to develop backend. Experience on Rest API's, MVC Model, Clean Architecture"
      },
      {
        name: 'NET Framework / CORE / 5',
        logo: 'net',
        experience: '+5 year',
        text: ''
      }
    ]
  },
  {
    name: 'Databases',
    type: 'databases',
    technologies:[
      {
        name: 'SQL SERVER',
        logo: 'sqlServer',
        experience: '+5 year',
        text: 'Views, subqueries, store procedures, functions, cursors and so on'
      },
      {
        name: 'MySQL',
        logo: 'mySql',
        experience: '+5 year',
        text: 'Another option to manage relational databases'
      }
    ]
  },
  {
    name: 'More',
    type: 'more',
    technologies: [
      {
        name: 'Git',
        logo: 'git',
        experience: '1 year',
        text: 'Basic usage working with small teams'
      },
      {
        name: 'Jira',
        logo: 'jira',
        experience: '6 months',
        text: 'Tool to manage projects, working with small teams using SCRUM as agile methodology'
      },
    ]
  }
]