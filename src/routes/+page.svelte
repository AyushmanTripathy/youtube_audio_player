<script>
  import Help from "./Help.svelte";
  import Pin from "./Pin.svelte";
  import { onMount } from "svelte";

  let pins = [];
  onMount(() => {
    for (let i = 0; i < localStorage.length; i++) {
      pins.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    pins = pins;
  })
</script>

<Help />

{#each pins as pin}
<Pin data={pin}/>
{/each}

<style lang="scss"></style>
