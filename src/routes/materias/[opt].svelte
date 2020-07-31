<script context="module">
  export async function preload(page, session) {
    const { token } = session;
    if (!token) return this.redirect(302, "/login");
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  console.log($page.params.opt);
</script>

<main role="main" class="container ing-container">
  <h1>hola mundo</h1>
</main>
