<script>
	import { IconMenu2 } from '@tabler/icons-svelte';
	import Dropdown from './Dropdown.svelte';

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

<nav>
	<div class="flex items-center w-full h-14 bg-[#1A1C27] drop-shadow-lg p-6 sm:p-8 cursor-pointer">
		<div class="flex w-full sm:max-w-7xl mx-auto">
			<div class="flex text-2xl font-semibold w-full">
				<a href="/" class="flex px-4 py-2 hover:text-zinc-400">IDGen.dev</a>
			</div>

			<!-- desktop nav -->
			<div class="hidden lg:flex">
				<div class="flex items-center select-none text-xl sm:space-x-24">
					<a href="/cuid" class="flex px-4 py-2 hover:text-zinc-400">CUID</a>
					<a href="/guid" class="flex px-4 py-2 hover:text-zinc-400">GUID</a>
					<a href="/nanoid" class="flex px-4 py-2 hover:text-zinc-400">NanoID</a>
					<Dropdown />
				</div>
				<a
					href="https://github.com/jeffminsungkim/idgendotdev"
					rel="noreferrer noopener"
					target="_blank"
					class="flex px-4 py-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={30}
						height={30}
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
			</div>

			<!-- mobile nav -->
			<div bind:this={container} class="flex mx-auto first:mr-auto items-center lg:hidden">
				<button on:click={() => (open = !open)}>
					<IconMenu2 class="" size={28} stroke={1} />
				</button>
			</div>
			{#if open}
				<nav
					class="absolute right-5 z-10 mt-10 w-32 max-w-sm shadow bg-[#1A1C27] transform rounded-2xl"
				>
					<div
						class="flex flex-col items-center text-center overflow-hidden py-2 space-y-2 rounded-2xl shadow-lg border border-zinc-700"
					>
						<a
							href="/cuid"
							class="w-full cursor-pointer text-sm py-2 hover:rounded-2xl hover:bg-red-800 hover:opacity-20"
							>CUID</a
						>
						<a
							href="/guid"
							class="w-full cursor-pointer text-sm py-2 hover:rounded-2xl hover:bg-red-800 hover:opacity-20"
							>GUID</a
						>
						<a
							href="/nanoid"
							class="w-full cursor-pointer text-sm py-2 hover:rounded-2xl hover:bg-red-800 hover:opacity-20"
							>NanoID</a
						>
						<a
							href="/uuid/v1"
							class="w-full cursor-pointer text-sm py-2 hover:rounded-2xl hover:bg-red-800 hover:opacity-20"
							>UUID v1</a
						>
						<a
							href="/uuid/v4"
							class="w-full cursor-pointer text-sm py-2 hover:rounded-2xl hover:bg-red-800 hover:opacity-20"
							>UUID v4</a
						>
					</div>
				</nav>
			{/if}
		</div>
	</div>
</nav>
