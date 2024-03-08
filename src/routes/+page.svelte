<script>
	import { get_collection } from '$cms';
	const menu = get_collection('menu');
	import CardRistorante from '$components/CardRistorante.svelte';

	let risto = [
		{
			immagine:
				'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
			prezzo: '12€',
			piatto: 'sadasdasda',
			ristorante: 'sasasd'
		},
		{
			immagine:
				'https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D',
			prezzo: '15€',
			piatto: 'asdasuajdadas',
			ristorante: 'sfafasfas'
		},
		{
			immagine:
				'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ2VyfGVufDB8fDB8fHww',
			prezzo: '11€',
			piatto: 'jdajncsascx',
			ristorante: 'dasfafvc'
		}
	];
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
