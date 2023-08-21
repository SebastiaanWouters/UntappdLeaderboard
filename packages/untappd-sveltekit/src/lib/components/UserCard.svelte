<script lang="ts">
	import 'iconify-icon';
	export let username: string;
	export let index: number;
	export let data: number;
</script>

<div class="container">
	{#if index === 1}
		<div class=""><iconify-icon icon="fluent-emoji-flat:1st-place-medal" /></div>
	{:else if index === 2}
		<div class=""><iconify-icon icon="fluent-emoji-flat:2nd-place-medal" /></div>
	{:else if index === 3}
		<div class=""><iconify-icon icon="fluent-emoji-flat:3rd-place-medal" /></div>
	{:else}
		<div class="index">{index}</div>
	{/if}

	<div class="username">{username}</div>
	<div class="data">{data}</div>
</div>

<style lang="postcss">
	.container {
		display: grid;
		grid-template-columns: 3rem 13rem 3rem;
		gap: var(--size--fluid-2);
		margin-inline: auto;
		width: fit-content;
		max-width: var(--size-content-3);

		& > * {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		& > .index {
			margin-left: 0.3rem;
		}
	}
</style>
