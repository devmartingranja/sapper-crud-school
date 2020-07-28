<script>
export let data;
</script>

<style>
  .lh-125 {
    line-height: 1.25;
  }
</style>

<div class="media text-muted pt-3">
  <img
    src="img/book.svg"
    alt=""
    width="50px"
    height="50px"
    class="mr-3 rounded" />
  <p class="media-body pb-5 mb-0 small lh-125 border-bottom border-gray">
    <strong class="d-block text-gray-dark">@{data.name}</strong>
    {data.descripcion}
    <br>
    <span class="badge badge-primary">Creditos: {data.creditos}</span>
  </p>
</div>
