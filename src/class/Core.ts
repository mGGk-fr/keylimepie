import { get, writable, Writable } from 'svelte/store';

import en from '../langs/en';

import DialogMode from '../enum/DialogMode';
import Status from '../enum/Status';
import Lang from '../types/Lang';
import Service from '../types/Service';
import ConfigCookie from '../types/ConfigCookie';

class Core {
  constructor(
    public lang: Writable<Lang> = writable(en),
    public services: Writable<Record<string, Service>> = writable({}),
    public mode: Writable<DialogMode> = writable(DialogMode.DIALOG),
    public status: Writable<Status> = writable(Status.INITIAL_ASK),
    public config: Writable<ConfigCookie> = writable({ services: {} })
  ) {}

  initLogic(): void {
    if (Object.keys(get(this.services)).length === 0) {
      this.status.set(Status.NO_COOKIES);
    }
  }

  invokeService(key: string) {
    if (get(this.services)[key]) {
      get(this.services)[key].js();
    }
  }
}

export default new Core();
