// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Name React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Attendant Bot",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/taka41s",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Company",
      items: [
        { name: "about us", href: "https://github.com/taka41s" },
        { name: "freebies", href: "https://github.com/taka41s" },
        { name: "premium tools", href: "https://github.com/taka41s" },
        { name: "blog", href: "https://github.com/taka41s" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://github.com/taka41s" },
        { name: "affiliate program", href: "https://github.com/taka41s" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://github.com/taka41s" },
        { name: "knowledge center", href: "https://github.com/taka41s" },
        { name: "custom development", href: "https://github.com/taka41s"},
        { name: "sponsorships", href: "https://github.com/taka41s" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://github.com/taka41s" },
        { name: "privacy policy", href: "https://github.com/taka41s" },
        { name: "licenses (EULA)", href: "https://github.com/taka41s" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Attendant Bot by{" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Taka41s
      </MKTypography>
      .
    </MKTypography>
  ),
};
