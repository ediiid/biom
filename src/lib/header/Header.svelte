<script>
	import { slide } from "svelte/transition";
	export let headerClass = '';
	let expanded = false
</script>

<svelte:head>
	<title>Biom</title>
</svelte:head>

<header class="w-full sticky z-[100] top-0 backdrop-blur-[10px] bg-white bg-opacity-25">
	<!-- desktop header -->
	<div class="hidden md:flex justify-between {headerClass} px-[50px] py-[23px] align-middle">
		<div
			class="flex justify-start space-x-[22px] align-middle my-auto text-black text-[15px] font-bold font-brandon leading-[22px] tracking-[1.5px]"
		>
			<a href="/"> SHOP </a>
			<a href="/" class="whitespace-nowrap"> WHY BIOM </a>
			<a href="/"> SCENTS </a>
		</div>
		<a href="/">
			<img src="/imgs/logo@2x.webp" alt="BIOM logo" class="flex max-w-[92px] h-auto" />
		</a>
		<div
			class="flex justify-end space-x-[22px] align-middle my-auto text-black text-[15px] font-bold font-brandon"
		>
			<a href="/" class="whitespace-nowrap leading-[22px] tracking-[1.5px]"> SIGN IN </a>
			<a href="/" class="leading-[22px] tracking-[1.5px]"> CART </a>
			<div class="relative">
				<img src="/icons/cart.svg" alt="Cart icon" class="max-w-[26px] h-auto" />
				<div
					class="absolute bottom-3 left-4 rounded-full bg-customorange-500 border border-white w-4 h-4 text-[10px] text-customwhite-500 text-center"
				>
					0
				</div>
			</div>
		</div>
		
	</div>
	<!-- mobile header -->
	<div class="flex md:hidden justify-between {headerClass} px-[50px] py-[23px] align-middle">
		<button on:click={()=>{
			expanded = !expanded
		}}>
			<img src="/icons/Hamburger_icon.svg" alt="Hamburger icon">
		</button>
		
		<a href="/">
			<img src="/imgs/logo@2x.webp" alt="BIOM logo" class="max-w-[92px] h-auto my-auto" />
		</a>
		<div class="relative my-auto">
			<img src="/icons/cart.svg" alt="Cart icon" class="max-w-[26px] h-auto" />
			<div
			class="absolute bottom-3 left-4 rounded-full bg-customorange-500 border border-white w-4 h-4 text-[10px] text-customwhite-500 text-center"
			>
			0
		</div>
	</div>
	{#if expanded}
	<div class="absolute top-[78px] left-0 w-full !bg-white backdrop-blur-lg p-8" transition:slide>
		<div
			class="flex flex-col justify-start space-y-[22px] my-auto text-black text-[15px] font-bold font-brandon leading-[22px] tracking-[1.5px]"
		>
			<a href="/"> SHOP </a>
			<a href="/" class="whitespace-nowrap"> WHY BIOM </a>
			<a href="/"> SCENTS </a>
			<a href="/"> SIGN IN </a>
		</div>
	</div>
	{/if}
</header>
