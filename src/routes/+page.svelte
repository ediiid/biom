<script>
	import { browser } from '$app/environment';

	// listening to every scroll change to get scroll position in % and move 'element-to-move' accordingly when visible
	if (browser) {
		window.addEventListener('scroll', function () {
			let maxHeight = document.body.scrollHeight - window.innerHeight;
			let scrolled = Number(((window.pageYOffset * 100) / maxHeight).toFixed(2));
			let element = document.getElementById('element-to-move');
			let scrollThreshold = 84;
			if (scrolled > scrollThreshold) {
				let moveBy = scrolled - scrollThreshold;
				// @ts-ignore
				element.style.transform = 'translateX(-' + moveBy * 18 + 'px)';
			} else if (scrolled < scrollThreshold) {
				// @ts-ignore
				element.style.transform = 'translateX(0px)';
			}
		});
	}
</script>

<div class="px-[15px] md:px-[25px]">
	<div
		class="flex flex-col pl-[40px] md:pl-[85px] pt-[55px] md:pt-[159px] w-full pb-[55px] md:pb-[0px] md:h-[675px] bg-cover bg-no-repeat rounded-[14px]"
		style="background-image: url('/imgs/Kitchen_3.webp');"
	>
		<span
			class="max-w-[280px] font-black text-[56px] leading-[62px] tracking-[0px] text-customwhite-500"
		>
			So fresh. So green.
		</span>
		<span
			class="mt-[14px] mr-[40px] md:mr-0 max-w-[410px] text-customwhite-500 text-[20px] leading-[28px] font-normal tracking-[0px] font-brandon"
		>
			We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to
			put sustainability in reach with better-for-the-planet wipes that are easy, effective, and
			plastic-free.
		</span>
		<button
			class="mt-6 bg-white hover:bg-customwhite-500 rounded-md w-[180px] h-[50px] text-customgray-900 font-black font-brandon text-[13px] tracking-[1.95px]"
		>
			GET STARTED
		</button>
	</div>
</div>

<div
	class="hidden md:flex absolute rotate-180 w-[270px] h-[730] ml-6 overflow-y-auto overflow-x-hidden hide-scrollbar z-10"
>
	<div
		class="rotate-90 text-[225px] text-customgray-100 font-bold w-[0px] h-[730px] whitespace-nowrap hide-scrollbar font-brandon tracking-[-5.63px]"
	>
		meet biom
	</div>
</div>
<div
	class="flex flex-col w-full h-[730px] bg-cover bg-no-repeat z-20"
	style="background-image: url('/imgs/Mask Group 12.webp');"
>
	<div
		class="flex flex-col md:self-end md:max-w-[565px] pr-4 md:pr-0 pl-4 md:pl-0 md:mr-[140px] pt-10 md:pt-[103px] w-full md:w-1/2"
	>
		<span class="font-normal font-brandon text-[14px] tracking-[2.1px] text-customgray-900">
			THE BIOM DISPENSER
		</span>
		<span class="text-customgray-900 text-[36px] font-black tracking-[0px] leading-[62px]">
			Redefine your experience of clean.
		</span>
		<span
			class="font-normal text-[18px] tracking-[0px] leading-[28px] font-brandon text-customgray-900"
		>
			A quality engineered wipes dispenser that looks beautiful in your home, making better habits
			for your home and planet always within reach.
		</span>
		<div class="flex flex-col mt-[42px] space-y-[35px]">
			<div class="flex space-x-[22px]">
				<img src="/icons/beautiful design icon.webp" alt="Beautiful design icon" />
				<span
					class="my-auto font-normal text-customgray-900 font-brandon text-[18px] leading-[26px] tracking-[0px]"
					>Beautiful design, fit for your home</span
				>
			</div>
			<div class="flex space-x-[22px]">
				<img src="/icons/durable stainless icon.webp" alt="Durable stainless icon" />
				<span
					class="my-auto font-normal text-customgray-900 font-brandon text-[18px] leading-[26px] tracking-[0px]"
					>Durable stainless steel exterior</span
				>
			</div>
			<div class="flex space-x-[22px]">
				<img src="/icons/non toxic icon.webp" alt="Non toxic icon" />
				<span
					class="my-auto font-normal text-customgray-900 font-brandon text-[18px] leading-[26px] tracking-[0px]"
					>Non-toxic, BPA free</span
				>
			</div>
		</div>
		<button
			class="bg-customgreen-900 hover:bg-customgray-900 mt-[45px] w-[163px] max-h-[50px] py-4 rounded-md text-customwhite-500 font-black text-[13px] tracking-[1.95px] font-brandon"
		>
			SHOP NOW
		</button>
	</div>
