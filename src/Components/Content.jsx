import Box from "@mui/material/Box";
import ContentItem from "./ContentItem";

export default function Content() {
  const array = [
    {
      video:
        "https://videos.ctfassets.net/lbsm39fugycf/1i6LctbRMzKsEmWCdbZWe8/3aecc0e1dd43fa2e291e9d6778c822ee/link_to_anywhere.mp4",
      heading: "Use it anywhere",
      info: "Take your Linktree wherever your audience is, to help them to discover all your important content.",
    },
    {
      video:
        "https://videos.ctfassets.net/lbsm39fugycf/7oDgvpqZimd2N3qRJ3FOmx/be9603d765dc8bedd0d57ae02dc50579/linktree-for-tiktok-hero-2.mp4",
      heading: "Link to everywhere",
      info: "Linktree is the launchpad to your latest video, article, recipe, tour, store, website, social post - everywhere you are online.",
    },
    {
      video:
        "https://videos.ctfassets.net/lbsm39fugycf/2nDAujY8vMUV9YqWibCh4g/440bce7b1ba4bdf2171f7f6d12460238/Linktree-CommerceLinks-600x600-V02.mp4",
      heading: "Collect payments",
      info: "From tips for your content, to donations for your projects, let your fans & followers support you in monetizing your passions.",
    },
    {
      video:
        "https://videos.ctfassets.net/lbsm39fugycf/4jcMGgBbI0ZkJxn9Wqy3DK/61f26c5d0e317799c58e48cd484ce1e6/linktree-causes-landing-page-hero-1.mp4",
      heading: "Easily managed",
      info: "Creating a Linktree takes seconds. Use our simple drag-and-drop editor to effortlessly manage your content.",
    },
    {
      video:
        "https://videos.ctfassets.net/lbsm39fugycf/sIs4r4Dsm900MujwohP6t/4c011329a2b8708500ae5d43eacf66be/website_security_8s-WebCompressed.mp4",
      heading: "Safe, trusted, private",
      info: "Privacy is non-negotiable. Linktree doesn’t track any personal data on your visitors, so your Linktree remains your place on the internet.",
    },
  ];

  return (
    <Box
      sx={{
        "@media (max-width: 767px)": {
          padding: "35px 0px",
        },
        padding: "64px 0px",
      }}
    >
      <Box
        sx={{
          "@media (max-width: 767px)": {
            padding: "0px 30px",
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
            "@media (max-width: 767px)": {
              margin: 0,
          },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "7.98611vw 0px",
            padding: "0px",
            width: "auto",
            height: "auto",
          }}
        >
          {array.map((content, i) => (
            <ContentItem
              key={i}
              number={i}
              video={content.video}
              heading={content.heading}
              info={content.info}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
