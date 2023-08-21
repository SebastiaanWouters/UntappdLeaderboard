<script lang="ts">
	import UserCard from '$lib/components/UserCard.svelte';
	import type { UserData } from '$lib/types';
	export let data: { users: UserData[] };

	$: sortedData = data.users.sort();
</script>

<div class="container">
	{#each data.users.sort((a, b) => b.total_beers - a.total_beers) as user, i}
		<UserCard username={user.username} data={user.total_beers} index={i + 1} />
	{/each}
</div>

<style>
	.container {
		padding-top: var(--size-fluid-2);
		margin-inline: auto;
	}
</style>
