import {writable} from "svelte/store";
import fr from "../langs/fr";
import KeyLimePieState from "../enum/klpState";

export const lang = writable(fr);
export const status = writable(KeyLimePieState.INITIAL_ASK);