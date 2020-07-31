<script>
  import { Create } from "@api/materias";
  import {goto} from '@sapper/app'

  let form = {
    name: "",
    creditos: 1,
    descripcion: "",
  };

  const onCreate = async () => {
    const res = await Create(form);    
    if(res) goto('/materias')
  };

</script>

<form on:submit|preventDefault={onCreate}>
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
    <a href="/materias" class="btn btn-secondary">
      <i class="fas fa-ban" />
      Cancelar
    </a>
  </div>
</form>
