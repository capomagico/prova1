<script lang="ts" context="module">
	import { create } from '$cms';
	function generateRandomString(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	function generateRandomNumber(dimensione) {
		let result = '';
		const numbers = '123456789';
		const numbersLength = numbers.length;
		for (let i = 0; i < dimensione; i++) {
			result += numbers.charAt(Math.floor(Math.random() * numbersLength));
		}
		return '€ ' + result;
	}

	export const props = create('menu', {
		nome: generateRandomString(10),
		ristorante: generateRandomString(10),
		prezzo: generateRandomNumber(2),
		img: 'https://images.unsplash.com/photo-1709668158989-ca9f67bb9bb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D'
	});
</script>
