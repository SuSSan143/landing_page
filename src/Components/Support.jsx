import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

const Support = () => {
  const array = [
    {
      link: "https://images.ctfassets.net/lbsm39fugycf/1TGgA5Sm1U3E5lzgEjIKDg/2a340632f7c7c0fb7e253f1c41f7d94b/digital-trends-blue-grey.svg",
      size: "145.913px",
    },
    {
      link: "https://images.ctfassets.net/lbsm39fugycf/srzEJDFtp52HRAKTs787R/ab5383c8e1deec2563e62af841ea73c6/entrepreneur-blue-grey__2_.svg",
      size: "145.913px",
    },
    {
      link: "https://images.ctfassets.net/lbsm39fugycf/1cjCnc1zKiV1RpAqxAzutv/db7914019a26465799647e69247ff831/forbes-blue-grey.svg",
      size: "85.237px",
    },
    {
      link: "https://images.ctfassets.net/lbsm39fugycf/2653SKgVHqFZ59GHD29wAk/ec7e26434abe9c756befb2f4f04b7784/engadget-blue-grey.svg",
      size: "145.913px",
    },
  ];
  return (
    <Box
      sx={{
        "@media (max-width: 600px)": {
            padding: "0px 30px",
          },
        boxSizing: "border-box",
        margin: "0px auto",
        width: "100%",
        maxWidth: "calc(1280px)",
        padding: "0px 64px",
      }}
    >
      <Box
        sx={{
          "@media (min-width: 1441px)": {
            padding: "64px 0px",
          },
          borderTop: "1px solid rgb(218, 222, 224)",
          marginTop: "64px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            paddingBottom: "24px",
            display: "block",
            fontSize: "20px",
            color: "rgb(38, 50, 56)",
            lineHeight: "1.6",
          }}
          variant="body1"
          gutterBottom
          component="span"
        >
          As featured in
        </Typography>
        <Grid
          sx={{
            boxSizing: "border-box",
            width: "100%",
            marginLeft: "0px",
            justifyContent: "center",
          }}
          container
        >
          {array.map((item, i) => (
            <Grid
              key={i}
              sx={{
                "@media (min-width: 1200px)": {
                  maxWidth: "20%",
                  margin: "24px 0",
                },
                "@media (max-width: 1200px)": {
                  margin: "24px 0",
                },
                borderRadius: "10px",
                backgroundColor: "rgb(245, 247, 248)",
                height: "80px",
                width: "auto",
                minWidth: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fill: "rgb(69, 90, 100)",
                margin: "24px 20px",
                // width: "calc(25% - 48px)",
                textAlign: "center",
              }}
              item
              xs={6}
              lg={3}
            >
              <CardMedia
                sx={{
                  height: "auto",
                  maxheight: "32px",
                  width: item.size,
                  objectFit: "contain",
                }}
                component="img"
                alt="green iguana"
                // height="140"
                image={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Support;
