<script context="module">
  import { Get } from "@api/materias";

  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");

    const resData = await Get(page.params.id, token);
    return { resData };
  }
</script>

<script>
  import Form from "../../../components/templates/form.svelte";
  import FormMateria from "../../../components/forms/materia.svelte";
  export let resData;
</script>

<main role="main" class="container ing-container">
  <div class="row mt-3 justify-content-center">
    <div class="col-md-6">
      <FormMateria form={resData.data}>
        <span slot="titulo">ACTUALIZAR MATERIAS</span>
        <span slot="detalle">Modificando materia</span>        
      </FormMateria>
    </div>
  </div>
</main>
