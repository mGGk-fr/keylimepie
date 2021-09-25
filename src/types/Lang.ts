interface Lang {
  thisWebsiteUseCookies: string;
  acceptAll: string;
  denyAll: string;
  personalize: string;
  dialog: {
    header: string;
    description: string;
    policy: string;
    allow: string;
    deny: string;
  };
  categories: {
    api: string;
    analytics: string;
  };
}

export default Lang;
