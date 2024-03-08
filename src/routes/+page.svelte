<script>
	import { get_collection } from '$cms';
	const menu = get_collection('menu');
	import CardRistorante from '$components/CardRIstorante.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@3.4.1/src/css/preflight.css" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div style="display: flex; ">
	{#each menu as risto}
		<CardRistorante
			immagine={risto.img}
			prezzo={risto.prezzo}
			piatto={risto.nome}
			ristorante={risto.ristorante}
		/>
	{/each}
</div>
