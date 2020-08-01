<script>
  import { estudianteStore } from "../../store/estudiantes";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let data;
  console.log(data);
</script>

<style>
  .btn-text-size {
    font-size: 0.6rem !important;
  }

  .tm-img {
    min-height: 15.4em;
    max-height: 15.4em;
    overflow: hidden;
  }


</style>

<div class="card m-1 w-100">
  <div class="mt-2 w-100 text-center tm-img" >
    <img class="img-thumbnail" width="90%" src={data.img} alt={data.id} />
  </div>
  <div class="card-body pt-1 pb-2">
    <h5 class="card-title mb-0">{data.name}</h5>
    <div class="btn btn-primary btn-sm p-0 pl-1 pr-1">
      Edad
      <span class="badge badge-light">{data.edad}</span>
    </div>
  </div>
  <div class="card-footer">
    <div class="d-flex float-right">
      <div
        on:click={() => dispatch('onEdit', { data })}
        class="btn btn-warning btn-sm btn-text-size mr-1">
        <i class="far fa-edit" />
        Actualizar (Modal)
      </div>
      <a
        class="btn btn-warning btn-sm btn-text-size"
        href="/estudiantes/form/{data.id}">
        <i class="far fa-edit" />
        Actualizar
      </a>

    </div>
    <div
      class="btn btn-danger btn-sm btn-text-size float-right mt-1"
      on:click={async () => await estudianteStore.delete(data.id)}>
      <i class="far fa-trash-alt" />
      Eliminar
    </div>
  </div>
</div>
