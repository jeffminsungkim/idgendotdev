<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';
</script>

<SvelteSeo title="CUID Generator - idgen.dev" description="Generate CUID from idgen.dev" />

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator activeIdType="CUID" />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About idType="CUID" />
		<Feature idType="CUID" />
	</div>
</div>
