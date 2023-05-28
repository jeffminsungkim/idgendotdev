<script>
	/**
	 * @type {undefined}
	 */
	export let idType = undefined;

	/**
	 * @type {undefined}
	 */
	export let idSummary = undefined;
</script>

<div class="w-full space-x-2">
	<div class="p-4 rounded-xl w-full bg-zinc-200 shadow-xl shadow-zinc-900">
		<h1 class="text-zinc-800 text-3xl sm:text-4xl font-semibold mt-5 mb-10 text-center">
			About {idType ?? 'CUID'}
		</h1>
		<p class="text-zinc-800 text-base sm:text-xl">
			{idSummary ??
				`
        Eric Elliott developed a method called CUID (Collision Resistant Unique Identifier) to
			generate unique identifiers. The main objective behind this approach is to create IDs that are
			unique and suitable for web applications, particularly in terms of facilitating horizontal
			scaling and optimizing sequential lookup performance.
        `}
		</p>
	</div>
</div>
