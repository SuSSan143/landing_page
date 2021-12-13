import React from "react";
import Fade from "react-reveal/Fade";
import Box from "@mui/material/Box";

function FadeExample() {
  return (
    <div>
      <Fade bottom cascade>
        <div>
          <Box
            sx={{
              "@media (max-width: 767px)": {
                height: 25,
                width: 171,
                margin: "10px 0",
              },
              height: 50,
              width: 330,
              backgroundColor: "white",
              margin: "20px 0",
              borderRadius: "5px",
            }}
          />
          <Box
            sx={{
              "@media (max-width: 767px)": {
                height: 25,
                width: 171,
                margin: "10px 0",
              },
              height: 50,
              width: 330,
              backgroundColor: "white",
              margin: "20px 0",
              borderRadius: "5px",
            }}
          />
          <Box
            sx={{
              "@media (max-width: 767px)": {
                height: 25,
                width: 171,
                margin: "10px 0",
              },
              height: 50,
              width: 330,
              backgroundColor: "white",
              margin: "20px 0",
              borderRadius: "5px",
            }}
          />
          <Box
            sx={{
              "@media (max-width: 767px)": {
                height: 25,
                width: 171,
                margin: "10px 0",
              },
              height: 50,
              width: 330,
              backgroundColor: "white",
              margin: "20px 0",
              borderRadius: "5px",
            }}
          />
          <Box
            sx={{
              "@media (max-width: 767px)": {
                height: 25,
                width: 171,
                margin: "10px 0",
              },
              height: 50,
              width: 330,
              backgroundColor: "white",
              margin: "20px 0",
              borderRadius: "5px",
            }}
          />
        </div>
      </Fade>
    </div>
  );
}

export default FadeExample;
