<script context="module">
  import { Get } from "@api/estudiantes";

  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");

    const resData = await Get(page.params.id, token);
    return { resData };
  }
</script>

<script>
  import Form from "../../../components/templates/form.svelte";
  import FormEstudiante from "../../../components/forms/estudiante.svelte";
  export let resData;
</script>

<main role="main" class="container ing-container">
  <div class="row mt-3 justify-content-center">
    <div class="col-md-6">
      <FormEstudiante form={resData.data}>
        <span slot="titulo">ACTUALIZAR ESTUDIANTE</span>
        <span slot="detalle">Modificando estudiante</span>        
      </FormEstudiante>
    </div>
  </div>
</main>
