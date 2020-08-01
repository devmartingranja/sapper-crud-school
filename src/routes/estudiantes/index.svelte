<script context="module">
  import { GetAll } from "@api/estudiantes";

  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");

    const resData = await GetAll(token);
    return { resData };
  }
</script>

<script>
  import { estudianteStore } from "../../store/estudiantes";
  import FormEstudiante from "../../components/forms/estudiante.svelte";
  import CarStudent from "../../components/presenters/card-student.svelte";
  import ViewModal from "../../components/templates/modal.svelte";
  export let resData;
  let showModal = false;
  let form = undefined;
  estudianteStore.init({ array: resData.users });
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
  <title>Estudiantes</title>
</svelte:head>

<main role="main" class="container ing-container">
  <div
    class="d-flex align-items-center justify-content-between p-2 pl-3 pr-3 my-3
    text-white-50 bg-purple rounded box-shadow">
    <div class="d-flex align-items-center">
      <img
        class="mr-3"
        src="img/students.svg"
        alt="estudiante"
        width="48"
        height="48" />
      <div class="lh-100">
        <h6 class="mb-0 text-white lh-100">ESTUDIANTES</h6>
        <small>Administración de los estudiantes</small>
      </div>
    </div>
    <div>
      <div
        class="btn btn-success btn-sm"
        on:click={() => {
          form = undefined;
          showModal = true;
        }}>
        <i class="fas fa-plus-circle" />
        Nuevo (Modal)
      </div>
      <a href="/estudiantes/form" class="btn btn-success btn-sm">
        <i class="fas fa-plus-circle" />
        Nuevo
      </a>
    </div>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-3 mb-0">
      Actualizaciones recientes ({$estudianteStore.array.length})
    </h6>

    <div class="row mt-2">
      {#each $estudianteStore.array as estudiante}
        <div class="col-md-3">
          <CarStudent
            data={estudiante}
            on:onEdit={(e) => {
              (form = e.detail.data), (showModal = true);
            }} />
        </div>
      {/each}
    </div>
    <small class="d-block text-right mt-3">
      <a href="/">Ir a Inicio</a>
    </small>
  </div>
</main>

{#if showModal}
  <ViewModal>
    <FormEstudiante
      {form}
      isModal={true}
      on:onClose={() => (showModal = false)}>
      <span slot="titulo">{!form ? 'REGISTRAR' : 'ACTUALIZAR'} ESTUDIANTE</span>
      <span slot="detalle">
        {!form ? 'Registrando' : 'Modificando'} estudiante
      </span>
    </FormEstudiante>
  </ViewModal>
{/if}
