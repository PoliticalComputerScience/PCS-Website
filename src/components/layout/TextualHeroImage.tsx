import { Box, SxProps, Typography } from "@mui/material";
import { purpleMeshStyles } from "../../utils/constants/styles";

interface GradientHeroImageProps {
    title: string;
    paragraph: string;
    gradient?: boolean;
}

const TextualHeroImage = ({ title, paragraph, gradient = false }: GradientHeroImageProps) => {
    /**
     * Styles
     */
    const heroImageStyles: SxProps = {
        backgroundImage: gradient ? purpleMeshStyles : null,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: "7%",
        pt: gradient ? "30vh" : "15vh",
        pb: gradient ? "20vh" : "10vh",
    };
    const heroImageTextStyles: SxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        textAlign: "left",
    };

    return (
        <Box sx={heroImageStyles}>
            <Box sx={heroImageTextStyles}>
                <Typography variant="h1" component="div" sx={{ lineHeight: 2 }}>
                    {title}
                </Typography>
                <Typography variant="h6" component="div" sx={{ lineHeight: 2.5 }}>
                    {paragraph}
                </Typography>
            </Box>
        </Box>
    );
};

export default TextualHeroImage;
