import * as Icons from "react-icons/fa";
// projects images

import Project1 from './assets/img-1.jpg';
import Project2 from './assets/img-2.jpg';
import Project3 from './assets/img-3.jpg';
import Project4 from './assets/img-4.jpg';
import Project5 from './assets/img-5.jpg';
import Project6 from './assets/img-6.jpg';
export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "#",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "About Me",
    path: "#about",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUser />,
  },
  {
    id: 3,
    title: "Experience",
    path: "#experience",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 4,
    title: "Portfolio",
    path: "#portfolio",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCartArrowDown />,
  },
  
  {
    id: 5,
    title: "Contact Me",
    path: "#contact",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];

// projects Navigation
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Wed Design',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'UI/UX Design',
  },

];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: <a href="#" target="_blank">Project 1</a>,
    category: 'Email',
    url: "#", 
  },
  {
    id: '2',
    image: Project2,
    name: <a href="#" target="_blank">Project 2</a>,
    category: 'Portfolio',
    url:"#",
    description:'Work with a variety of different languages.'
     
  },
  {
    id: '3',
    image: Project3,
    name: <a href="#" target="_blank">Project 3</a> ,
    category: 'Portfolio',
    url:"#",
  },
  {
    id: '4',
    image: Project4,
    name: <a href="#" target="_blank">Project 4</a>,
    category: 'Portfolio',
    url: "#",
  },
  {
    id: '5',
    image: Project5,
    name: <a href="#" target="_blank">Project 5</a> ,
    category: 'Portfolio',
    url:"#",
  },
  {
    id: '6',
    image: Project6,
    name: <a href="#" target="_blank">Project 6</a> ,
    category: 'Portfolio',
    url: "#",
  },
 
];
