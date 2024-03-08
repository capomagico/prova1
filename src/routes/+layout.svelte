<script lang="ts">
	import '../styles.css';
</script>

<div class="head">HEADER</div>

<!-- segnaposto per dove si posiziona il contenuto costante delle pagine -->
<slot />

<style>
	.head {
		background-color: red;
		color: white;
		text-align: center;
		padding: 10px;
		font-size: 100px;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 900;
		user-select: none;
	}
	.head:hover {
		background-color: blue;
	}
</style>
