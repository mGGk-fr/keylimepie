<script lang="ts">
	import {lang, status} from "./store/config";
	import KeyLimePieInfoBox from "./components/KeyLimePieInfoBox.svelte";
	import type KeyLimePieLang from "./types/KeyLimePieLang";
	import KeyLimePieState from "./enum/klpState";
	import fr from "./langs/fr";
	import KeyLimePieCookieSelector from "./components/KeyLimePieCookieSelector.svelte";

	export let userLang: KeyLimePieLang = fr;

	lang.set(userLang);
</script>

<div class="key-lime-pie">
	{#if $status === KeyLimePieState.INITIAL_ASK}
		<KeyLimePieInfoBox />
	{/if}
	{#if $status === KeyLimePieState.COOKIES_SELECTOR}
		<KeyLimePieCookieSelector/>
	{/if}
</div>

<style lang="scss">
	.key-lime-pie {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>