/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FooterC from "rc-footer";
import "rc-footer/assets/index.css";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SVG from "./Svg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from "./Accordion";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    margin: "0 auto",
    width: "100%",
    maxWidth: "calc(1280px)",
  },
  footer: {
    maxWidth: "600px",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      color: "#000",
      textDecoration: "underline",
    },
  },
  box: {
    borderTop: "1px solid rgb(218, 222, 224)",
    color: "rgb(196, 196, 196)",
    padding: "24px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Icon: {
    width: "20px",
    height: "20px",
    marginRight: "20px",
    color: "rgb(196, 196, 196)",
  },
  IconColor: {
    "&:hover": {
      fill: "rgb(40, 191, 123)",
    },
  },
  image: { paddingBottom: "16px", width: "36px" },
  span: {
    color: "rgb(19, 20, 21)",
    fontSize: "12px",
    lineHeight: 2,
    letterSpacing: "calc(-0.24px)",
    fontWeight: "normal",
    display: "inline",
  },
});

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  function linkTreeIcon() {
    return (
      <svg viewBox="0 0 24 24" className={classes.Icon}>
        <a
          href="https://linktr.ee/linktr.ee"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-hjWSTT ciqMyV"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z"
          ></path>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z"
          ></path>
        </a>
      </svg>
    );
  }

  function instaIcon() {
    return (
      <svg viewBox="0 0 24 24" className={classes.Icon}>
        <a
          href="https://www.instagram.com/linktr.ee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            d="M23.93,7.05a8.76,8.76,0,0,0-.56-2.91A6.07,6.07,0,0,0,19.86.63,8.76,8.76,0,0,0,17,.07C15.67,0,15.26,0,12,0S8.33,0,7.05.07A8.76,8.76,0,0,0,4.14.63,6.07,6.07,0,0,0,.63,4.14,8.76,8.76,0,0,0,.07,7.05C0,8.33,0,8.74,0,12S0,15.67.07,17a8.76,8.76,0,0,0,.56,2.91,6.07,6.07,0,0,0,3.51,3.51,8.76,8.76,0,0,0,2.91.56C8.33,24,8.74,24,12,24s3.67,0,4.95-.07a8.76,8.76,0,0,0,2.91-.56,6.07,6.07,0,0,0,3.51-3.51A8.76,8.76,0,0,0,23.93,17C24,15.67,24,15.26,24,12s0-3.67-.07-4.95M12,18.16A6.16,6.16,0,1,1,18.16,12,6.16,6.16,0,0,1,12,18.16M18.41,7a1.44,1.44,0,1,1,1.44-1.44A1.43,1.43,0,0,1,18.41,7M16,12a4,4,0,1,1-4-4,4,4,0,0,1,4,4"
            fill="currentColor"
          ></path>
        </a>
      </svg>
    );
  }

  function fbIcon() {
    return (
      <svg viewBox="0 0 96 96" className={classes.Icon}>
        <a
          href="https://www.facebook.com/Linktree/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M96,90.7A5.3,5.3,0,0,1,90.7,96H66.24V58.82H78.72l1.87-14.48H66.24V35.09c0-4.2,1.16-7.06,7.18-7.06h7.67v-13a101.78,101.78,0,0,0-11.18-.57c-11.06,0-18.63,6.75-18.63,19.15V44.34H38.77V58.82H51.28V96H5.3A5.3,5.3,0,0,1,0,90.7V5.3A5.3,5.3,0,0,1,5.3,0H90.7A5.3,5.3,0,0,1,96,5.3Z"
          ></path>
        </a>
      </svg>
    );
  }

  function twitterIcon() {
    return (
      <svg viewBox="0 0 96 80" className={classes.Icon}>
        <a
          href="https://twitter.com/linktree_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M93.35,1.48A38.82,38.82,0,0,1,80.84,6.37,19.45,19.45,0,0,0,66.46,0,20,20,0,0,0,46.77,20.2a20.37,20.37,0,0,0,.51,4.59A55.44,55.44,0,0,1,6.68,3.69,20.59,20.59,0,0,0,4,13.85a20.32,20.32,0,0,0,8.76,16.81,19.42,19.42,0,0,1-8.93-2.52v.25a20.08,20.08,0,0,0,15.81,19.8,19.31,19.31,0,0,1-8.9.35,19.77,19.77,0,0,0,18.4,14A38.9,38.9,0,0,1,4.7,71.21,38.39,38.39,0,0,1,0,70.93,54.84,54.84,0,0,0,30.19,80c36.23,0,56-30.77,56-57.46,0-.88,0-1.76,0-2.62A40.39,40.39,0,0,0,96,9.47a38.56,38.56,0,0,1-11.31,3.18A20.17,20.17,0,0,0,93.35,1.48Z"
          ></path>
        </a>
      </svg>
    );
  }

  function linkedInIcon() {
    return (
      <svg viewBox="0 0 24 24" className={classes.Icon}>
        <a
          href="https://www.linkedin.com/company/linktree/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M1.71 0C0.77 0 0 0.78 0 1.73C0 3.78 0 20.22 0 22.27C0 23.22 0.77 24 1.71 24C3.77 24 20.23 24 22.29 24C23.23 24 24 23.22 24 22.27C24 20.22 24 3.78 24 1.73C24 0.78 23.23 0 22.29 0C18.17 0 3.77 0 1.71 0ZM7.25 20.57L3.7 20.57L3.7 9.12L7.26 9.12L7.26 20.57L7.25 20.57ZM3.41 5.49C3.41 4.36 4.33 3.43 5.48 3.43C6.61 3.43 7.54 4.36 7.54 5.49C7.54 6.63 6.62 7.55 5.48 7.55C4.33 7.55 3.41 6.63 3.41 5.49ZM17.03 20.57C17.03 17.23 17.03 15.37 17.03 15C17.03 13.67 17 11.96 15.18 11.96C13.33 11.96 13.04 13.41 13.04 14.9C13.04 15.28 13.04 17.17 13.04 20.57L9.49 20.57L9.49 9.12L12.9 9.12L12.9 10.68C12.93 10.68 12.94 10.68 12.95 10.68C13.42 9.78 14.59 8.83 16.32 8.83C19.92 8.83 20.59 11.21 20.59 14.29C20.59 14.71 20.59 16.8 20.59 20.57L17.03 20.57Z"
          ></path>
        </a>
      </svg>
    );
  }

  function tictokIcon() {
    return (
      <svg viewBox="0 0 24 24" className={classes.Icon}>
        <a
          href="https://www.tiktok.com/@linktr.ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M22.5 9.84C20.44 9.85 18.42 9.2 16.74 8C16.74 8.84 16.74 15.54 16.74 16.38C16.74 20.59 13.33 24 9.12 24C4.91 24 1.5 20.58 1.5 16.38C1.5 12.17 4.92 8.75 9.12 8.76C9.47 8.76 9.82 8.78 10.17 8.83C10.17 9.25 10.17 12.62 10.17 13.04C8.32 12.46 6.36 13.49 5.78 15.33C5.2 17.17 6.23 19.14 8.07 19.72C9.91 20.3 11.88 19.27 12.46 17.43C12.56 17.09 12.62 16.74 12.62 16.38C12.62 15.29 12.62 9.83 12.62 0C15.09 0 16.47 0 16.74 0C16.74 0.35 16.77 0.7 16.83 1.04C16.83 1.04 16.83 1.04 16.83 1.04C17.12 2.59 18.03 3.95 19.36 4.8C20.29 5.42 21.38 5.74 22.5 5.74C22.5 6.56 22.5 9.02 22.5 9.84Z"
          ></path>
        </a>
      </svg>
    );
  }

  function YtIcon() {
    return (
      <svg viewBox="0 0 24 24" className={classes.Icon}>
        <a
          href="https://www.youtube.com/channel/UC8We2IKQo4lbongz7uOn2vA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <rect className="sc-hKgJUU inYQef"></rect>
          <path
            className={classes.IconColor}
            fill="currentColor"
            d="M21.38 4.07C19.51 3.56 12 3.56 12 3.56C12 3.56 4.5 3.56 2.63 4.07C1.59 4.34 0.78 5.16 0.5 6.2C0 8.08 0 12.01 0 12.01C0 12.01 0 15.94 0.5 17.83C0.78 18.87 1.59 19.65 2.63 19.93C4.5 20.43 12 20.43 12 20.43C12 20.43 19.51 20.43 21.38 19.93C22.41 19.65 23.22 18.87 23.5 17.83C24 15.94 24 12.01 24 12.01C24 12.01 24 8.08 23.5 6.2C23.22 5.16 22.41 4.34 21.38 4.07ZM9.55 8.45L15.82 12.01L9.55 15.58L9.55 8.45Z"
          ></path>
        </a>
      </svg>
    );
  }

  return (
    <div className={classes.root}>
    {matches ? <Accordion/> : <FooterC
        className={classes.footer}
        theme="light"
        columns={[
          {
            title: "Company",
            items: [
              { title: "Blogs", className: classes.link },
              { title: "About", className: classes.link },
              { title: "Press", className: classes.link },
              { title: "Careers", className: classes.link },
              { title: "Social Goods", className: classes.link },
              { title: "Contact", className: classes.link },
            ],
            openExternal: true,
          },
          {
            title: "Partnerships",
            items: [
              { title: "Linktree for Enterprise", className: classes.link },
              { title: "Charity", className: classes.link },
              { title: "Linktree Ambassadors", className: classes.link },
            ],
            openExternal: true,
          },
          {
            title: "Support",
            items: [
              { title: "Help Topics", className: classes.link },
              { title: "Getting Started", className: classes.link },
              { title: "Features How To", className: classes.link },
              { title: "FAQs", className: classes.link },
              { title: "Report a Violation", className: classes.link },
            ],
            openExternal: true,
          },
          {
            title: "Trust & Legal",
            items: [
              { title: "Terms & Conditions", className: classes.link },
              { title: "Privacy Policy", className: classes.link },
              { title: "Trust Centre", className: classes.link },
            ],
            openExternal: true,
          },
        ]}
      /> }
      <Box className={classes.box}>
        <SVG />
        <Box>
          {linkTreeIcon()} {instaIcon()} {fbIcon()} {twitterIcon()}{" "}
          {linkedInIcon()} {tictokIcon()} {YtIcon()}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "24px",
          borderTop: "1px solid rgb(218, 222, 224)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly93ZWIucmVzb3VyY2Uub3JnL2NjLyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vaW5rc2NhcGUuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIzMDAwIgogICBoZWlnaHQ9IjIwMDAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQzIgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY2Jhc2U9IkM6XERvY3VtZW50cyBhbmQgU2V0dGluZ3NcV2lraXBlZGlhXERlc2t0b3AiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkF1c3RyYWxpYW4gQWJvcmlnaW5hbCBGbGFnLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuMTg2NSIKICAgICBpbmtzY2FwZTpjeD0iMTUwMCIKICAgICBpbmtzY2FwZTpjeT0iMTAwMCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNzU2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjU0MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5IiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo1LjY3MDU5MjMxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0idG9waGFsZiIKICAgICAgIHdpZHRoPSIzMDAwIgogICAgICAgaGVpZ2h0PSIxMDAwIgogICAgICAgeD0iMCIKICAgICAgIHk9IjAiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZpbGw6I2ZlMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS42NzA1OTIzMTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9ImJvdHRvbWhhbGYiCiAgICAgICB3aWR0aD0iMzAwMCIKICAgICAgIGhlaWdodD0iMTAwMCIKICAgICAgIHg9IjAiCiAgICAgICB5PSIxMDAwIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgIHN0eWxlPSJmaWxsOiNmZGZkMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJjaXJjbGUiCiAgICAgICBzb2RpcG9kaTpjeD0iNTI4LjE1MDA5IgogICAgICAgc29kaXBvZGk6Y3k9IjkzMC4yOTQ5OCIKICAgICAgIHNvZGlwb2RpOnJ4PSI0MzYuOTk3MjgiCiAgICAgICBzb2RpcG9kaTpyeT0iNDM2Ljk5NzI4IgogICAgICAgZD0iTSA5NjUuMTQ3MzcgOTMwLjI5NDk4IEEgNDM2Ljk5NzI4IDQzNi45OTcyOCAwIDEgMSAgOTEuMTUyODAyLDkzMC4yOTQ5OCBBIDQzNi45OTcyOCA0MzYuOTk3MjggMCAxIDEgIDk2NS4xNDczNyA5MzAuMjk0OTggeiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM1OTM3LDAsMCwxLjEzNTY5Niw5MDMuNjQ1OSwtNTkuODQ3MDgpIiAvPgogIDwvZz4KPC9zdmc+Cg=="
          className={classes.image}
        />
        <span display="inline" className={classes.span}>
          We acknowledge the Traditional Custodians of the land on which our
          office stands, The Wurundjeri people of the Kulin Nation, and pay our
          respects to Elders past, present and emerging.
        </span>
      </Box>
    </div>
  );
};

export default Footer;
