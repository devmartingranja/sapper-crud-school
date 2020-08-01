<script>
  import { estudianteStore } from "../../store/estudiantes";
  import FormTemplate from "../../components/templates/form.svelte";
  import { goto } from "@sapper/app";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isModal = false;  
  export let form = {
    id: 0,
    name: "",
    edad: 18,
    img: "",
  };

  const onSave = async () => {
    let res = false;

    if (form.id) res = await estudianteStore.update(form);
    else res = await estudianteStore.create(form);

    if (isModal) dispatch("onClose");
    else if (res) goto("/estudiantes");
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
          <label for="creditos">* EDAD</label>
          <input
            bind:value={form.edad}
            type="creditos"
            class="form-control"
            id="creditos"
            placeholder="Ingrese creditos" />
        </div>

        <div class="form-group col-md-12">
          <label for="descripcion">* URL IMAGEN</label>
          <input
            bind:value={form.img}
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
        <a href="/estudiantes" class="btn btn-secondary">
          <i class="fas fa-ban" />
          Cancelar
        </a>
      {/if}
    </div>
  </form>
</FormTemplate>
