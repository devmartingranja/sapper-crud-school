<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<script>

</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<div class="ing-container">

  <main role="main">

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h2 class="display-4">Bienvenido!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          euismod dolor. Aenean bibendum massa vitae diam semper maximus.         
        </p>
        <p>
          <a class="btn btn-primary btn-lg" href="/" role="button">
            Carga Academica
            <i class="far fa-hand-point-right"></i>
          </a>
        </p>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Estudiantes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            euismod dolor. Aenean bibendum massa vitae diam semper maximus.
          </p>
          <p>
            <a class="btn btn-secondary" href="/estudiante" role="button">
              Ver mas &raquo;
            </a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Profesores</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            euismod dolor. Aenean bibendum massa vitae diam semper maximus.
          </p>
          <p>
            <a class="btn btn-secondary" href="/profesores" role="button">
              Ver mas &raquo;
            </a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Materias</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            euismod dolor. Aenean bibendum massa vitae diam semper maximus.
          <p>
            <a class="btn btn-secondary" href="/materias" role="button">
              Ver mas &raquo;
            </a>
          </p>
        </div>
      </div>

      <hr />

    </div>
    <!-- /container -->

  </main>

  <footer class="container">
    <p>&copy; Company 2020-2021</p>
  </footer>

</div>
