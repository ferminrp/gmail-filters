<script>
	import TextInput from "./UI/TextInput.svelte";
	import customFilteredAddresses from "./filterStore";
	import Tag from './UI/Tag.svelte'
	
	let filteredAccounts = [];

</script>

<main>
	<h1>Create gmail filters faster</h1>

	<TextInput>What accounts do you wanna filter?</TextInput>
	
	{#each $customFilteredAddresses as email}
	<Tag>{email}</Tag>
	{/each}
	<TextInput>What keywords do you wanna filter?</TextInput>
	{#each $customFilteredAddresses as email}
	<Tag>{email}</Tag>
	{/each}
	<TextInput>Whitelist Keywords</TextInput>
	{#each $customFilteredAddresses as email}
	<Tag>{email}</Tag>
	{/each}
	<TextInput>Whitelist addresses</TextInput>
	{#each $customFilteredAddresses as email}
	<Tag>{email}</Tag>
	{/each}
</main>

<style>
	main {
		max-width: 720px;
		margin: 0 auto;
	}
</style>
