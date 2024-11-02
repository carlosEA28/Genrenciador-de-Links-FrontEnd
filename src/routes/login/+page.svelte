<script lang="ts">
	import Logo from '../../lib/components/Logo.svelte';
	import Form from '../../lib/components/Form.svelte';
	import leftImage from '../../assets/thumbnail.svg';
</script>

<div class="flex h-screen w-full">
	<div class="flex h-screen w-1/2 items-center justify-center p-5">
		<img src={leftImage} alt="" class="h-full w-full rounded-2xl object-cover" />
	</div>

	<div class="flex h-screen w-1/2 flex-col items-center justify-between">
		<div class="flex h-[623px] w-[562px] flex-grow flex-col items-center justify-center">
			<Logo />
			<div class="flex flex-col justify-between">
				<p class="font-onest mb-5 text-xl font-bold text-white">Login</p>
				<div>
					<Form isLogin={true} />
				</div>
			</div>
		</div>
	</div>
</div>
