import { Box, SxProps } from "@mui/material";

/**
 * Line component
 * @returns A thin, gray, horizontal divider line.
 */
export const Line = () => {
    const lineStyles: SxProps = {
        width: {
            md: "calc(100% - 12rem)",
            xs: "calc(100% - 4rem)",
        },
        mx: {
            md: "6rem",
            xs: "2rem",
        },
        backgroundColor: "#DBDBDB",
        height: "1px",
        my: "4rem",
    };
    return <Box sx={lineStyles} />;
};