</div>

<div
	class="mt-[40px] flex flex-col space-y-4 md:space-y-0 px-4 md:px-0 md:flex-row justify-between"
>
	<div
		class="group relative w-full md:w-[433px] h-[415px] overflow-hidden rounded-[14px] md:rounded-l-none"
	>
		<div
			class="group bg-cover bg-right group-hover:scale-105 ease-in-out duration-500 w-full h-full"
			style="background-image: url('/imgs/Living Room_1.webp');"
		/>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-500 absolute bottom-[22px] left-[110px] text-customwhite-500 font-bold text-[22px]"
			>living room</span
		>
	</div>
	<div class="group relative w-full md:w-[535px] h-[415px] overflow-hidden rounded-[14px]">
		<div
			class="group bg-cover bg-center group-hover:scale-105 ease-in-out duration-500 w-full h-full"
			style="background-image: url('/imgs/office.webp');"
		/>
		<span
			class="group absolute top-[50px] md:top-[108px] left-[95px] md:left-[168px] text-white font-normal text-[16px] tracking-[2.4px] font-brandon"
			>WHERE YOU NEED IT,</span
		>
		<span
			class="group absolute top-[70px] md:top-[132px] mx-[100px] text-white font-black text-[78px] text-center tracking-[-0.78px] leading-[82px]"
			>when you need it.</span
		>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-500 absolute bottom-[22px] left-[241px] text-customwhite-500 font-bold text-[22px]"
			>office</span
		>
	</div>
	<div
		class="group relative w-full md:w-[433px] h-[415px] overflow-hidden rounded-[14px] md:rounded-r-none"
	>
		<div
			class="group bg-cover bg-left group-hover:scale-105 ease-in-out duration-500 w-full h-full"
			style="background-image: url('/imgs/Kitchen Shot_3.webp');"
		/>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-500 absolute bottom-[22px] right-[127px] text-customwhite-500 font-bold text-[22px]"
			>kitchen</span
		>
	</div>
</div>

<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 mt-8 md:mt-[120px] justify-between">
	<div class="flex mx-auto mt-[55px]">
		<div class="flex flex-col space-y-[35px] w-full">
			<span class="text-[36px] ml-[50px] text-black font-black leading-[44px] max-w-[300px]"
				>Ready to start wiping out waste?</span
			>
			<div
				class="group flex w-[286px] ml-[25px] place-content-center border border-customgray-900 rounded-[6px]"
			>
				<span
					class="group border-r border-r-customgray-900 text-[13px] font-bold text-customgreen-900 p-3 font-brandon tracking-[1px]"
				>
					CHOOSE YOUR VESSEL COLOR
				</span>
				<div class="group flex place-content-center p-3">
					<img
						src="/icons/Icon ionic-ios-arrow-round-forward.svg"
						alt="Arrow right"
						class="group group-hover:translate-x-1 ease-in-out duration-300 ml-1"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="group relative flex flex-col overflow-hidden mx-auto">
		<div
			class="group bg-cover bg-center w-[400px] h-[400px] group-hover:translate-x-14 ease-in-out duration-300"
			style="background-image: url('/imgs/Green_1.webp');"
		/>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[72px] text-black font-black text-[22px]"
			>Biom Dispenser</span
		>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[50px] text-black font-normal text-[14px] font-brandon tracking-[1.4px]"
			>OCEAN TEAL</span
		>
	</div>
	<div class="group relative flex flex-col overflow-hidden mx-auto">
		<div
			class="group bg-cover bg-center w-[400px] h-[400px] group-hover:translate-x-14 ease-in-out duration-300"
			style="background-image: url('/imgs/Biom fn .20.webp');"
		/>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[72px] text-black font-black text-[22px]"
			>Biom Dispenser</span
		>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[50px] text-black font-normal text-[14px] font-brandon tracking-[1.4px]"
			>WHITE</span
		>
	</div>
	<div class="group relative flex flex-col overflow-hidden mx-auto">
		<div
			class="group bg-cover bg-center w-[400px] h-[400px] group-hover:translate-x-14 ease-in-out duration-300"
			style="background-image: url('/imgs/Black_2.webp');"
		/>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[72px] text-black font-black text-[22px]"
			>Biom Dispenser</span
		>
		<span
			class="group opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute bottom-[50px] text-black font-normal text-[14px] font-brandon tracking-[1.4px]"
			>INK BLACK</span
		>
	</div>
