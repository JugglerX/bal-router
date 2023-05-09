export type Theme = {
  objectID: string;
  themeKey: string;
  title: string;
  description: string;
  defaultBranch?: string;
  avatarUrl: string;
  author: string;
  githubUrl?: string;
  demoUrl: string;
  stars?: number;
  reporepoCreatedAt?: string;
  categories?: Categories;
  lastCommitOnDefaultBranch?: string;
  lastCheckedGithub?: string;
  license?: string;
  content?: string;
  affiliateUrl?: string;
  distribution?: string;
  price?: number;
  ranking?: number;
  demo?: {
    externalDemo?: boolean;
    directDemo?: string;
    siteDemo?: string;
  };
  affiliate?: {
    learnMore?: boolean;
    lemonSqueezyProductAffiliateUrl?: string;
    lemonSqueezyCheckoutAffiliateUrl?: string;
  };
};

export type Categories = {
  ssg?: string[];
  css?: string[];
  archetype?: string[];
  cms?: string[];
  features?: string[];
  ui?: string[];
  blueprint?: string[];
  dependencies?: string[];
  database?: string[];
};

export type CategoryMeta = {
  id: string;
  label: string;
  weight?: number;
  simpleIconClasses?: string;
  simpleIconColor?: string;
  fontawesomeIconClasses?: string;
  iconFilename?: string;
  tagline: string;
  description: string;
  metaTitle?: string;
  pageTitle?: string;
};

export type Filter = {
  id: string;
  name: string;
  attribute: string;
  props?: {
    limit?: number;
    showMore?: boolean;
    showMoreLimit?: number;
  };
};

export type Author = {
  author: string;
  title?: string;
  authorGithubUrl?: string;
  authorHomepageUrl?: string;
  authorHomepageDisplayUrl?: string;
  description?: string;
  avatarUrl?: string;
  twitter?: string[];
  special?: {
    heading?: string;
    url?: string;
    discount?: string;
  };
};
