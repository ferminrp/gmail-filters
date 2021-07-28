<script>
	import TextInput from "./UI/TextInput.svelte";
	//import customFilteredAddresses from "./filterStore";
	import Tag from "./UI/Tag.svelte";

	// Manejo de blacklist de emails

	let filteredAccounts = [];
	function newBlockedAddress(event) {
		// check if filteredAccounts contains event.detail
		// if not, add it
		if (filteredAccounts.indexOf(event.detail) === -1) {
			filteredAccounts = filteredAccounts.concat(event.detail);
		}
	}

	function deleteEmail(event) {
		// Delete event.detail from filteredAccounts
		filteredAccounts = filteredAccounts.filter(function (item) {
			return item !== event.detail;
		});
	}

	// Manejo de blacklist de keywords

	let filteredKeywords = [];
	function newBlockedKeyword(event) {
		if (filteredKeywords.indexOf(event.detail) === -1) {
			filteredKeywords = filteredKeywords.concat(event.detail);
		}
	}

	function deleteFilteredKeyword(event) {
		// Delete event.detail from filteredAccounts
		filteredKeywords = filteredKeywords.filter(function (item) {
			return item !== event.detail;
		});
	}

	// Manejo de whitelist de emails

	let whitelistedEmails = [];
	function newWhitelistedEmail(event) {
		if (whitelistedEmails.indexOf(event.detail) === -1) {
			whitelistedEmails = whitelistedEmails.concat(event.detail);
		}
	}

	function deleteWhitelistedEmail(event) {
		// Delete event.detail from filteredAccounts
		whitelistedEmails = whitelistedEmails.filter(function (item) {
			return item !== event.detail;
		});
	}

	// Manejo de whitelist de emails

	let whitelistedKeywords = [];
	function newWhitelistedKeyword(event) {
		if (whitelistedKeywords.indexOf(event.detail) === -1) {
			whitelistedKeywords = whitelistedKeywords.concat(event.detail);
		}
	}

	function deleteWhitelistedKeyword(event) {
		// Delete event.detail from filteredAccounts
		whitelistedKeywords = whitelistedKeywords.filter(function (item) {
			return item !== event.detail;
		});
	}
</script>

<main>
	<h1>Create gmail filters faster</h1>

	<TextInput on:save={newBlockedAddress}
		>What email addresses do you wanna filter?</TextInput
	>

	{#each filteredAccounts as email}
		<Tag value={email} on:delete={deleteEmail} />
	{/each}

	<TextInput on:save={newBlockedKeyword}
		>What keywords do you wanna filter?</TextInput
	>
	{#each filteredKeywords as keyword}
		<Tag on:delete={deleteFilteredKeyword} value={keyword} />
	{/each}

	<TextInput on:save={newWhitelistedEmail}>Whitelist Email Addresses</TextInput>
	{#each whitelistedEmails as email}
		<Tag value={email} on:delete={deleteWhitelistedEmail} />
	{/each}
	<TextInput on:save={newWhitelistedKeyword}>Whitelist Keywords</TextInput>
	{#each whitelistedKeywords as keyword}
		<Tag value={keyword} on:delete={deleteWhitelistedKeyword}>{email}</Tag>
	{/each}
</main>

<style>
	main {
		max-width: 720px;
		margin: 0 auto;
	}
</style>
