import Box from "@mui/material/Box";
import ProvidingContent from "./ProvidingContent";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import HScroll from "./H_Scroll";
import HscrollContent from "./HscrollContent";

export default function Providings() {
  const ColorButton2 = styled(Button)(() => ({
    borderRadius: "calc(16px)",
    padding: "0px calc(32px)",
    cursor: "pointer",
    width: "auto",
    height: "64px",
    lineHeight: 1.5,
    textTransform: "none",
    color: "rgb(117, 81, 233)",
    // backgroundColor: "rgb(117, 81, 233)",
    "&:hover": {
      backgroundColor: "rgb(117, 81, 233)",
      color: "white",
    },
  }));
  return (
    <Box
      sx={{
        "@media (max-width: 767px)": {
          backgroundImage:
            "linear-gradient(to bottom, #dbdfe1, #e4e7e9, #eeeff0, #f7f7f8, #ffffff)",
          backgroundSize: "cover",
          borderRadius: "140px",
        },
        padding: "64px 0px",
      }}
    >
      <Box
        sx={{
          display: { sm: "none", xs: "block" },
          textAlign: "center",
          paddingBottom: "64px",
          color: "rgb(19, 20, 21)",
          fontSize: "32px",
          lineHeight: 1.38,
          letterSpacing: "calc(-0.64px)",
        }}
      >
        Amazing features
      </Box>
      <Box
        sx={{
          "@media (max-width: 767px)": {
            padding: "0px 24px",
          },
          maxWidth: "calc(1280px)",
          padding: "0px 64px",
          margin: "0px auto",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "7.98611vw 0px",
            padding: "0px",
            width: "auto",
            height: "auto",
          }}
        >
          <ProvidingContent />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <ColorButton2 variant="outlined">SEE ALL FEATURES</ColorButton2>
      </Box>
      <HScroll />
      <HscrollContent />
    </Box>
  );
}
