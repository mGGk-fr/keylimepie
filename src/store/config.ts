import {writable} from "svelte/store";
import fr from "../langs/fr";
import Status from "../enum/Status";

export const lang = writable(fr);
export const status = writable(Status.INITIAL_ASK);