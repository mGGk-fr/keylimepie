import Cookies from 'js-cookie'
import type ConfigCookie from '../types/ConfigCookie'

const KLP_CONFIG_COOKIE_NAME = 'klp_config'

class CookieManager {
  allowService(serviceKey: string) {
    const config = this.getConfigCookie()
    config.services[serviceKey] = true
    this.saveConfigCookie(config)
  }
  denyService(serviceKey: string) {
    const config = this.getConfigCookie()
    config.services[serviceKey] = false
    this.saveConfigCookie(config)
  }
  saveConfigCookie(value: ConfigCookie) {
    Cookies.set(KLP_CONFIG_COOKIE_NAME, value, {
      secure: true,
      sameSite: 'strict'
    })
  }
  getConfigCookie(): ConfigCookie {
    const configCookie = Cookies.get(KLP_CONFIG_COOKIE_NAME)
    if (configCookie) {
      return JSON.parse(configCookie)
    }
    this.saveConfigCookie({ services: {} })
    return { services: {} }
  }
}

export default new CookieManager()
