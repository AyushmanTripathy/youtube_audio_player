<script>
  import Help from "./Help.svelte";
  import Pin from "./Pin.svelte";
  import Input from "./Input.svelte";
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
<Input />

{#each pins as pin}
<Pin data={pin}/>
{/each}

<style lang="scss"></style>
