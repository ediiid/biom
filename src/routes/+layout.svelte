<script>
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
	import Footer from '../lib/footer/Footer.svelte';

	let headerClass = 'w-full max-w-[1440px] mx-auto';
	let mainClass = 'w-full max-w-[1440px] mx-auto';
	let footerClass = 'w-full max-w-[1440px] mx-auto';
</script>

<Header bind:headerClass />
<main class={mainClass}>
    <slot />
</main>
<Footer bind:footerClass />
