<script>
	export let footerClass = '';
</script>

<footer class={footerClass}>
	<div
		class="relative flex flex-col-reverse h-[386px] mt-[180px] md:mt-[70px] bg-customgreen-900 bg-opacity-[72%]"
	>
		<div
			class="absolute -top-[300px] md:-top-[150px] flex w-full md:max-w-[1302px] md:mx-[69px] h-[300px] bg-customgray-100 rounded-t-[14px] md:rounded-[14px]"
			style="background-image: url('/imgs/Biom_wipe_2.webp');"
		>
			<div class="flex flex-col place-content-between max-w-[414px] my-auto mx-8 md:mx-0 md:ml-[111px]">
				<span class="text-black font-black text-[30px] tracking-[0px] leading-[38px] max-w-[350px]"
					>Get the latest news delivered to your inbox.</span
				>
				<span class="text-black font-normal text-[16px] tracking-[0px] leading-[26px] mt-[13px] font-brandon"
					>Get access to the exciting stuff — exclusive new deals, product launches and more. Plus,
					get a 10% discount on your next order.</span
				>
				<div class="relative flex w-full mt-[18px]">
					<input
						type="email"
						placeholder="Enter your email address"
						class="w-full placeholder:text-black placeholder:font-normal placeholder:text-[16px] placeholder:tracking-[0px] placeholder:leading-[30px] placeholder:font-brandon p-[15px] h-[52px] rounded-[6px]"
					/>
					<button
						class="group absolute right-0 mt-[7px] mr-[7px] bg-customgreen-900 w-[44px] h-[38px] rounded-[6px]"
					>
						<img
							src="/icons/Icon ionic-ios-arrow-round-forward.webp"
							alt="Arrow right"
							class="group self-center mx-auto group-hover:translate-x-1 ease-in-out duration-300"
						/>
					</button>
				</div>
			</div>
		</div>

		<div class="flex self-center md:h-[106px] w-full px-8 md:px-[69px] mt-[50px]">
			<div class="flex flex-col md:flex-row justify-between w-full border-t border-customgreen-900 pb-4 md:pb-0">
				<span
					class="self-center text-center pt-4 md:pt-0 text-customwhite-500 font-normal text-[15px] tracking-[0.38px] leading-[22px] font-brandon my-auto"
					>© 2021 biom. All rights reserved • Privacy Policy • Terms of Service</span
				>
				<div class="self-center mt-4 md:mt-auto flex justify-end space-x-[10px] my-auto">
					<a href="/">
						<div class="flex w-[30px] h-[30px] rounded-full bg-customwhite-500">
							<img
								src="/icons/Icon ionic-logo-instagram.webp"
								alt="Icon ionic-logo-instagram"
								class="m-auto"
							/>
						</div>
					</a>
					<a href="/">
						<div class="flex w-[30px] h-[30px] rounded-full bg-customwhite-500">
							<img
								src="/icons/Icon awesome-facebook-f.webp"
								alt="Icon awesome-facebook-f"
								class="m-auto"
							/>
						</div>
					</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 self-center justify-items-center md:space-x-[65px] text-center">
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				SHOP
			</a>
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				WHY BIOM
			</a>
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				SCENTS
			</a>
			<a href="/">
				<img
					src="/imgs/biom logo footer.webp"
					alt="Biom logo footer"
					class="self-center w-[92px] h-auto my-auto"
				/>
			</a>
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				FAQS
			</a>
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				ACCOUNT
			</a>
			<a
				href="/"
				class="self-center text-customwhite-500 font-bold font-brandon text-[14px] tracking-[1.4px] leading-[20px] my-auto"
			>
				HELP
			</a>
		</div>
	</div>
</footer>
