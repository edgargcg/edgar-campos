import { Repository } from "../interfaces/Repository";

export const getRepositories = (): Repository[] => [
  {
    icon: ['fas', 'dog'],
    name: 'DogKeepers',
    url: 'https://github.com/edgargcg/DogKeepersCleanArchitectureCompleteEdition',
    description: 'First Blazor Webassembly App',
    technologies: [
      'C#', 'Blazor', 'HTML', 'CSS', 'MySQL', 'Bootstrap'
    ]
  },
  {
    icon: ['fas', 'book'],
    name: 'React Learning',
    url: 'https://github.com/edgargcg/ReactLearning',
    description: 'A lot of js and react exercises meanwhile I was learning react',
    technologies: [
      'react', 'javascript', 'css', 'typescript'
    ]
  }
]
