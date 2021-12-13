import * as React from "react";
import PropTypes from "prop-types";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

import App from "../App";


const useStyles = makeStyles({
  hideBar: {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgb(125, 85, 255)",
    padding: "20px",
    fontFamily: "Karla, Roboto, Ubuntu, Oxygen, Cantarell, sans-serif",
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Typography className={classes.hideBar} variant="h6" component="div">
          🎉 We just announced our new Shopify store feature!{" "}
          <Link color="#fff" href="https://linktr.ee/stores" variant="inherits">
            Learn more
          </Link>
        </Typography>
      </HideOnScroll>

      <App />
    </React.Fragment>
  );
}
