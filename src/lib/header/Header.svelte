<script>
	export let headerClass = '';
</script>

<header class="w-full sticky z-[100] top-0 backdrop-blur-[10px]">
	<div class="flex justify-between {headerClass} px-[50px] py-[23px] align-middle">
		<div
			class="flex justify-start space-x-[22px] align-middle my-auto text-black text-[15px] font-bold"
		>
			<span> SHOP </span>
			<span class="whitespace-nowrap"> WHY BIOM </span>
			<span> SCENTS </span>
		</div>
		<img src="/imgs/logo@2x.png" alt="BIOM logo" class="max-w-[92px] h-auto" />
		<div
			class="flex justify-end space-x-[22px] align-middle my-auto text-black text-[15px] font-bold"
		>
			<span class="whitespace-nowrap"> SIGN IN </span>
			<span> CART </span>
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
</header>
