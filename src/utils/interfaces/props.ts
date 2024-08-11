import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

/**
 * Props for the `Stat` component which renders a numeric stat about the club.
 * @param stat the main numerical stat as a string.
 * @param statName what the stat describes.
 * @param subtitle a subtitle under statName.
 */
export interface StatProps {
    stat: string,
    statName: string
    subtitle?: string
}

/**
 * Props for the `IconCard` component which renders a card with a title, icon, and paragraph body.
 * @param title the title of the card.
 * @param children the paragraph body of the card.
 * @param icon the icon to go in the top right corner of the card.
 */
export interface IconCardProps {
    title: string,
    children: string,
    icon: IconDefinition
}

/**
 * Props for the `InfoSection` component which renders a square image with informational text to the right.
 * @param title the title of the section.
 * @param children the paragraph body of the section.
 * @param img the URL of the image to go to the left of the text.
 * @param additionalInfo additional information (usually short) to add below the paragraph body.
 */
export interface InfoSectionProps {
    title: string,
    children: string,
    img: string,
    additionalInfo?: string
}
}

/**
 * Props for a 'Step', i.e one element of the recruitment timeline.
 * // TODO doc
 * */
export interface RecruitmentStepProps {
    name: string
    start: Date
    end: Date
    description: string

}
>>>>>>> Stashed changes
