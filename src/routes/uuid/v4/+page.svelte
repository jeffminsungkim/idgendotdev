<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';

	const idSummary = `
		UUID (Universally Unique Identifier) version 4 is a type of identifier that is randomly generated, offering
		a high level of uniqueness without any reliance on timestamps or MAC addresses.
		It is widely used for generating unique identifiers in a variety of systems and applications.
	`;

	const features = [
		'Randomness: Generates identifiers using random or pseudo-random values, ensuring a high level of uniqueness without relying on timestamps or MAC addresses.',
		'Uniqueness: Every generated identifier of this type is statistically unique, resulting in a highly improbable occurrence of duplicate identifiers.',
		'Simplified structure: A simplified structure, consisting of randomly generated bits organized in a standardized format, making it easy to generate and interpret.',
		'Platform independence: It is not tied to any specific platform or system, making it portable and compatible across different environments and applications.',
		'Wide range: Provides a wide range of possible values, allowing for a large number of unique identifiers to be generated.',
		'Commonly used: Widely adopted and utilized in various domains, such as databases, distributed systems, and software development, for generating unique identifiers.'
	];
</script>

<SvelteSeo title="UUID Generator - idgen.dev" description="Generate UUID v4 from idgen.dev" />

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator activeIdType="UUID v4" />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About idType="UUID v4" {idSummary} />
		<Feature idType="UUID v4" {features} />
	</div>
</div>
