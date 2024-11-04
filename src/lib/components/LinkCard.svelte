<script>
	// @ts-nocheck

	import lixo from '../../assets/trash.png';
	import lapis from '../../assets/edit.png';
	import Lable from './Lable.svelte';
	import imgTeste from '../../assets/image 7.svg';

	let { TitleLink, url } = $props();
</script>

<div
	class="flex h-[72px] w-[592px] items-center justify-between gap-3 rounded-[20px] bg-[#110F0E] p-3"
>
	<img class="h-12 w-12 rounded-lg object-cover" src={imgTeste} alt="linkImg" />
	<div class="flex h-10 w-[400px] flex-col">
		<div class="flex gap-2 font-sans">
			<p class="  text-base font-semibold text-[#fff]">{TitleLink}</p>
			<Lable />
		</div>
		<p class="text-sm text-[#A3A3A3]">{url}</p>
	</div>

	<div class="flex h-10 w-[84px] items-center justify-between">
		<button class="h-10 w-10"><img src={lixo} alt="" /></button>
		<button class="h-10 w-10"><img src={lapis} alt="" /></button>
	</div>
</div>
