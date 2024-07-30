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