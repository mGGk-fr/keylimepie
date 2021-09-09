import {writable, get} from "svelte/store";
import en from "../langs/en";

class KeyLimePieCore {
    lang = writable(en);
    services = writable({});

    constructor() {
        console.log("KeyLimePie Core Engine booting");
    }

    invokeService(key) {
        if(get(this.services)[key]) {
            get(this.services)[key].js();
        }
    }
}

export default new KeyLimePieCore();