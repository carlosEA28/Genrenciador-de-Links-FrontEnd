<script lang="ts">
	import goToLinks from '../../assets/list.png';
	import Profile from '../../assets/edit.png';
	import exit from '../../assets/exit.png';
</script>

<ul class="menu menu-horizontal mt-6 rounded-full bg-[#0B0A09] p-2">
	<li>
		<a class="tooltip hover:bg-[#ED712E]" href="/" data-tip="Links" aria-label="Botao home">
			<img src={goToLinks} alt="" />
		</a>
	</li>
	<li>
		<a
			class="tooltip hover:bg-[#ED712E]"
			href="/"
			data-tip="Detalhes"
			aria-label="Botão Meus links"
		>
			<img src={Profile} alt="" />
		</a>
	</li>
	<li>
		<a class="tooltip hover:bg-[#ED712E]" href="/" data-tip="Sair" aria-label="Botão Meu perfil">
			<img src={exit} alt="" />
		</a>
	</li>
</ul>
