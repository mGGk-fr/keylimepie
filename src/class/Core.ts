import { get, writable, Writable } from 'svelte/store';

import en from '../langs/en';

import DialogMode from '../enum/DialogMode';
import Status from '../enum/Status';
import type Lang from '../types/Lang';
import type Service from '../types/Service';
import type ConfigCookie from '../types/ConfigCookie';
import CookieManager from '../utils/CookieManager';
import ServiceAcceptance from '../enum/ServiceAcceptance';

class Core {
  constructor(
    public lang: Writable<Lang> = writable(en),
    public services: Writable<Record<string, Service>> = writable({}),
    public mode: Writable<DialogMode> = writable(DialogMode.DIALOG),
    public status: Writable<Status> = writable(Status.INITIAL_ASK),
    public config: Writable<ConfigCookie> = writable({ services: {} })
  ) {}

  initLogic(): void {
    if (this.registredServicesKeys.length === 0) {
      this.status.set(Status.NO_COOKIES);
    } else {
      if (!this.checkServiceCohesion()) {
        this.status.set(Status.INITIAL_ASK);
      } else {
        this.status.set(Status.ICON);
      }
      this.loadAllowedService();
    }
  }

  get registredServices(): Record<string, Service> {
    return get(this.services);
  }

  get registredServicesKeys(): Array<string> {
    return Object.keys(this.registredServices);
  }

  get registredServicesValues(): Array<Service> {
    return Object.values(this.registredServices);
  }

  get localConfig(): ConfigCookie {
    return CookieManager.getConfigCookie();
  }

  checkServiceCohesion() {
    let isCoherent = true;
    this.registredServicesKeys.forEach((serviceKey: string) => {
      if (!this.localConfig.services[serviceKey]) {
        isCoherent = false;
      }
    });
    return isCoherent;
  }

  loadAllowedService() {
    this.registredServicesKeys.forEach(key => {
      if (this.localConfig.services[key]) {
        if (this.registredServices[key]) {
          this.invokeService(key);
        }
      }
    });
  }

  get categories(): Array<string> {
    return this.registredServicesValues.reduce<string[]>(
      (acc: Array<string>, service: Service) => {
        if (!acc.includes(service.type)) {
          acc.push(service.type);
        }
        return acc;
      },
      []
    );
  }

  invokeService(key: string): void {
    if (this.registredServices[key]) {
      this.registredServices[key].js();
    }
  }

  getServiceStatus(key: string): ServiceAcceptance {
    if (this.localConfig.services[key] === undefined) {
      return ServiceAcceptance.NONE;
    }
    return this.localConfig.services[key]
      ? ServiceAcceptance.ALLOWED
      : ServiceAcceptance.DENIED;
  }
}

export default new Core();
