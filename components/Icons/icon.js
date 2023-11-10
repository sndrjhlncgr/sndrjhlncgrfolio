import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconMedium,
  IconStackOverflow,
  IconBehance,
  IconDev,
  IconCodeSandBox
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    case "medium":
      return <IconMedium />;
    case "stackoverflow":
      return <IconStackOverflow />;
    case "behance":
      return <IconBehance />;
    case "dev":
      return <IconDev />;
    case "codesandbox":
      return <IconCodeSandBox />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
