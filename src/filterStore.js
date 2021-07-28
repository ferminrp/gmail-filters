import { writable } from 'svelte/store';

const filteredAddresses = writable([
    "fermin@gmail.com",
    "support@twitter.com"
]);

const customFilteredAddresses = {
  subscribe: filteredAddresses.subscribe,
};



export default customFilteredAddresses;