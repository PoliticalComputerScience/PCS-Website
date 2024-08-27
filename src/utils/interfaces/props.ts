import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Props for the `Stat` component which renders a numeric stat about the club.
 * @param stat the main numerical stat as a string. This should not error when parsed as an int up to the last character.
 * I.e, "3619", "2", "34+", and "738a" are all valid. "2749 and more" is not.
 * @param statName what the stat describes.
 * @param subtitle a subtitle under statName.
 */
export interface StatProps {
    stat: string;
    statName: string;
    subtitle?: string;
}

/**
 * Props for the `IconCard` component which renders a card with a title, icon, and paragraph body.
 * @param title the title of the card.
 * @param children the paragraph body of the card.
 * @param icon the icon to go in the top right corner of the card.
 */
export interface IconCardProps {
    title: string;
    children: string;
    icon: IconDefinition;
}

/**
 * Props for the `InfoSection` component which renders a square image with informational text to the right.
 * @param title the title of the section.
 * @param children the paragraph body of the section.
 * @param img the URL of the image to go to the left of the text.
 * @param additionalInfo additional information (usually short) to add below the paragraph body.
 */
export interface InfoSectionProps {
    title: string;
    children: string;
    img: string;
    additionalInfo?: string;
}

/**
 * Props for the `ProjectCard` component which renders the project given a certain image with the provided info.
 * @param projectName the name of the project.
 * @param projectDescription a short (7 - 12 words) project description, often starting with an action verb.
 * @param tags identifiers like "Web Dev" or "Policy Analysis" that describe the project. 1 - 3 ideally.
 * @param landscapePhoto a 2:3 dimension photo which will default as the main photo for the project.
 * @param portraitPhoto OPTIONAL a 2:1 dimension photo which will render paritally over the landscape photo if provided.
 */
export interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    tags: string[];
    landscapePhoto: string;
    portraitPhoto?: string;
}

/**
 * Props for the default `Dropdown` component which renders a dropdown selector.
 * @param dropdownName the default text to show on the dropdown. Also an option to select
 * @param dropdownItems the items to select between.
 * @param selectSetter a react `useState` setter function to set as the selected item.
 * @param selectedItem the item which is currently selected by the `useState`.
 */
export interface DropdownProps {
    dropdownName: string;
    dropdownItems: string[];
    selectSetter: (item: string) => void;
    selectedItem: string;
}

/**
 * Props for a recruitment 'step', a single element of the recruitment timeline widget */
export interface RecruitmentStepProps {
    name: string;
    start: Date;
    end: Date;
    description?: string;
}
