<script>
	import TextInput from "./UI/TextInput.svelte";
	//import customFilteredAddresses from "./filterStore";
	import Tag from './UI/Tag.svelte'

	// Manejo de blacklist de emails
	
	let filteredAccounts = [];
	function newBlockedAddress(event) {
		// check if filteredAccounts contains event.detail
		// if not, add it
		if (filteredAccounts.indexOf(event.detail) === -1) {
			filteredAccounts = filteredAccounts.concat(event.detail);
		}
	}

	function deleteEmail(event){
		console.log("Borrando "+event.detail);
		// Delete event.detail from filteredAccounts
		filteredAccounts = filteredAccounts.filter(function(item){
			return item !== event.detail;
		});
	}


	// Manejo de blacklist de keywords

	let filteredKeywords = [];
	function newBlockedKeyword(event) {
		filteredKeywords = filteredKeywords.concat(event.detail);
	}

	function deleteFilteredKeyword(event){
		console.log("Borrando "+event.detail);
		// Delete event.detail from filteredAccounts
		filteredKeywords = filteredKeywords.filter(function(item){
			return item !== event.detail;
		});
	}

</script>

<main>
	<h1>Create gmail filters faster</h1>

	<TextInput on:save="{newBlockedAddress}">What accounts do you wanna filter?</TextInput>
	
	{#each filteredAccounts as email}
	<Tag value="{email}" on:delete="{deleteEmail}"></Tag>
	{/each}

	<TextInput on:save="{newBlockedKeyword}">What keywords do you wanna filter?</TextInput>
	{#each filteredKeywords as keyword}
	<Tag on:delete="{deleteFilteredKeyword}" value="{keyword}"></Tag>
	{/each}
	<TextInput>Whitelist Keywords</TextInput>
	{#each filteredAccounts as email}
	<Tag>{email}</Tag>
	{/each}
	<TextInput>Whitelist addresses</TextInput>
	{#each filteredAccounts as email}
	<Tag>{email}</Tag>
	{/each}
</main>

<style>
	main {
		max-width: 720px;
		margin: 0 auto;
	}
</style>
