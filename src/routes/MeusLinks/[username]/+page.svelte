<script lang="ts">
	import axios from 'axios';
	import { PUBLIC_BASE_URL, PUBLIC_KEY_RSA } from '$env/static/public';
	import LinkCard from '$lib/components/LinkCard.svelte';
	import Logo from '../../../lib/components/Logo.svelte';
	import Cookies from 'js-cookie';
	import { jwtDecode } from 'jwt-decode';
	import AddLinkModal from '$lib/components/AddLinkModal.svelte';
	import MenuBar from '../../../lib/components/MenuBar.svelte';

	interface JwtPayload {
		sub: string;
	}

	function getUserIdFromToken(): string | null {
		const token = Cookies.get('authToken');
		if (!token) {
			console.error('Token não encontrado nos cookies');
			return null;
		}

		try {
			const decodedToken = jwtDecode<JwtPayload>(token);
			return decodedToken.sub;
		} catch (error) {
			console.error('Erro ao decodificar o token:', error);
			return null;
		}
	}
	const userId = getUserIdFromToken();
</script>

<section class=" flex min-h-screen flex-col items-center justify-center gap-8 bg-[#080807]">
	<Logo />
	<div class="flex h-11 w-[698px] items-center justify-between p-4">
		<p class="font-sans text-xl font-semibold text-white">Links</p>
		<AddLinkModal />
	</div>

	<div class="flex h-[512px] w-[798px] flex-col items-center">
		<div class="flex h-[424px] w-[698px] flex-col items-center gap-4 overflow-auto">
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
			<LinkCard TitleLink={'teste'} url={'http://localhost:5173/MeusLinks/caasd'} />
		</div>
	</div>
	<MenuBar />
</section>
