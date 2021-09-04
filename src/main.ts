import App from './App.svelte';
import en from "./langs/en";

const app = new App({
	target: document.body,
	props: {
		userLang: en
	}
});

export default app;