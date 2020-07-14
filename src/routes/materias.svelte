<script>  
  import RowMatter from "../components/presenters/row-matter.svelte";
  import {storeMaterias} from '../store/materias.store.svelte'

  console.log(storeMaterias)

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

<main role="main" class="container">
  <div
    class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded
    box-shadow">
    <img class="mr-3" src="img/books.svg" alt="" width="48" height="48" />
    <div class="lh-100">
      <h6 class="mb-0 text-white lh-100">MATERIAS</h6>
      <small>Administración de materias</small>
    </div>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-3 mb-0">
      Actualizaciones recientes
    </h6>

    <RowMatter />
    <RowMatter />
    <RowMatter />
    <RowMatter />
    <RowMatter />

    <small class="d-block text-right mt-3">
      <a href="/">Ir a Inicio</a>
    </small>
  </div>
</main>
