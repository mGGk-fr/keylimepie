import type Service from '../../types/Service';

declare global {
  interface Window {
    hj: {
      q: Array<unknown>;
    };
    _hjSettings: {
      hjid: unknown;
      hjsv: unknown;
    };
  }
}

const Hotjar: Service = {
  key: 'hotjar',
  type: 'analytics',
  name: 'Hotjar',
  uri: 'https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar',
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
    hotjarId: '',
    hotjarSv: ''
  },
  js: function () {
    'use strict';
    if (this.settings.hotjarId === undefined || this.settings.HotjarSv === undefined) {
      return;
    }
    window.hj =
      window.hj ||
      function (...args: Array<unknown>) {
        (window.hj.q = window.hj.q || []).push(...args);
      };
    window._hjSettings = {
      hjid: this.settings.hotjarId,
      hjsv: this.settings.HotjarSv
    };
    const uri = 'https://static.hotjar.com/c/hotjar-';
    const extension = '.js?sv=';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    script.src = `${uri}${this.settings.hotjarId}${extension}${this.settings.HotjarSv}`;
    document.head.append(script);
  }
};

export default Hotjar;
