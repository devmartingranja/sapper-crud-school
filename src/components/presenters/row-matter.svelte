<script>
  import { materiaStore } from "../../store/materias";
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher();
  export let data;
</script>

<style>
  .lh-125 {
    line-height: 1.25;
  }

  .btn-text-size {
    font-size: 0.6rem !important;
  }
</style>

<div class="media text-muted pt-3 w-50 m-auto">
  <img
    src="img/book.svg"
    alt=""
    width="50px"
    height="50px"
    class="mr-3 rounded" />
  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
    <strong class="d-block text-gray-dark">@{data.name}</strong>
    {data.descripcion}
    <br />
    <span class="badge badge-primary p-1 mt-1">Creditos: {data.creditos}</span>
    <div class="d-flex float-right mt-2">
      <div
       on:click={ () => dispatch('onEdit', {data})}
       class="btn btn-warning btn-sm btn-text-size mr-1">
        <i class="far fa-edit" />
        Actualizar (Modal)
      </div>
      <a
        class="btn btn-warning btn-sm btn-text-size mr-1"
        href="/materias/form/{data.id}">
        <i class="far fa-edit" />
        Actualizar
      </a>
      <div
        class="btn btn-danger btn-sm btn-text-size"
        on:click={async () => await materiaStore.delete(data.id)}>
        <i class="far fa-trash-alt" />
        Eliminar
      </div>
    </div>
  </div>
</div>