</div>

<div
	class="relative flex flex-col place-content-center px-4 md:px-0 py-4 md:py-0 m-auto md:h-[450px] bg-customgray-100 -mt-[16px] text-center"
>
	<span
		class="text-[14px] font-normal leading-[62px] tracking-[2.1px] text-customgray-900 font-brandon"
		>WHAT PEOPLE ARE SAYING</span
	>
	<span
		class="max-w-[747px] self-center text-[25px] font-bold leading-[42px] tracking-[0px] text-customgray-900"
		>“Cleaning and sanitizing are now more important than ever and these wipes make it so easy.
		They’re great because they don’t dry my skin out and I love knowing that buying their products
		are better for the environment.”</span
	>
	<span
		class="text-[13px] font-normal leading-[62px] tracking-[1.3px] text-customgray-900 font-brandon"
		>- RACHAEL H.</span
	>
	<div class="flex place-content-center space-x-[12px] mt-4">
		<div class="rounded-full w-2 h-2 border border-customgreen-900 bg-customgreen-900" />
		<div class="rounded-full w-2 h-2 border border-customgreen-900" />
		<div class="rounded-full w-2 h-2 border border-customgreen-900" />
		<div class="rounded-full w-2 h-2 border border-customgreen-900" />
	</div>
</div>

<div class="hidden md:flex w-full h-[896px]">
	<div class="flex relative">
		<div
			class="absolute w-[496px] h-[622px] top-[90px] left-[69px] bg-cover bg-center z-20"
			style="background-image: url('/imgs/AdobeStock_377418446_Preview.webp');"
		/>
		<div
			class="absolute w-[858px] h-[606px] top-[126px] left-[513px] bg-customgreen-100 rounded-xl z-10"
		>
			<div class="flex flex-col space-y-[10px] ml-[222px] mt-[60px]">
				<span
					class="text-[14px] font-normal leading-[10px] tracking-[2.1px] text-customgray-900 font-brandon"
					>BIOM WIPES</span
				>
				<span class="text-[36px] font-black leading-[44px] tracking-[0px] text-black"
					>Better for you, and the planet.</span
				>
				<span
					class="text-[18px] max-w-[555px] font-normal leading-[28px] tracking-[0px] text-customgray-900 font-brandon"
					>The experience of clean should feel amazing. In a time when we’re constantly sanitizing,
					it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take
					care of you, while you take care of your home.</span
				>
				<div class="flex flex-col space-y-[35px] ml-10 !mt-[55px]">
					<div class="flex space-x-[22px]">
						<img
							src="/icons/biodegradable icon.webp"
							alt="Biodegradable icon"
							class="w-[69px] h-[66px]"
						/>
						<span
							class="my-auto text-[18px] font-normal leading-[26px] tracking-[0px] text-black font-brandon"
							>100% biodegradable</span
						>
					</div>
					<div class="flex space-x-[22px]">
						<img
							src="/icons/plastic free icon.webp"
							alt="Plastic free icon"
							class="w-[69px] h-[66px]"
						/>
						<span
							class="my-auto text-[18px] font-normal leading-[26px] tracking-[0px] text-black font-brandon"
							>Plastic-free</span
						>
					</div>
					<div class="flex space-x-[22px]">
						<img
							src="/icons/plant based icon.webp"
							alt="Plant based icon"
							class="w-[69px] h-[66px]"
						/>
						<span
							class="my-auto text-[18px] font-normal leading-[26px] tracking-[0px] text-black font-brandon"
							>100% plant-based</span
						>
					</div>
					<button
						class="bg-customgreen-900 hover:bg-customgray-900 mt-[45px] w-fit py-4 px-[40px] rounded-md text-customwhite-500 font-black text-[13px] tracking-[1.95px] font-brandon"
					>
						SUBSCRIBE NOW
					</button>
				</div>
			</div>
		</div>
		<div
			class="absolute w-[308px] h-[373px] top-[433px] left-[397px] bg-cover bg-center z-30"
			style="background-image: url('/imgs/Refill Packaging_Mockup_2.webp');"
		/>
	</div>
