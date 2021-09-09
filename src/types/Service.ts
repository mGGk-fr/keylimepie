interface Service {
    key: string;
    type: string;
    name: string;
    uri: string;
    needConsent: boolean;
    cookies: Array<string>;
    settings: any;
    js: () => void;
}

export default Service;