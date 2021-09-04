<script lang="ts">
	import * as config from './store/config';
	import KeyLimePieInfoBox from "./components/KeyLimePieInfoBox.svelte";
	import type KeyLimePieLang from "./types/KeyLimePieLang";

	export let lang: KeyLimePieLang;

	config.lang.set(lang);
</script>

<div class="key-lime-pie">
	<KeyLimePieInfoBox />
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