import { StatProps, IconCardProps, InfoSectionProps } from "../../src/utils/interfaces/props";
import {
  faBoxesStacked,
  faChartSimple,
  faLandmark,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export const stats: StatProps[] = [
  {
    stat: "4",
    statName: "Projects",
    subtitle: "(Per Semester)",
  },
  {
    stat: "30+",
    statName: "Majors",
  },
  {
    stat: "200+",
    statName: "Members",
    subtitle: "And Alumni",
  },
  {
    stat: "1",
    statName: "DeCal",
  },
];

export const aboutPageIconCards: IconCardProps[] = [
  {
    title: "Be Interdisciplinary",
    children: `We offer a wide range of projects, general 
        meeting topics, and external speakers 
        who have a large breadth of knowledge in
        interdisciplinary work!`,
    icon: faBoxesStacked,
  },
  {
    title: "Develop Technical Skills",
    children: `We offer various workshops so members can 
        learn about web development and data analysis tools, 
        and collaborate on technical projects.`,
    icon: faChartSimple,
  },
  {
    title: "Explore Political Problems",
    children: `Between our projects and general meetings, we 
        offer a chance to dive deep into our political system, 
        explore policy, and discuss possible reforms.`,
    icon: faLandmark,
  },
  {
    title: "Find a Community",
    children: `We host some of the most diverse, broad 
        ranged in study, and interesting people you will ever 
        meet, and we host awesome social events!`,
    icon: faPeopleGroup,
  },
];

export const aboutPageInfoSection: InfoSectionProps[] = [
    {
        title: "General Meetings",
        children: `At GMs, we host discussions and debates about current events, often 
        relating to AI and tech policy, have guest speaker presentations, and share 
        project updates with the group.`,
        img: "/images/meetings.png",
        additionalInfo: "Thursdays, 8 - 9 PM"
    },
    {
        title: "Socials",
        children: `Socials can vary in type, like watching debates together, hiking, biking, 
        excursions, parties, and of course we have a retreat each semester. The 
        best place to get to know your PCS pals!`,
        img: "/images/retreat.jpeg",
        additionalInfo: "Two to three per month"
    },
    {
        title: "Projects",
        children: `The time requirement, duration, locations, and agenda can vary from project 
        to project. They are a great way to gain experience in technical work,
        research, or policy analysis!`,
        img: "/images/project.png",
        additionalInfo: "One meeting per week (usually)"
    },
    {
        title: "Workshops",
        children: `We host a few workshops each month focusing on improving our members' 
        skill sets, including resumé and career workshops, data science, web 
        development, and much more!`,
        img: "/images/workshop.jpg",
        additionalInfo: "One to two per month"
    }
]
