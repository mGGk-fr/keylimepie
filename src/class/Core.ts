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
  public lang: Lang = en;
  public services: Record<string, Service> = {};
  public mode: DialogMode = DialogMode.DIALOG;
  public status: Writable<Status> = writable(Status.INITIAL_ASK);
  public servicesStatus: Writable<Record<string, ServiceAcceptance>> = writable({});

  initLogic(): void {
    if (this.registredServicesKeys.length === 0) {
      this.status.set(Status.NO_COOKIES);
    } else {
      this.loadServicesStatus();
      if (!this.checkServiceCohesion()) {
        this.status.set(Status.INITIAL_ASK);
      } else {
        this.status.set(Status.ICON);
      }
      this.loadAllowedService();
    }
  }

  get registredServicesKeys(): Array<string> {
    return Object.keys(this.services);
  }

  get registredServicesValues(): Array<Service> {
    return Object.values(this.services);
  }

  get localConfig(): ConfigCookie {
    return CookieManager.getConfigCookie();
  }

  loadServicesStatus(): void {
    this.servicesStatus.set(
      Object.keys(this.localConfig.services).reduce((acc, serviceKey) => {
        return {
          ...acc,
          [serviceKey]: this.localConfig.services[serviceKey]
            ? ServiceAcceptance.ALLOWED
            : ServiceAcceptance.DENIED
        };
      }, {} as Record<string, ServiceAcceptance>)
    );
  }

  checkServiceCohesion(): boolean {
    let isCoherent = true;
    this.registredServicesKeys.forEach((serviceKey: string) => {
      if (!this.localConfig.services[serviceKey]) {
        isCoherent = false;
      }
    });
    return isCoherent;
  }

  loadAllowedService(): void {
    Object.keys(get(this.servicesStatus)).forEach(serviceKey => {
      if (get(this.servicesStatus)[serviceKey]) {
        this.invokeService(serviceKey);
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
    if (this.services[key]) {
      this.services[key].js();
    }
  }

  getServiceStatus(key: string): ServiceAcceptance {
    console.log(key);
    if (this.localConfig.services[key] === undefined) {
      return ServiceAcceptance.NONE;
    }
    return this.localConfig.services[key]
      ? ServiceAcceptance.ALLOWED
      : ServiceAcceptance.DENIED;
  }
}

export default new Core();
