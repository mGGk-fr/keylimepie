import Cookies from 'js-cookie';
import type ConfigCookie from '../types/ConfigCookie';

const KLP_CONFIG_COOKIE_NAME = 'klp_config';

class CookieManager {
  allowService(serviceKey: string) {
    const config = this.getConfigCookie();
    config.services[serviceKey] = true;
    this.saveConfigCookie(config);
  }
  denyService(serviceKey: string) {
    const config = this.getConfigCookie();
    config.services[serviceKey] = false;
    this.saveConfigCookie(config);
  }
  saveConfigCookie(value: ConfigCookie) {
    Cookies.set(KLP_CONFIG_COOKIE_NAME, JSON.stringify(value), {
      secure: true,
      sameSite: 'strict'
    });
  }
  getConfigCookie(): ConfigCookie {
    const configCookie = Cookies.get(KLP_CONFIG_COOKIE_NAME);
    if (configCookie) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const config: ConfigCookie = JSON.parse(configCookie);
      if (config.services) {
        return config;
      }
    }
    this.saveConfigCookie({ services: {} });
    return { services: {} };
  }
}

export default new CookieManager();
