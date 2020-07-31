<script context="module">
  import { GetAll } from "@api/materias";

  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
    
    const resData = await GetAll(token);
    return { resData };
  }
</script>

<script>
  import { materia } from "../../store/materias";
  import RowMatter from "../../components/presenters/row-matter.svelte";
  export let resData;
  materia.init({array: resData.materias}) 
</script>

<style>
  .text-white-50 {
    color: rgba(255, 255, 255, 0.5);
  }

  .bg-purple {
    background-color: var(--purple);
  }

  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }

  .box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  }

  .lh-100 {
    line-height: 1;
  }
</style>

<svelte:head>
  <title>Materias</title>
</svelte:head>

<main role="main" class="container ing-container">
  <div
    class="d-flex align-items-center justify-content-between p-2 pl-3 pr-3 my-3
    text-white-50 bg-purple rounded box-shadow">
    <div class="d-flex align-items-center">
      <img class="mr-3" src="img/books.svg" alt="" width="48" height="48" />
      <div class="lh-100">
        <h6 class="mb-0 text-white lh-100">MATERIAS</h6>
        <small>Administración de materias</small>
      </div>
    </div>
    <a href="/materias/form" class="btn btn-success btn-sm">
      <i class="fas fa-plus-circle" />
      Nuevo
    </a>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-3 mb-0">
      Actualizaciones recientes ({$materia.array.length})
    </h6>

    {#each $materia.array as materia}
      <RowMatter data={materia} />
    {/each}

    <small class="d-block text-right mt-3">
      <a href="/">Ir a Inicio</a>
    </small>
  </div>
</main>
