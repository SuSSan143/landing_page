import React from "react";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import HorizontalScroll from "react-horizontal-scrolling";


const useStyles = makeStyles({
  svg: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    color: "rgb(255, 255, 255)",
    width: "24px",
    height: "24px",
    fill: "transparent",
    stroke: "none",
  },
  rect: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    color: "rgb(255, 255, 255)",
  },
});

const HscrollContent = () => {
  const classes = useStyles();
  const array = [
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4wxkOni6EugDJ8wZ2orxcx/c595ded258cb28437f58e552d0f8e893/selena-gomez-email.png?w=480&h=320&q=75&fm=webp",
      name: "Selena Gomez",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/4wxkOni6EugDJ8wZ2orxcx/c595ded258cb28437f58e552d0f8e893/selena-gomez-email.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4163aViu2ZFFMkQ8T8xnXN/9d53dc6659f30004b775befefd769989/linktree-profile-the-guardian.png?w=480&h=320&q=75&fm=webp",
      name: "The Guardian",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/5BqDT3RSS3dvxE1Oywur0B/c28dd3fc59180f27b81e456b4621354f/profile-the-guardian.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/2Biv29qX3Tg8SNzityqPgh/4bbf58930ccf05c31de0de9f6595d132/linktree-profile-gary-vee.png?w=480&h=320&q=75&fm=webp",
      name: "Gary Vee",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/53haCYAtpPPTREPB0QaTmT/fa9728d6cdd133963b4d4ff5e0707509/profile-image-gary-vee.jpeg?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/3mwwj3hHNDt05uK78dUqgB/f84cb74ec2da6d5062a1cb965800ebb2/linktree-profile-la-clippers.png?w=480&h=320&q=75&fm=webp",
      name: "LA Clippers",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/4VqGXK6lLV7PDkbWrF7m91/25c538ba937c216c9bba655d7584d48a/profile-la-clippers.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/5RJm5b0XBF0uyLN0WY2Nkh/4653f16f4092ac6ef4fd2df580da5768/alicia.jpg?w=480&h=320&q=75&fm=webp",
      name: "Alicia Keys",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/5RJm5b0XBF0uyLN0WY2Nkh/4653f16f4092ac6ef4fd2df580da5768/alicia.jpg?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/7GCWhKDuGh9DRYhLX8zj9X/82decadb439c8b7dba9e77d9c82489c1/linktree-profile-red-bull.png?w=480&h=320&q=75&fm=webp",
      name: "Red Bull",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/3CFfTjWY9EYJmU4NHTY78F/9326e3158e547fec90e4d7d6d12e8eff/profile-image-red-bull.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/1E04QV5a8smC8PGXYJwmam/d88e5da83ae61377a5f401cbb5a35f66/linktree-profile-pharrell.png?w=480&h=320&q=75&fm=webp",
      name: "Pharrell",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/4En49xQUZd2EQ4xE2fm9g4/35be6f0b9d16d58d8a1a8eabbf8fce63/profile-image-pharrell.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/3Ig0zfS6AbGX3QJ8DMKtIC/40064cbbfee675ae3c9db88e56f04a8c/linktree-profile-rhettandlink.png?w=480&h=320&q=75&fm=webp",
      name: "Rhett and Link",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/3yh8PbSFJQRUksQ9RNhcAZ/7a45e5f0bf1d8d9f90913fb370c315c7/d8lM6kdSgemAG3nUUo0w_491deec0bc3d3c6dc88bbabf37e06221?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4KaHSQfVPunZm6HfFpDguK/0912191c8b6262bc4d33edf6e7d898db/linktree-profile-comedy-central.png?w=480&h=320&q=75&fm=webp",
      name: "Comedy Central",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/7fKdkjryQn6kJYCmZA7dWk/0d9869cbdd6d926bab7a5983ff15d787/logo-comedy-central.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/6cRmGQncuepUtpbtVzgfFF/f09468565b486160be02f5fc08eaa0ec/linktree-profile-qantas.png?w=480&h=320&q=75&fm=webp",
      name: "QANTAS",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/3LUCJ9X8huziRNuDZn6nwa/b66cb5c9b921ffb42ecfc95c8a4f078d/100_Capsule-Logo-2016_1518x1012.jpg?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4ZfkgQ2acODJxXbmwGVJ4W/58c117131dfb7856e671b42d0cbf5696/linktree-profile-patreon.png?w=480&h=320&q=75&fm=webp",
      name: "Patreon",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/73HBoPDTUBTvfxZ8fIcLO/08c0d017d3f74e649a7bdd33cd07db45/patreon-linktree-profile-image.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/3w8ZeA0Eebl5sKo6zFmpDV/85ba5371a71cc466ba71f879242fc073/linktree-profile-loreal.png?w=480&h=320&q=75&fm=webp",
      name: "L'Oréal Paris",
      avatar:
        "https://images.ctfassets.net/lbsm39fugycf/73HBoPDTUBTvfxZ8fIcLO/08c0d017d3f74e649a7bdd33cd07db45/patreon-linktree-profile-image.png?w=48&h=48&q=75&fm=webp&fit=fill",
    },
  ];

  function SVG() {
    return (
      <svg viewBox="0 0 24 24" className={classes.svg}>
        <rect className={classes.rect}></rect>
        <path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z"></path>
        <path d="M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z"></path>
      </svg>
    );
  }
  return (
    <>
      <Box
        sx={{
          "@media (max-width: 767px)": {
            paddingLeft: "13px",
        },
          paddingLeft: "64px",
          "@media (min-width: 1441px)": {
            paddingLeft: "calc((100vw - 1152px) / 2)",
          },
        }}
      >
        <HorizontalScroll>
          {array.map((item, i) => (
            <Box
              key={i}
              sx={{
                "@media (min-width: 1441px)": {
                  paddingRight: "48px",
                },
                paddingRight: "3.33333vw",
                overflowX: "auto",
              }}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  color: "rgb(19, 20, 21)",
                  lineHeight: 1.6,
                }}
                href="#"
              >
                <Box sx={{ position: "relative", marginBottom: "16px" }}>
                  <CardMedia
                    sx={{
                      width: "21.6667vw",
                      maxWidth: "320px",
                      minWidth: "247px",
                      display: "block",
                      clipPath: "inset(0px round 24px)",
                      transition: "clip-path 0.35s ease 0s",
                      position: "relative",
                      //   overflowX: "scroll",
                    }}
                    component="img"
                    height="140"
                    image={item.url}
                    alt="green iguana"
                  />
                </Box>
                {SVG()}
              </Link>
              <Box
                sx={{
                  display: "flex",
                  // -webkit-box-align: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ marginRight: "16px" }}
                  alt="Remy Sharp"
                  src={item.avatar}
                />
                <Typography
                  sx={{
                    color: "rgb(38, 50, 56)",
                    fontSize: "20px",
                    lineHeight: 1.6,
                    letterSpacing: "calc(-0.4px)",
                    fontWeight: "normal",
                    display: "block",
                  }}
                  variant="body1"
                  gutterBottom
                  component="spam"
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </HorizontalScroll>
      </Box>
    </>
  );
};

export default HscrollContent;
