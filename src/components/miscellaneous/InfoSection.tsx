import { InfoSectionProps } from "../../utils/interfaces/props";
import { Box, SxProps, Typography } from "@mui/material";
import { defaultBorderRadius } from "../../utils/constants/styles";

const InfoSection = ({ title, children, img, additionalInfo }: InfoSectionProps) => {
    const containerStyles: SxProps = {
        display: "flex",
        flexDirection: {
            sm: "row",
            xs: "column",
        },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        gap: "3rem",
        px: {
            md: "6rem",
            xs: "2rem",
        },
    };
    const imgStyles: SxProps = {
        aspectRatio: "1",
        objectFit: "cover",
        borderRadius: defaultBorderRadius,
        maxWidth: {
            sm: "320px",
            xs: "100%",
        },
        m: "0",
        p: "0",
    };
    const textStyles: SxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "start",
        textAlign: "left",
    };
    return (
        <Box sx={containerStyles}>
            <Box component="img" src={img} sx={imgStyles} />
            <Box sx={textStyles}>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="body1">{children}</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {additionalInfo}
                </Typography>
            </Box>
        </Box>
    );
};

export default InfoSection;
