import {get, writable, Writable} from "svelte/store";

import en from "../langs/en";

import DialogMode from "../enum/DialogMode";
import Status from "../enum/Status";
import type Service from "../types/Service";

class Core {
    constructor(
       public lang: Writable<object> = writable(en),
       public services: Writable<Array<Service>> = writable([]),
       public mode: Writable<DialogMode> = writable(DialogMode.DIALOG),
       public status: Writable<Status> = writable(Status.INITIAL_ASK),
    ) {

    }

    invokeService(key) {
        if(get(this.services)[key]) {
            get(this.services)[key].js();
        }
    }

    getCookie() {

    }

    setCookie() {

    }
}

export default new Core();