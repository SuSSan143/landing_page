import Content from "./Content";
import Top from "./Top";
import Providings from "./Providings";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Support from "./Support";
import Footer from './Footer'

export default function Body() {
  const ColorButton1 = styled(Button)(() => ({
    borderRadius: "calc(16px)",
    padding: "0px calc(32px)",
    cursor: "pointer",
    width: "auto",
    height: "64px",
    lineHeight: 1.5,
    textTransform: "none",
    color: "white",
    backgroundColor: "rgb(117, 81, 233)",
    "&:hover": {
      backgroundColor: "rgb(117, 81, 233)",
    },
  }));

  return (
    <>
      <Top />
      <Content />
      <Providings />
      <Box
        sx={{
          textAlign: "center",
          "@media (min-width: 1441px)": {
            padding: "64px 0px",
          },
        }}
      >
        <ColorButton1 variant="contained">Get started for free</ColorButton1>
      </Box>
      <Support/>
      <Footer/>
    </>
  );
}
