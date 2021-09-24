interface Service {
  key: string;
  type: string;
  name: string;
  uri: string;
  needConsent: boolean;
  cookies: Array<string>;
  settings: Record<string, unknown>;
  js: () => void;
}

export default Service;
