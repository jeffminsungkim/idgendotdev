<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';

	const idSummary = `
		A GUID (Globally Unique Identifier) is a unique identifier consisting of a 128-bit value.
		It is commonly used in computer systems and applications to uniquely identify objects or entities.
		GUIDs are generated using algorithms that ensure an extremely low probability of generating duplicate identifiers.
		They are platform-independent and widely employed in various contexts, providing a reliable and standardized way to identify and reference resources.
	`;

	const features = [
		'Uniqueness: Designed to be globally or universally unique, ensuring an extremely low probability of generating duplicate identifiers.',
		'Standardized format: It follows a standardized format that typically consists of 32 hexadecimal digits grouped into sections, separated by hyphens. This format allows for easy recognition and interpretation.',
		'Wide range: A large range of possible values, allowing for a vast number of unique identifiers to be generated. This is achieved through a combination of factors such as timestamps, MAC addresses, and random numbers.',
		'Platform independence: Not tied to any specific platform or system, making them portable and compatible across different environments and applications.',
		'Persistence: Can be generated and assigned to objects or entities during their lifetime and retain their uniqueness even when data is moved or replicated across different systems.',
		'Low collision probability: While not entirely impossible, the likelihood of collisions (identical GUIDs being generated) is extremely rare due to the large number of possible values.',
		'Limited predictability: Difficult to predict or guess, providing a level of security in certain scenarios.'
	];
</script>

<SvelteSeo title="GUID Generator - idgen.dev" description="Generate GUID from idgen.dev" />

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator activeIdType="GUID" />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About idType="GUID" {idSummary} />
		<Feature idType="GUID" {features} />
	</div>
</div>
