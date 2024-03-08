<script>
	export let immagine;
	export let prezzo;
	export let piatto;
	export let ristorante;
</script>

<div class="card_ristorante">
	<div style="overflow-y: hidden;">
		<img class="card_ristorante__img" src={immagine} alt="Copertina del piatto" />
	</div>

	<div class="card_ristorante__desc">
		<p class="card_ristorante__prezzo">{prezzo}</p>
		<p class="card_ristorante__piatto">{piatto}</p>
	</div>

	<div class="card_ristorante__footer">
		<p>{ristorante}</p>
	</div>
</div>

<style>
	.card_ristorante {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-left: 20px;
		margin-right: 20px;
		background-color: rgb(255, 233, 180);
		width: 300px;
		color: black;
		font-family: Montserrat;
		margin-top: 20px;
		overflow: hidden;
	}

	.card_ristorante__img {
		aspect-ratio: 5/4;
		background-color: red;
		object-fit: cover;
		width: 100%;
		transition: transform 0.5s ease;
	}

	.card_ristorante__img:hover {
		transform: scale(1.5);
	}

	.card_ristorante__desc {
		padding-left: 8px;
		width: 100%;
		margin-top: 15px;
	}

	.card_ristorante__prezzo {
		font-size: 15px;
		font-weight: 300;
		margin-bottom: -8px;
	}
	.card_ristorante__piatto {
		font-size: 20px;
		font-weight: 700;
	}

	.card_ristorante__footer {
		background-color: rgb(255, 108, 59);
		font-weight: 500;
		font-style: italic;
		color: white;
		font-size: 12px;
		padding-top: 5px;
		padding-bottom: 5px;
		display: flex;
		justify-content: center;
	}
</style>