</div>

<div class="md:px-[25px]">
	<div class="relative w-full md:h-[675px] md:rounded-[14px] overflow-hidden">
		<video width="1920" height="1080" autoplay muted loop>
			<source
				src="/videos/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4"
				type="video/mp4"
			/>
		</video>
		<div
			class="absolute w-full top-[35px] md:top-[233px] flex flex-col place-content-center text-center"
		>
			<span
				class="hidden md:block text-[14px] font-normal leading-[6px] tracking-[2.1px] text-customwhite-500 font-brandon"
				>CLEANING OUR OCEANS WITH EVERY WIPE</span
			>
			<span
				class="mt-[6px] px-12 md:px-0 text-[28px] md:text-[36px] font-black leading-[36px] md:leading-[62px] tracking-[0px] text-customwhite-500"
				>Wipes have plastic in them. We don’t.</span
			>
			<span
				class="hidden md:block mt-[10px] self-center max-w-[636px] text-[18px] font-normal leading-[28px] tracking-[0px] text-customwhite-500 font-brandon"
				>We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the
				environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</span
			>
			<button
				class="mt-[24px] mx-auto bg-white hover:bg-customwhite-500 rounded-md w-[180px] h-[50px] text-customgray-900 font-black text-[13px] tracking-[1.95px] font-brandon"
			>
				LEARN MORE
			</button>
		</div>
	</div>
</div>

<div class="flex flex-col h-[634px] mt-20 overflow-hidden">
	<span
		class="mx-auto mb-[50px] text-[36px] font-black leading-[44px] tracking-[0px] text-customgray-900"
		>#cleanwithbiom</span
	>
	<div class="flex justify-between space-x-[30px] ease-in-out" id="element-to-move">
		<img
			src="/imgs/AdobeStock_372350085_Preview.webp"
			alt="AdobeStock_372350085_Preview"
			class="bg-cover bg-center w-[250px] h-[250px] top-0"
		/>
		<img
			src="/imgs/Biom_wipe_6.webp"
			alt="Biom_wipe_6"
			class="bg-cover bg-center w-[270px] h-[270px] mt-[20px]"
		/>
		<img
			src="/imgs/kitchen_counter_low res.webp"
			alt="Kitchen_counter_low res"
			class="bg-cover bg-center w-[250px] h-[250px] top-0"
		/>
		<img
			src="/imgs/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.webp"
			alt="Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G"
			class="bg-cover bg-center w-[270px] h-[270px] mt-[20px]"
		/>
		<img
			src="/imgs/Biom fn .23.webp"
			alt="Biom fn .23"
			class="bg-cover bg-center w-[250px] h-[250px] top-0"
		/>
		<img
			src="/imgs/AdobeStock_334130078_Preview.webp"
			alt="AdobeStock_334130078_Preview"
			class="bg-cover bg-center w-[270px] h-[270px] mt-[20px]"
		/>
	</div>
	<div
		class="group self-center mt-[40px] flex w-fit place-content-center border border-customgray-900 rounded-[6px]"
	>
		<span
			class="group border-r border-r-customgray-900 text-[14px] font-bold text-customgreen-900 px-4 py-3 font-brandon tracking-[1.3px]"
		>
			FOLLOW US ON INSTAGRAM
		</span>
		<div class="group flex place-content-center px-4 py-3">
			<img
				src="/icons/Icon awesome-instagram.webp"
				alt="Icon awesome-instagram"
				class="group group-hover:translate-x-1 ease-in-out duration-300 w-[18px] h-[18px] self-center"
			/>
		</div>
	</div>
</div>
