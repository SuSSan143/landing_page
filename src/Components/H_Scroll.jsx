import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const H_Scroll = () => {
  return (
    <Box
      sx={{
        "@media (max-width: 767px)": {
          margin: "0px 30px",
        },
        padding: "96px 0px 48px",
        margin: "0px 64px",
        display: "flex",
        alignItems: "center",
        "@media (min-width: 1280px)": {
          margin: "0px calc((100vw - 1152px) / 2)",
        },
      }}
    >
      <Box sx={{ flex: "1 1 0%" }}>
        <Typography
          sx={{
            "@media (max-width: 767px)": {
              fontSize: "24px",
              lineHeight: 1.5,
              letterSpacing: "calc(-0.48px)",
              marginBottom: "8px",
            },
            color: "rgb(19, 20, 21)",
            fontSize: "32px",
            lineHeight: 1.25,
            letterSpacing: "calc(-0.64px)",
            fontWeight: "normal",
            display: "block",
          }}
          variant="h5"
          gutterBottom
          component="spam"
        >
          Join the Linktree community today
        </Typography>
        <Typography
          sx={{
            "@media (max-width: 767px)": {
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "calc(-0.32px)",
            },
            color: "rgb(83, 88, 95)",
            fontSize: "20px",
            lineHeight: 1.6,
            letterSpacing: "calc(-0.4px)",
            fontWeight: "normal",
            display: "block",
            maxWidth: "760px",
          }}
          variant="h5"
          gutterBottom
          component="spam"
        >
          The world's biggest influencers, creators, publishers and brands use
          Linktree in their marketing strategy.
        </Typography>
      </Box>
    </Box>
  );
};

export default H_Scroll;
