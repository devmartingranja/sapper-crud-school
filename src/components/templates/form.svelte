<style>
  .bg-purple {
    background-color: var(--purple);
  }
</style>

<div class="w-100">
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
          <h6 class="mb-0 text-white lh-100">
            <slot name="titulo">TITULO</slot>
          </h6>
          <small>
            <slot name="detalle">Detalle</slot>
          </small>
        </div>
      </div>
    </div>
    <slot>
      <em>Implementar Componente</em>
    </slot>
  </div>
</div>
