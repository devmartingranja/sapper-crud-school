<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<script>
  import FormMateria from "../../components/forms/materia.svelte";
</script>

<style>
  .bg-purple {
    background-color: var(--purple);
  }
</style>

<main role="main" class="container ing-container">
  <div class="row mt-3 justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header bg-purple text-white">
          <div
            class="d-flex align-items-center text-white-50 bg-purple rounded
            box-shadow">
            <img
              class="mr-3"
              src="img/register.svg"
              alt=""
              width="48"
              height="48" />
            <div class="lh-100">
              <h6 class="mb-0 text-white lh-100">MATERIAS</h6>
              <small>Registro de materias</small>
            </div>
          </div>
        </div>        
        <FormMateria />
      </div>
    </div>
  </div>
</main>
