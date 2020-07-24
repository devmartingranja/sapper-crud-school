<script>
  import { stores } from '@sapper/app';

  const { session } = stores();

  const { token } = $session;
</script>
