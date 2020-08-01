<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<script>
  import Form from "../../../components/templates/form.svelte";
  import FormEstudiante from "../../../components/forms/estudiante.svelte";
</script>

<main role="main" class="container ing-container">
  <div class="row mt-3 justify-content-center">
    <div class="col-md-6">
      <FormEstudiante>
        <span slot="titulo">CREAR ESTUDIANTE</span>
        <span slot="detalle">Registro de estudiante</span>        
      </FormEstudiante>
    </div>
  </div>
</main>
