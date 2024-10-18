import {
  StatProps,
  IconCardProps,
  InfoSectionProps,
  ProjectCardProps,
  RecruitmentStepProps,
} from "../../src/utils/interfaces/props";
import {
  faBoxesStacked,
  faChartSimple,
  faLandmark,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import foodwatchLandscape from "../images/foodwatch-landscape.png";
import foodwatchPortait from "../images/foodwatch-portait.png";
import decalLandscape from "../images/decal-landscape.jpg";
import linkHealthTargetingLandscape from "../images/link-health-targeting-landscape.png";
import orderedLibertyLandscape from "../images/ordered-liberty-landscape.png";
import dataScienceCircleLandscape from "../images/data-science-circle-landscape.png";
import dataScienceCirclePortait from "../images/data-science-circle-portrait.svg";
import linkHealthVendingMachineLandscape from "../images/link-health-vending-machine-landscape.png";

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
    additionalInfo: "Thursdays, 8 - 9 PM",
  },
  {
    title: "Socials",
    children: `Socials can vary in type, like watching debates together, hiking, biking,
        excursions, parties, and of course we have a retreat each semester. The
        best place to get to know your PCS pals!`,
    img: "/images/retreat.jpeg",
    additionalInfo: "Two to three per month",
  },
  {
    title: "Projects",
    children: `The time requirement, duration, locations, and agenda can vary from project
        to project. They are a great way to gain experience in technical work,
        research, or policy analysis!`,
    img: "/images/project.png",
    additionalInfo: "One meeting per week (usually)",
  },
  {
    title: "Workshops",
    children: `We host a few workshops each month focusing on improving our members'
        skill sets, including resumé and career workshops, data science, web
        development, and much more!`,
    img: "/images/workshop.jpg",
    additionalInfo: "One to two per month",
  },
];

export const projects: ProjectCardProps[] = [
  {
    projectName: "FoodWatch",
    projectDescription:
      "Pinpointing areas of food scarcity with neural networks",
    tags: ["Web Dev", "Machine Learning"],
    landscapePhoto: foodwatchLandscape,
    portraitPhoto: foodwatchPortait,
  },
  {
    projectName: "DeCal",
    projectDescription:
      "PS 198: Exploring how digital innovation is rehsaping governance and society",
    tags: ["Policy Analysis", "Education"],
    landscapePhoto: decalLandscape,
  },
  {
    projectName: "Link Health Targeting",
    projectDescription: "Using data driven solutions for targeted outreach",
    tags: ["Data Science", "Research"],
    landscapePhoto: linkHealthTargetingLandscape,
  },
  {
    projectName: "Ordered Liberty Lineage Analysis",
    projectDescription: "Exploring the due process of interpretation",
    tags: ["Policy Analysis", "Data Science", "Research"],
    landscapePhoto: orderedLibertyLandscape,
  },
  {
    projectName: "Data Science Circle",
    projectDescription: "Empowering the next generation of data scientists",
    tags: ["Data Science", "Machine Learning"],
    landscapePhoto: dataScienceCircleLandscape,
    portraitPhoto: dataScienceCirclePortait,
  },
  {
    projectName: "Link Health Vending Machine",
    projectDescription:
      "Connecting under-served individuals to welfare programs",
    tags: ["Policy Analysis", "Web Dev"],
    landscapePhoto: linkHealthVendingMachineLandscape,
  },
];

//TODO: timezone fuckery
export const recruitmentSteps: RecruitmentStepProps[] = [

  {
    name: "Tabling",
    start: new Date("2024-08-28"),
    end: new Date("2024-09-11"),
    description: "We'll be tabling on Sproul! Come say hi.",
  },
  {
    name: "Coffee Chats",
    start: new Date("2024-09-02"),
    end: new Date("2024-09-10"),
    description: "Chat with a board member and learn more about the club!",
  },

  {
    name: "Infosession 1 (Virtual), 8 - 9 PM",
    start: new Date("2024-09-06"),
    end: new Date("2024-09-06"),
    description: "Ia Ia Cthulhu Ftaghn?",
    link: "https://berkeley.zoom.us/j/8079345982?omn=93103234887"
  },

  {
    name: "Infosession 2, 8 - 9 PM, Dwinelle 205",
    start: new Date("2024-09-10"),
    end: new Date("2024-09-10"),
    description: "Ia Ia Cthulhu Ftaghn?",
  },
  {
    name: "Applications Due",
    start: new Date("2024-09-11"),
    end: new Date("2024-09-11"),
    description: "At the end of things, where the dry dust bleeds",
  },
];
