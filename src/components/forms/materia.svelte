<script>
  import { materiaStore } from "../../store/materias";
  import FormTemplate from "../../components/templates/form.svelte";
  import { goto } from "@sapper/app";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isModal = false;  
  export let form = {
    id: 0,
    name: "",
    creditos: 1,
    descripcion: "",
  };

  const onSave = async () => {
    let res = false;

    if (form.id) res = await materiaStore.update(form);
    else res = await materiaStore.create(form);

    if (isModal) dispatch("onClose");
    else if (res) goto("/materias");
  };
</script>

<FormTemplate>
  <span slot="titulo">
    <slot name="titulo">TITULO</slot>
  </span>
  <span slot="detalle">
    <slot name="detalle">Detalle</slot>
  </span>
  <form on:submit|preventDefault={onSave}>
    <div class="card-body">
      <div class="row">

        <div class="form-group col-md-6">
          <label for="nombre">* NOMBRE</label>
          <input
            bind:value={form.name}
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Ingrese un nombre" />
        </div>

        <div class="form-group col-md-6">
          <label for="creditos">* CREDITOS</label>
          <input
            bind:value={form.creditos}
            type="creditos"
            class="form-control"
            id="creditos"
            placeholder="Ingrese creditos" />
        </div>

        <div class="form-group col-md-12">
          <label for="descripcion">* DESCRIPCIÓN</label>
          <input
            bind:value={form.descripcion}
            type="descripcion"
            class="form-control"
            id="descripcion"
            placeholder="Ingrese una descripción" />
        </div>

      </div>
    </div>
    <div class="card-footer text-muted d-flex justify-content-end">
      <button class="btn btn-success mr-1" type="submit">
        <i class="far fa-save" />
        Enviar
      </button>
      {#if isModal}
        <div class="btn btn-secondary" on:click={() => dispatch('onClose')}>
          <i class="fas fa-ban" />
          Cancelar
        </div>
      {:else}
        <a href="/materias" class="btn btn-secondary">
          <i class="fas fa-ban" />
          Cancelar
        </a>
      {/if}
    </div>
  </form>
</FormTemplate>
