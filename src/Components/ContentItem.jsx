import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ContentItem(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const between = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return props.number % 2 === 0 || !matches || between ? (
    <Grid container spacing={2}>
      <Grid
        sx={{
          "@media (max-width: 767px)": {
            minHeight: "430px",
            },
          height: "0px",
          width: "100%",
          position: "relative",
          flex: "1 1 0%",
          minHeight: "552px",
        }}
        item
        xs={12}
        sm={6}
      >
        <Box
          sx={{
            bottom: "-2px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            position: "absolute",
          }}
        >
          <CardMedia
            sx={{ width: "100%", height: "100%" }}
            component="video"
            src={props.video}
            alt="video"
            autoPlay
            muted
            loop
            playsInline
          />
        </Box>
      </Grid>
      <Grid
        sx={{
          alignSelf: "center",
          direction: "ltr",
          paddingLeft: "11.1111%",
          paddingRight: "5.55556%",
        }}
        item
        xs={12}
        sm={6}
      >
        <Typography
          sx={{
            "@media(min-width: 1441px)": {
              fontSize: "48px",
            },
            "@media (max-width: 767px)": {
              fontSize: "24px",
              marginBottom: "20px",
              padding: "0px 0px 16px",
              lineHeight: 1.5,
              letterSpacing: "calc(-0.48px)",
            },
            color: "rgb(19, 20, 21)",
            fontSize: "3.33333vw",
            lineHeight: "1.17",
            padding: "0px 0px 16px",
            letterSpacing: "calc(-0.96px)",
            fontWeight: "normal",
            display: "block",
          }}
          variant="h3"
          gutterBottom
          component="spam"
        >
          {props.heading}
        </Typography>
        <Typography
          sx={{
            "@media(min-width: 1441px)": {
              fontSize: "24px",
            },
            "@media(max-width: 1441px)": {
              fontSize: "20px",
            },
            color: "rgb(38, 50, 56)",
            fontSize: "24px",
            lineHeight: "1.5",
            letterSpacing: "calc(-0.48px)",
            fontWeight: "normal",
            display: "block",
          }}
          variant="subtitle1"
          gutterBottom
          component="spam"
        >
          {props.info}
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2}>
      <Grid
        sx={{
          alignSelf: "center",
          direction: "ltr",
          paddingLeft: "11.1111%",
          paddingRight: "5.55556%",
        }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{
            "screen and @media(minWidth: 1441px)": {
              fontSize: "48px",
            },
            color: "rgb(19, 20, 21)",
            fontSize: "3.33333vw",
            lineHeight: "1.17",
            padding: "0px 0px 16px",
            letterSpacing: "calc(-0.96px)",
            fontWeight: "normal",
            display: "block",
          }}
          variant="h3"
          gutterBottom
          component="spam"
        >
          {props.heading}
        </Typography>
        <Typography
          sx={{
            "screen and @media(minWidth: 1441px)": {
              fontSize: "24px",
            },
            color: "rgb(38, 50, 56)",
            fontSize: "24px",
            lineHeight: "1.5",
            letterSpacing: "calc(-0.48px)",
            fontWeight: "normal",
            display: "block",
          }}
          variant="subtitle1"
          gutterBottom
          component="spam"
        >
          {props.info}
        </Typography>
      </Grid>
      <Grid
        sx={{
          height: "0px",
          width: "100%",
          position: "relative",
          flex: "1 1 0%",
          minHeight: "552px",
        }}
        item
        xs={12}
        md={6}
      >
        <CardMedia
          sx={{
            bottom: "-2px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            // width: "auto",
            // height: "auto",
            position: "absolute",
          }}
          component="video"
          src={props.video}
          alt="video"
          autoPlay
          muted
          loop
          playsInline
        />
      </Grid>
    </Grid>
  );
}
