<script lang="ts">
	import '../styles.css';
</script>

<div class="head">HEADER</div>

<!-- segnaposto per dove si posiziona il contenuto costante delle pagine -->
<slot />

<style>
	.head {
		background: linear-gradient(216deg, #700ad6, #cc20a0, #eb4c08);
		background-size: 240% 240%;
		animation: gradient-animation 40s ease infinite;
		color: white;
		text-align: center;
		padding: 10px;
		font-size: 200%;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 900;
		user-select: none;
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
