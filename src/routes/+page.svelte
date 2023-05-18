<script lang="ts">

const imgs = [1,2,3,4,5,6,7,8,9,10,11,12, 13, 15]

</script>



{#each imgs as i}
<p>{i}</p>
    <img src={`${i}.png`} alt={`${i}`} />
    <br />
{/each}

<h1>
    <pre> 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help
    </pre>
</h1>