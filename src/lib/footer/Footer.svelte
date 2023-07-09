<script>
	export let footerClass = '';
</script>

<footer class={footerClass}>
	<div
		class="relative flex flex-col-reverse h-[386px] mt-[70px] bg-customgreen-900 bg-opacity-[72%]"
	>
		<div
			class="absolute -top-[150px] flex w-full max-w-[1302px] mx-[69px] h-[300px] bg-customgray-100 rounded-[14px]"
			style="background-image: url('/imgs/Biom_wipe_2.png');"
		>
			<div class="flex flex-col place-content-between max-w-[414px] my-auto ml-[111px]">
				<span class="text-black font-black text-[30px] tracking-[0px] leading-[38px]"
					>Get the latest news delivered to your inbox.</span
				>
				<span class="text-black font-normal text-[16px] tracking-[0px] leading-[26px] mt-[13px]"
					>Get access to the exciting stuff — exclusive new deals, product launches and more. Plus,
					get a 10% discount on your next order.</span
				>
				<div class="relative flex w-full mt-[18px]">
					<input
						type="email"
						placeholder="Enter your email address"
						class="w-full text-black font-normal text-[16px] tracking-[0px] leading-[30px] p-[15px] h-[52px] rounded-[6px]"
					/>
					<button
						class="group absolute right-0 mt-[7px] mr-[7px] bg-customgreen-900 w-[44px] h-[38px] rounded-[6px]"
					>
						<img
							src="/icons/Icon ionic-ios-arrow-round-forward.png"
							alt="Arrow right"
							class="group self-center mx-auto group-hover:translate-x-1 ease-in-out duration-300"
						/>
					</button>
				</div>
			</div>
		</div>

		<div class="flex self-center h-[106px] w-full px-[69px] mt-[50px]">
			<div class="flex justify-between w-full border-t border-customgreen-900">
				<span
					class="text-customwhite-500 font-normal text-[15px] tracking-[0.38px] leading-[22px] my-auto"
					>© 2021 biom. All rights reserved • Privacy Policy • Terms of Service</span
				>
				<div class="flex justify-end space-x-[10px] my-auto">
					<a href="/">
						<div class="flex w-[30px] h-[30px] rounded-full bg-customwhite-500">
							<img
								src="/icons/Icon ionic-logo-instagram.png"
								alt="Icon ionic-logo-instagram"
								class="m-auto"
							/>
						</div>
					</a>
					<a href="/">
						<div class="flex w-[30px] h-[30px] rounded-full bg-customwhite-500">
							<img
								src="/icons/Icon awesome-facebook-f.png"
								alt="Icon awesome-facebook-f"
								class="m-auto"
							/>
						</div>
					</a>
				</div>
			</div>
		</div>

		<div class="flex self-center justify-items-center space-x-[65px] text-center">
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				SHOP
			</a>
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				WHY BIOM
			</a>
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				SCENTS
			</a>
			<a href="/">
				<img
					src="/imgs/biom logo footer.png"
					alt="Biom logo footer"
					class="w-[92px] h-auto my-auto"
				/>
			</a>
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				FAQS
			</a>
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				ACCOUNT
			</a>
			<a
				href="/"
				class="text-customwhite-500 font-bold text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				HELP
			</a>
		</div>
	</div>
</footer>
