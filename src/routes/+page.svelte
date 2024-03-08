<script>
	import { get_collection } from '$cms';
	const menu = get_collection('menu');
	import CardRistorante from '$components/CardRIstorante.svelte';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="row">
	{#each menu as risto}
		<div class="col gx-2 d-flex justify-content-center">
			<CardRistorante
				immagine={risto.img}
				prezzo={risto.prezzo}
				piatto={risto.nome}
				ristorante={risto.ristorante}
			/>
		</div>
	{/each}
</div>

<style>
</style>
