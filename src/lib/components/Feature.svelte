<script>
	/**
	 * @type {undefined}
	 */
	export let idType = undefined;
	export let features = [
		'Uniqueness: Globally unique, minimizing the chances of generating duplicate identifiers.',
		'Sequential lookup performance: Optimized for efficient sequential lookup, allowing for quick retrieval and indexing of related data.',
		'Horizontal scaling support: Facilitate horizontal scaling by enabling distributed systems to generate IDs without central coordination.',
		'Compactness: Relatively short alphanumeric strings, making them efficient in terms of storage and transmission.',
		'URL-friendly: Designed to be easily incorporated into URLs without the need for encoding or decoding.'
	];
</script>

<div class="w-full mt-4 space-x-2 sm:mt-0">
	<div
		class="p-4 rounded-xl w-full bg-gradient-to-t from-[#513A42] via-[#202C3B] to-[#1A1C27] shadow-xl"
	>
		<h1 class="text-3xl sm:text-4xl font-semibold mt-5 mb-10 text-center">
			Features of {idType ?? 'CUID'}
		</h1>

		<ul class="px-2 list-decimal list-inside text-base sm:text-xl">
			{#each features as feature}
				<li class="py-2">{feature}</li>
			{/each}
		</ul>
	</div>
</div>
