<script>
	import SvelteSeo from 'svelte-seo';
	import About from '$lib/components/About.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import IdGenerator from '$lib/components/IdGenerator.svelte';

	const idSummary = `
		UUID (Universally Unique Identifier) version 1 is a type of identifier that combines a 48-bit MAC address of the generating computer
		with a 60-bit timestamp, ensuring uniqueness and representing the number of 100-nanosecond intervals
		since a specific date. It is widely used for generating unique identifiers in various systems and applications.
	`;

	const features = [
		'Time-based uniqueness: Incorporates a timestamp, ensuring each generated identifier is unique and based on the precise time it was created.',
		'MAC address inclusion: A 48-bit MAC address of the generating device is combined with the timestamp, adding an additional layer of uniqueness to the identifier.',
		'60-bit timestamp: It uses a 60-bit timestamp to represent the number of 100-nanosecond intervals since a specific date, enabling the ordering of identifiers based on their creation time.',
		'Compatibility: It is compatible with systems and applications that rely on earlier versions of UUID, ensuring seamless integration.',
		'Widespread usage: Widely adopted and used in various domains, such as databases, distributed systems, and network protocols, for generating unique identifiers.'
	];
</script>

<SvelteSeo title="UUID Generator - idgen.dev" description="Generate UUID v1 from idgen.dev" />

<div class="flex flex-col mx-auto max-w-7xl w-full px-5">
	<IdGenerator activeIdType="UUID v1" />
	<div class="flex flex-col sm:flex-row mt-5 w-full sm:space-x-4">
		<About idType="UUID v1" {idSummary} />
		<Feature idType="UUID v1" {features} />
	</div>
</div>
