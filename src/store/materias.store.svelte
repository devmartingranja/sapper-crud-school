<script>
import { stores } from '@sapper/app';

const {preloading, page, session } = stores();

console.log(preloading)
console.log(page)
console.log(session)

export const storeMaterias = {}// session({})

</script>