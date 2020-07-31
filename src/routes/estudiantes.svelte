<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<style>
  .text-white-50 {
    color: rgba(255, 255, 255, 0.5);
  }

  .bg-purple {
    background-color: var(--purple);
  }

  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }

  .box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  }

  .lh-100 {
    line-height: 1;
  }
  .lh-125 {
    line-height: 1.25;
  }
</style>

<svelte:head>
  <title>Estudiantes</title>
</svelte:head>

<main role="main" class="container ing-container">
  <div
    class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded
    box-shadow">
    <img
      class="mr-3"
      src="img/students.svg"
      alt="estudiante"
      width="48"
      height="48" />
    <div class="lh-100">
      <h6 class="mb-0 text-white lh-100">ESTUDIANTES</h6>
      <small>Administración de los estudiantes</small>
    </div>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-3 mb-0">
      Actualizaciones recientes
    </h6>

    <div class="media text-muted pt-3">
      <img
        src="img/student-list.svg"
        alt=""
        width="50px"
        height="50px"
        class="mr-2 rounded" />
      <p class="media-body pb-5 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus.
      </p>
    </div>

    <div class="media text-muted pt-3">
      <img
        src="img/student-list.svg"
        width="50px"
        alt=""
        height="50px"
        class="mr-2 rounded" />
      <p class="media-body pb-5 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img
        src="img/student-list.svg"
        alt=""
        width="50px"
        height="50px"
        class="mr-2 rounded" />
      <p class="media-body pb-5 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus
        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus.
      </p>
    </div>
    <small class="d-block text-right mt-3">
      <a href="/">Ir a Inicio</a>
    </small>
  </div>
</main>
