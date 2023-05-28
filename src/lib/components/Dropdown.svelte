<script>
	import { IconChevronDown } from '@tabler/icons-svelte';

	let open = false;
	/**
	 * @type {HTMLDivElement}
	 */
	let container;

	function onWindowClick(e) {
		if (container.contains(e.target) == false) open = false;
	}
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container}>
	<button
		class="hidden sm:flex px-4 py-2 hover:opacity-50 hover:rounded-full hover:bg-[#411F2B] hover:py-2 hover:px-4"
		on:click={() => (open = !open)}
	>
		UUID
		<IconChevronDown class="sm:mx-1" size={25} stroke={1} />
	</button>

	{#if open}
		<nav
			class="absolute z-10 mt-2 w-32 max-w-sm -translate-x-2 transform rounded-2xl bg-[#1A1C27] shadow border border-zinc-700"
		>
			<div class="flex items-center select-none w-full space-y-2 mt-2 text-center">
				<a
					href="/uuid/v1"
					class="w-full py-2 hover:mx-2 hover:rounded-2xl hover:bg-[#411F2B] hover:opacity-50"
					on:click={() => (open = false)}>v1</a
				>
			</div>
			<div class="flex space-x-36 items-center select-none w-full space-y-2 text-center">
				<a
					href="/uuid/v4"
					class="w-full py-2 mb-2 hover:mx-2 hover:rounded-2xl hover:bg-[#411F2B] hover:opacity-50"
					on:click={() => (open = false)}>v4</a
				>
			</div>
		</nav>
	{/if}
</div>
