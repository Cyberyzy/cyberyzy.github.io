import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://cyberyzy.github.io", // replace this with your deployed domain
  author: "Eric Yang",
  profile: "https://cyberyzy.github.io",
  desc: "A note of my life",
  title: "Eric Yang's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Cyberyzy",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:erizzyang@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
