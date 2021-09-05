import App from './App.svelte';
import fr from "./langs/fr";

const app = new App({
	target: document.body,
	props: {
		userLang: fr
	}
});

export default app;