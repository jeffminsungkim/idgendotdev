<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { IconClipboardCopy, IconRefresh } from '@tabler/icons-svelte';
	import { createId } from '@paralleldrive/cuid2';
	import { Guid } from 'js-guid';
	import { nanoid } from 'nanoid';
	import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
	import RangeSlider from './RangeSlider.svelte';
	import { getContext } from 'svelte';

	/**
	 * @type {string || undefined}
	 */
	export let activeIdType = undefined;

	/**
	 * @type {string}
	 */
	let uniqueId = getContext('defaultId');

	let qty = 10;
	let generatedIds = [];

	onMount(() => {
		if (!activeIdType) return;

		uniqueId = generateId();
	});

	function generateId() {
		switch (activeIdType) {
			case 'CUID':
				return createId();
			case 'GUID':
				return Guid.newGuid().toString();
			case 'NanoID':
				return nanoid();
			case 'UUID v1':
				return uuidv1();
			case 'UUID v4':
				return uuidv4();
			default:
				return createId();
		}
	}

	function generateMultipleIds() {
		generatedIds = [];

		for (let i = 0; i < qty; i++) {
			generatedIds = [...generatedIds, generateId()];
		}
	}

	function clickToCopy() {
		if (!navigator.clipboard) {
			toast.error('Failed to copy.');
			return;
		}

		navigator.clipboard
			.writeText(uniqueId)
			.then(() => {
				toast.success('Copied to clipboard', { icon: '✂️' });
			})
			.catch(() => {
				toast.error('Failed to copy.');
			});
	}

	function clickToCopyAll() {
		if (!navigator.clipboard) {
			toast.error('Failed to copy.');
			return;
		}

		navigator.clipboard
			.writeText(generatedIds.join('\n'))
			.then(() => {
				toast.success('Copied to clipboard', { icon: '✂️' });
			})
			.catch(() => {
				toast.error('Failed to copy.');
			});
	}
</script>

<Toaster />
<div class="flex mt-10 sm:mt-44 w-full items-center justify-center">
	<div class="p-4 rounded-xl w-full bg-[#202330] shadow-xl">
		<h1 class="text-3xl sm:text-5xl font-semibold mt-5 mb-10 text-center">
			Generate {activeIdType ?? 'CUID'} 🪪
		</h1>
		<div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:px-20">
			<div
				class="flex items-center justify-between -space-x-14 w-full rounded-xl ring-1 ring-zinc-500"
			>
				<input
					bind:value={uniqueId}
					type="text"
					class="bg-transparent p-2 mx-2 text-base sm:text-xl font-semibold border-none w-10/12 sm:full outline-none"
				/>
				<button on:click={() => (uniqueId = generateId())}>
					<IconRefresh class="cursor-pointer text-zinc-400 mr-6 w-full" size={25} stroke={2} />
				</button>
			</div>

			<button
				class="flex items-center justify-center px-4 py-2 rounded-xl text-zinc-900 bg-[#DFE0E2] hover:bg-white"
				on:click={clickToCopy}
			>
				Copy
				<span class="">
					<IconClipboardCopy class="mx-1" size={25} stroke={2} />
				</span>
			</button>
		</div>

		<p class="my-4 text-center text-base sm:text-xl font-semibold">
			If you want to generate multiple IDs at once, please use the range slider below.
		</p>
		<p class="text-center italic text-zinc-500">
			Each time you click the button, new IDs are generated.
		</p>

		<div class="flex flex-col space-y-5 mb-5 sm:px-20 mt-5 w-full">
			<RangeSlider on:change={(e) => (qty = e.detail.value)} id="basic-slider" />
			<button
				class="flex items-center justify-center px-4 py-2 rounded-full text-zinc-900 bg-[#DFE0E2] hover:bg-white"
				on:click={generateMultipleIds}
			>
				Generate {qty}
				{activeIdType ?? 'CUID'}s
			</button>
		</div>
		<div class="flex flex-col items-center justify-center text-center">
			{#if generatedIds.length > 0}
				<h1 class="text-3xl sm:text-4xl font-semibold mt-5 mb-10">
					Here is your new generated IDs
				</h1>
				{#each generatedIds as id}
					<ul class="text-base sm:text-xl font-semibold">
						<li>{id}</li>
					</ul>
				{/each}
				<button
					class="flex items-center my-4 px-4 py-2 rounded-xl text-zinc-900 bg-[#DFE0E2] hover:bg-white"
					on:click={clickToCopyAll}
				>
					Copy all
					<span class="">
						<IconClipboardCopy class="mx-1" size={25} stroke={2} />
					</span>
				</button>
			{/if}
		</div>
	</div>
</div>
