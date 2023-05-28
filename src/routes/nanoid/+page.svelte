<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';

	const idSummary = `
    NanoID is a lightweight and customizable library that generates compact and unique identifiers.
    It offers options to modify the identifier's alphabet and specify a desired size, providing flexibility to suit various needs.
    NanoID's small code footprint and URL-friendly output make it an efficient solution for
    generating unique identifiers in different applications and environments.
	`;

	const features = [
		'Small size: Generates compact identifiers, typically consisting of 21 characters, making them efficient in terms of storage and transmission.',
		'Lightweight: Designed to be a lightweight solution, with a small code footprint and minimal dependencies, making it suitable for various applications and environments.',
		'Randomness: It uses random or pseudo-random values to ensure a high level of uniqueness without relying on external factors such as timestamps or MAC addresses.',
		`Customizability: Allows for customization by offering options such as changing the identifier's alphabet or defining a specific size, providing flexibility to suit different requirements.`,
		'URL-friendly: URL-friendly identifiers that can be easily used within URLs without the need for encoding or decoding.'
	];
</script>

<SvelteSeo title="NanoID Generator - idgen.dev" description="Generate NanoID from idgen.dev" />

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator activeIdType="NanoID" />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About idType="NanoID" {idSummary} />
		<Feature idType="NanoID" {features} />
	</div>
</div>
