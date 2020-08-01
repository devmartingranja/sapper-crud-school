<script>
  import { goto, stores } from "@sapper/app";
  const { session } = stores();
  export let segment;

  const onLogout = async () => {
    await fetch("/request/logout", { method: "POST" });
    $session.token = "";
    goto("/login");
  };
</script>

<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="/">    
    SCH<span class="text-danger"><b>OO</b></span>L</a>
  <button
    class="navbar-toggler p-0 border-0"
    type="button"
    data-toggle="offcanvas">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item {segment === undefined ? 'active' : ''}">
        <a class="nav-link" href="/">         
          Inicio
        </a>
      </li>
      <li class="nav-item {segment === 'estudiantes' ? 'active' : ''}">
        <a class="nav-link" href="/estudiantes">          
          Estudiantes
        </a>
      </li>
      <li class="nav-item {segment === 'materias' ? 'active' : ''}">
        <a class="nav-link" href="/materias">         
          Materias
        </a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div
        class="btn btn-outline-light btn-sm my-2 my-sm-0"
        on:click={onLogout}>
        <i class="fas fa-sign-out-alt" />
        Salir
      </div>
    </form>
  </div>
</nav>
