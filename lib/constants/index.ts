export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};
export const LOCALHOST_IP = "63.141.56.109";

export const INTERVALS = [
  {
    display: "Last hour",
    slug: "1h",
  },
  {
    display: "Last 24 hours",
    slug: "24h",
  },
  {
    display: "Last 7 days",
    slug: "7d",
  },
  {
    display: "Last 30 days",
    slug: "30d",
  },
  {
    display: "Last 3 months",
    slug: "90d",
  },
];

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.2, bounce: 0 },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const HOME_HOSTNAMES = new Set([
  // comment for better diffs
  "hussain.fun",
  "preview.hussain.fun",
  "localhost:3000",
]);

export const DEFAULT_REDIRECTS = {
  home: "https://hussain.fun",
  signin: "https://app.hussain.fun/login",
  login: "https://app.hussain.fun/login",
  register: "https://app.hussain.fun/register",
  signup: "https://app.hussain.fun/register",
  app: "https://app.hussain.fun",
  dashboard: "https://app.hussain.fun",
  links: "https://app.hussain.fun/links",
  settings: "https://app.hussain.fun/settings",
  welcome: "https://app.hussain.fun/welcome",
  slack: "https://dub.slack.com",
  discord: "https://twitter.com/dubdotsh", // placeholder for now
};

export const REDIRECT_HEADERS = {
  headers: {
    "x-powered-by": "hussain.fun - Link management for modern marketing teams",
  },
};

export const FREE_PLAN_PROJECT_LIMIT = 5;
export const FAVICON_FOLDER = "/_static/favicons";
export { default as COUNTRIES } from "./countries";
export { default as ccTLDs } from "./cctlds";

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = {
  "youtu.be": "youtube.com",
};

export const DEFAULT_LINK_PROPS = {
  key: "github",
  url: "https://github.com/steven-tey/dub",
  domain: "hussain.fun",
  archived: false,
  expiresAt: null,
  password: null,

  title: null,
  description: null,
  image: null,
  ios: null,
  android: null,

  clicks: 0,
  userId: "",
  createdAt: new Date(),

  proxy: false,
};
