<script lang="ts">
	import AddIcon from '../../assets/add.png';

	let modal: HTMLDialogElement | null = null;

	function openModal() {
		if (modal) {
			modal.showModal();
		}
	}
</script>

<button class="btn rounded-full bg-[#110F0E] text-[#ED712E]" on:click={openModal}>
	<img src={AddIcon} alt="" />Adicionar link
</button>

<dialog bind:this={modal} class="modal">
	<div class="modal-box h-[600px] w-[800px]">
		<h3 class="text-lg font-bold">Adicionar link</h3>

		<div class="flex h-[400px] w-[750px] flex-col">
			<div class="flex h-[78px] w-full gap-3">
				<div class="flex w-1/2 flex-col">
					<label for="">Título do link</label>
					<input type="text" placeholder="Digite o título" class="input input-bordered" />
				</div>

				<div class="flex w-1/2 flex-col">
					<label for="">Descrição</label>
					<input type="text" placeholder="Digite a descrição" class="input input-bordered" />
				</div>
			</div>
			<label for="">URL</label>
			<input type="text" placeholder="Cole a URL aqui" class="input input-bordered w-full" />

			<div class="modal-action">
				<form method="dialog">
					<button class="btn">Close</button>
				</form>
			</div>
		</div>
	</div>
</dialog>
