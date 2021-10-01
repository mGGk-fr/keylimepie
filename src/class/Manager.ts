import KeyLimePie from '../components/KeyLimePie.svelte';
import KeyLimePieCore from './Core';
import services from '../services/services';
import type Service from '../types/Service';
import type Lang from '../types/Lang';
import Langs from '../langs/Langs';

class Manager {
  instance: KeyLimePie | undefined = undefined;
  langs: Record<string, Lang> = Langs;
  declaredServices: Record<string, Service> = {};
  selectedLang: Lang = Langs.en;

  addService(serviceKey: string, settings: Record<string, unknown>): void {
    const service = Object.values(services).find(service => {
      return service.key === serviceKey;
    });
    if (service) {
      service.settings = settings;
      this.declaredServices[serviceKey] = service;
    }
  }

  setLang(langKey: string): void {
    if (this.langs[langKey]) {
      this.selectedLang = this.langs[langKey];
    } else {
      throw new Error('Unknown lang');
    }
  }

  addCustomService(service: Service) {
    this.declaredServices[service.key] = service;
  }

  initialise(): void {
    KeyLimePieCore.services = this.declaredServices;
    KeyLimePieCore.lang = this.selectedLang;
    this.instance = new KeyLimePie({
      target: document.body
    });
    KeyLimePieCore.initLogic();
  }
}

export default Manager;
