<script>
    import Birthday from './Birthdays.svelte'; 
    export let data; 
</script>

<h1>Birthday list</h1>
    <ul>
        {#each data.birthdays as birthday }
        <li>
        <Birthday {...birthday} />
        </li>
        {/each}
    </ul>
