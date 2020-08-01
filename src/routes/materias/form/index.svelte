<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<script>
  import Form from "../../../components/templates/form.svelte";
  import FormMateria from "../../../components/forms/materia.svelte";
</script>

<main role="main" class="container ing-container">
  <div class="row mt-3 justify-content-center">
    <div class="col-md-6">
      <FormMateria>
        <span slot="titulo">CREAR MATERIAS</span>
        <span slot="detalle">Registro de materias</span>        
      </FormMateria>
    </div>
  </div>
</main>
