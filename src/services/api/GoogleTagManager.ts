import type Service from '../../types/Service'

declare global {
  interface Window {
    dataLayer: any
  }
}

const GoogleTagManager: Service = {
  key: 'googletagmanager',
  type: 'api',
  name: 'Google Tag Manager',
  uri: 'https://policies.google.com/privacy',
  needConsent: true,
  cookies: [
    '_ga',
    '_gat',
    '__utma',
    '__utmb',
    '__utmc',
    '__utmt',
    '__utmz',
    '__gads',
    '_drt_',
    'FLC',
    'exchange_uid',
    'id',
    'fc',
    'rrs',
    'rds',
    'rv',
    'uid',
    'UIDR',
    'UID',
    'clid',
    'ipinfo',
    'acs'
  ],
  settings: {
    gtmId: undefined
  },
  js: function () {
    'use strict'
    if (this.settings.gtmId === undefined) {
      return
    }
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + this.settings.gtmId
    document.head.append(script)
  }
}

export default GoogleTagManager
