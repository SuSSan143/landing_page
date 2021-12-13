import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion dense={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem component="a" href="https://linktr.ee/blog/">Blog</ListItem>
            <ListItem component="a" href="https://linktr.ee/s/about/">About</ListItem>
            <ListItem component="a" href="https://linktr.ee/s/press/">Press</ListItem>
            <ListItem component="a" href="https://linktr.ee/s/careers/">Careers</ListItem>
            <ListItem component="a" href="https://linktr.ee/s/social-good/">Social Good</ListItem>
            <ListItem component="a" href="https://linktr.ee/s/contact/">Contact</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion dense={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Partnerships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
          <ListItem component="a" href="https://linktr.ee/s/enterprise/">Linktree for Enterprise</ListItem>
          <ListItem component="a" href="https://linktr.ee/s/charities/">Charities</ListItem>
          <ListItem component="a" href="https://linktr.ee/s/charities/">Linktree Ambassador</ListItem>

          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion dense={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
          <ListItem component="a" href="https://help.linktr.ee/">Help Topics</ListItem>
          <ListItem component="a" href="https://linktr.ee/help/linktree-ff524ba1864c/en/collections/3020860-getting-started-with-linktree/">Getting Started</ListItem>
          <ListItem component="a" href="https://linktr.ee/help/linktree-ff524ba1864c/en/collections/3020861-product-features/">Features How To</ListItem>
          <ListItem component="a" href="https://intercom.help/linktree-ff524ba1864c/en/collections/3020859-faqs/">FAQs</ListItem>
          <ListItem component="a" href="https://linktr.ee/s/report/">Report a violation</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion dense={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Trust & Legal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
          <ListItem component="a" href="https://linktr.ee/s/terms/">Terms & Conditions</ListItem>
          <ListItem component="a" href="https://linktr.ee/s/privacy/">Privacy Policy</ListItem>
          <ListItem component="a" href="https://linktr.ee/s/trust-centre/">Trust Centre</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
