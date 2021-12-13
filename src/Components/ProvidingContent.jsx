// import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProvidingContent() {
  const array = [
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4ehEuMFz2MN0whocgtEdjH/cf15be6ed10e4b27ce95887e55b1b8b9/linktree-features-customization.png?w=465&h=465&q=75&fm=webp",
      heading: "Customize your Linktree",
      info: "Make your Linktree pop. Embody your brand through custom colors, fonts and images.",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/2PeKYxaoIbWPIcnUagYSDS/4c194674cd1a0a9abc62d26371a768a9/linktree-features-analytics.png?w=465&h=465&q=75&fm=webp",
      heading: "Analytics and Insights",
      info: "Gain valuable insight into your traffic and discover which content is performing with your audience.",
    },
    {
      url: "https://images.ctfassets.net/lbsm39fugycf/4ETNPMtKJPE37QSt5kfgm9/e18948bbc0d7fb4ce1a7c81b6e07d4fa/linktree-features-integrations.png?w=465&h=465&q=75&fm=webp",
      heading: "Powerful Third-Party Integrations",
      info: "Collect email subscribers, connect with third-party analytics and remarket to your audience.",
    },
  ];
  return (
    <Box
      sx={{
        "@media (max-width: 767px)": {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "repeat(3, 1fr)",
        },
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "64px 3.33%",
      }}
    >
      {array.map((item, i) => (
        <Box
          key={i}
          sx={{
            flex: "1 1 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: "0px 24px",
            boxSizing: "border-box",
          }}
        >
          <CardMedia
            sx={{
              "@media (max-width: 767px)": {
                width: "calc(100% - 104px)",
                margin: "0px 56px 16px",
                // paddingBottom: "calc(100% - 104px)",
              },
              height: "auto",
              width: "100%",
              // paddingBottom: "100%",
              position: "relative",
              marginBottom: "32px",
              overflow: "hidden",
            }}
            component="img"
            image={item.url}
            alt="pic"
          />
          <Typography
            sx={{
              "@media(min-width: 1441px)": {
                fontSize: "32px",
              },
              "@media (max-width: 767px)": {
                fontSize: "20px",
                lineHeight: 1.6,
                letterSpacing: "calc(-0.4px)",
              },
              paddingBottom: "8px",
              width: "100%",
              textAlign: "center",
              fontSize: "2.22222vw",
              lineHeight: "1.25",
              minHeight: "calc(5.55556vw)",
            }}
            variant="h4"
            gutterBottom
            component="span"
          >
            {item.heading}
          </Typography>
          <Typography
            sx={{
              "@media(min-width: 1441px)": {
                fontSize: "20px",
              },
              "@media (max-width: 767px)": {
                fontSize: "16px",
                lineHeight: 1.75,
                padding: "0px 16px",
                boxSizing: "border-box",
                letterSpacing: "calc(-0.32px)",
              },
              paddingBottom: "8px",
              width: "100%",
              textAlign: "center",
              fontSize: "1.38889vw",
              lineHeight: 1.6,
              color: "rgb(38, 50, 56)",
            }}
            variant="subtitle1"
            gutterBottom
            component="span"
          >
            {item.info}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
