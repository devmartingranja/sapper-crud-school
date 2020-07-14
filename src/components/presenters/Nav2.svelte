<script>
  export let segment;  
</script>

<style>

</style>

<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="/">A<span class='text-danger' ><b>K</b></span>ADEMIA</a>
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
      <li class="nav-item  {segment === 'estudiantes' ? 'active' : ''}">
        <a class="nav-link" href="/estudiantes">Estudiantes</a>
      </li>
      <li class="nav-item  {segment === 'materias' ? 'active' : ''}">
        <a class="nav-link" href="/materias">Materias</a>
      </li>     
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a class="btn btn-outline-success my-2 my-sm-0" href="login">Salir</a>
    </form>
  </div>
</nav>
