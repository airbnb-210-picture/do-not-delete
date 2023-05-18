<script lang="ts">
	import {range} from './range.js';

	let name = 'world';
	let begin = 0;
	let end   = 14;
	let step  = 1;
</script>


{#each range(begin,end,step) as i}

    <img src={`${i}.png`} alt="01" />
{/each}



    



