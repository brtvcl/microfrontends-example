<script>
	let count = 0;
	function increment() {
		count++;
	}
	window.increment = increment;
</script>
<style>
	.orange {
		background-color: orange;
		padding: 1rem;
	}
</style>
<div class="orange">
	<div>
		Hello from Svelte
	</div>
	<div>
		{count}
		<button on:click={increment}>+</button>
	</div>
</div>