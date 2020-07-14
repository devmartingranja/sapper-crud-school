<script>
  import Main from "../components/templates/main.svelte";
  import MainLogin from "../components/templates/login.svelte";
  export let segment;
</script>

{#if segment !== 'login'}

  <Main {segment}>
    <slot/>
  </Main>

{:else}

  <MainLogin>
    <slot />
  </MainLogin>
  
{/if}
