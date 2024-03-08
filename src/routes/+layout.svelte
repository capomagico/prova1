<script
	lang="ts"
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
	crossorigin="anonymous"
>
	import '../styles.css';
</script>

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous"
/>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css" />
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
		font-size: 2rem;
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
