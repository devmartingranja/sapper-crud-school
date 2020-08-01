<script context="module">
  export async function preload(page, session) {
    await this.fetch("/request/logout", { method: "POST" });
  }
</script>

<script>
  import { Login } from "@api/secutiry";
  import { goto, stores } from "@sapper/app";
  const { session } = stores();
  $session.token = undefined;

  let inputEmail;
  let email = "";
  let pass = "";
  let isIngreso = "";
  let error = "";

  const onEnviarDatos = async (e) => {
    const response = await Login({ email, pass });
    if (response.error) {
      error = response.error;
      setInterval(() => {
        error = "";
      }, 4000);
    } else {
      $session.token = response.token;
      goto("/");
    }
  };
</script>

<style>
  :root {
    --input-padding-x: 0.75rem;
    --input-padding-y: 0.75rem;
  }

  .form-signin {
    width: 100%;
    max-width: 320px;
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
  <title>Login</title>
</svelte:head>

<form
  class="form-signin mt-5 bg-white border-top border-primary rounded"
  on:submit|preventDefault={onEnviarDatos}
  method="post">

  <div class="text-center mb-4">
    <img class="mb-4" src="img/student.svg" alt="" width="30%" />
    <h1 class="h3 mb-3 font-weight-normal">
      SCH<b class="text-danger">OO</b>L
    </h1>
    <p class="text-secondary">
      <b>Ingreso</b>
    </p>
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
    <label for="inputPassword">Contraseña</label>
  </div>

  <button
    class="btn btn-lg btn-primary btn-block btn-sm"
    type="submit"
    disabled={email === '' || pass === '' ? true : ''}>
    Ingresar
  </button>

  {#if error}
    <div class="alert alert-danger mt-2 p-1 ">{error}</div>
  {/if}
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>

</form>
