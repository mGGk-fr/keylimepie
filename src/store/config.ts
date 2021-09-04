import {writable} from "svelte/store";
import fr from "../langs/fr";
import KeyLimePieState from "../enum/klpState";

export const lang = writable(fr);
export const mode = writable(KeyLimePieState.INITIAL_ASK);