<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';
	import { setContext } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	setContext('defaultId', data.props.uniqueId);
</script>

<SvelteSeo
	title="Free CUID Generator - idgen.dev"
	description="Unique ID generator that supports CUID, NanoID, UUID, and more!"
/>

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About />
		<Feature />
	</div>
</div>
