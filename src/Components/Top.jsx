import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fade from "./Reveal";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MessageIcon from "@mui/icons-material/Message";
import Zoom from "react-reveal/Zoom";
import FadeB from "react-reveal/Fade";
import Inputbox from "./Inputbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles({
  box: {
    "@media (min-width: 1441px)": {
      padding: "104px 0px 48px",
    },
    "@media (max-width: 767px)": {
      padding: "85px 0px 114px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    zIndex: 3,
    padding: "8.88889vw 0px 10.0694vw",
  },
  imageContainer: {
    "@media (max-width: 767px)": {
      width: "200px",
      height: "432px",
      borderRadius: "26px",
      border: "7px black solid",
    },
    border: "15px black solid",
    width: "400px",
    height: "825px",
    borderRadius: "80px",
    maxWidth: "400px",
    backgroundImage:
      "linear-gradient(155deg, rgb(11, 175, 255), rgb(57, 224, 155) 50%, rgb(255, 194, 19))",
    overflow: "hidden",
  },
});

const ColorButton = styled(Button)(() => ({
  "@media (max-width: 767px)": {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "16px",
    height: "48px",
    padding: "0 calc(24px)",
    borderRadius: "calc(12px)",
    width: "100%",
  },
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

export default function top() {
  const classes = UseStyles();

  return (
    <>
      <Box className={classes.box}>
        <Box sx={{ marginBottom: "32px" }}>
          <Typography
            sx={{
              "@media (max-width: 767px)": {
                fontSize: "24px",
                lineHeight: "24px",
                margin: "0",
                letterSpacing: "calc(-0.64px)",
              },
              textAlign: "center",
              margin: "0 auto",
              fontSize: "64px",
              lineHeight: "75px",
              letterSpacing: "calc(-1.28px)",
              display: "block",
              color: "rgb(19, 20, 21)",
            }}
            variant="h2"
            gutterBottom
            component="div"
          >
            The Only Link You’ll Ever Need
          </Typography>

          <Typography
            sx={{
              "@media (max-width: 767px)": {
                padding: "8px 0px 0px",
                fontSize: "16px",
                maxWidth: "100%",
              },
              textAlign: "center",
              margin: "0 auto",
              fontSize: "20px",
              padding: "20px 8px 0px",
              maxWidth: "635px",
              color: "rgb(38, 50, 56)",
              lineHeight: 1.5,
              letterSpacing: "calc(-0.48px)",
              fontWeight: "normal",
              display: "block",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Connect audiences to all of your content with just one link
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              margin: "0 auto",
              fontSize: "20px",
              padding: "20px 8px 0px",
              maxWidth: "635px",
              color: "rgb(38, 50, 56)",
              lineHeight: 1.5,
              letterSpacing: "calc(-0.48px)",
              display: "inline-block",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Already on Linktree? {"  "}
            <Link
              color="#000"
              href="https://linktr.ee/login"
              variant="inherits"
            >
              Log in
            </Link>
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <ColorButton variant="contained">Get started for free</ColorButton>
        </Box>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ position: "absolute" }}>
          <Avatar
            sx={{
              "@media (max-width: 767px)": {
                height: "50px",
                width: "50px",
                bottom: "55px",
                left: "65px",
              },
              position: "relative",
              bottom: "65px",
              left: "85px",
              height: "150px",
              width: "150px",
            }}
            alt="Remy Sharp"
            src="https://images.ctfassets.net/lbsm39fugycf/5n5fnT964RZWws7B16FIoB/a8e310d76ed53370a7c2e199c0492e98/linktree-marketing-website-profile-images.gif?w=144&h=144&q=75&fm=webp"
          />
          <Box sx={{ position: "relative", bottom: "45px" }}>
            <Fade />
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <InstagramIcon fontSize="large" />
            <AudiotrackIcon fontSize="large" />
            <MessageIcon fontSize="large" />
          </Grid>
        </Box>
        <Box className={classes.imageContainer}></Box>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Zoom bottom>
          <Box
            sx={{ borderLeft: "1px dashed rgb(117, 81, 233)", height: 80 }}
          />
        </Zoom>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FadeB top>
          <Inputbox />
        </FadeB>
      </Grid>
    </>
  );
}
