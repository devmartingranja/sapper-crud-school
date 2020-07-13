<script>

  let inputEmail;
  let email = "";
  let pass = "";
  let isIngreso = '';

  function onEnviarDatos(e) {
    e.preventDefault();

    if (email === "test@ing-dev.com" && pass === "123")    {   
      alert('ingreso con exito');    
      window.location.href = '/'
    }
    else {    
      inputEmail.focus()
      email = ''
      pass = ''
      alert("Credenciales no validas");
    }

  }
</script>

<style>
  :root {
    --input-padding-x: 0.75rem;
    --input-padding-y: 0.75rem;
  }

  .form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: 0 auto;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .form-label-group > input,
  .form-label-group > label {
    padding: var(--input-padding-y) var(--input-padding-x);
  }

  .form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0; /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 0.1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: calc(
      var(--input-padding-y) + var(--input-padding-y) * (2 / 3)
    );
    padding-bottom: calc(var(--input-padding-y) / 3);
  }

  .form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
  }
</style>

<svelte:head>
  <title>LOGIN</title>
</svelte:head>
<form class="form-signin mt-5" on:submit={onEnviarDatos}>
  <div class="text-center mb-4">
    <img class="mb-4" src="img/student.svg" alt="" width="40%" />
    <h1 class="h3 mb-3 font-weight-normal">
      A
      <b class="text-danger">K</b>
      ADEMIA
    </h1>
    <p>Plataforma para la administración de la informacion escolar</p>
  </div>

  <div class="form-label-group">
    <input
      bind:this={inputEmail}
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Correo Electronico"
      bind:value={email}
      required />
    <label for="inputEmail">Correo electronico</label>
  </div>

  <div class="form-label-group">
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Contraseña"
      bind:value={pass}
      required />
    <label for="inputPassword">Contraseñas</label>
  </div>

  <button class="btn btn-lg btn-primary btn-block" type="submit" disabled={(email === '' || pass === '')?true:''}>
    Ingresar
  </button>
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
</form>
