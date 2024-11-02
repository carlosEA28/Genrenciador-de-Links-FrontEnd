<script lang="ts">
	// @ts-ignore
	import Button from './Button.svelte';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let { isLogin } = $props();

	let firstName = '';
	let secondName = '';
	let email = '';
	let password = '';

	let submitCreateUser = async (event: SubmitEvent) => {
		event.preventDefault();
		if (firstName === '' || secondName === '' || email === '' || password === '') {
			return;
		}

		try {
			await axios.post(`${PUBLIC_BASE_URL}/v1/user`, {
				firstName,
				secondName,
				email,
				password
			});
			await goto('/login');
		} catch (error) {
			console.error('Error creating user:', error);
		}
	};

	let submitLogin = async (event: SubmitEvent) => {
		event.preventDefault();
		if (email === '' || password === '') {
			return;
		}

		try {
			const response = await axios.post(
				`${PUBLIC_BASE_URL}/login`,
				{
					email,
					password
				},
				{
					withCredentials: true
				}
			);

			if (response.status === 200) {
				const accessToken = response.data.accessToken;

				document.cookie = `authToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7};`;

				axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

				await goto(`/MeusLinks/${response.data}`);
				console.log(response);
			}
		} catch (error) {
			console.error('Error logging in:', error);
		}
	};
</script>

<form class="flex flex-col" on:submit={isLogin ? submitLogin : submitCreateUser}>
	{#if isLogin}
		<div class="mb-5 flex flex-col gap-5">
			<label class="input input-bordered flex items-center gap-2">
				<input
					type="email"
					class="w-[402px] grow"
					placeholder="Email"
					bind:value={email}
					required
				/>
			</label>
			<label class="input input-bordered mb-5 flex items-center gap-2">
				<input type="password" class="grow" placeholder="Senha" bind:value={password} required />
			</label>
			<Button btnText="Login" />
			<p class="mt-4 text-center">
				Não possui uma conta? <a
					on:click={() => goto('/cadastro')}
					class="cursor-pointer text-white">Criar Conta</a
				>
			</p>
		</div>
	{:else}
		<div class="mb-5 flex gap-5">
			<label class="input input-bordered flex items-center gap-2">
				<input type="text" class="grow" placeholder="Nome" bind:value={firstName} required />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<input type="text" class="grow" placeholder="Sobrenome" bind:value={secondName} required />
			</label>
		</div>
		<label class="input input-bordered mb-5 flex items-center gap-2">
			<input type="email" class="grow" placeholder="Email" bind:value={email} required />
		</label>
		<label class="input input-bordered mb-5 flex items-center gap-2">
			<input type="password" class="grow" placeholder="Senha" bind:value={password} required />
		</label>
		<Button btnText="Cadastrar" />
		<p class="mt-4 text-center">
			Já possui uma conta? <a on:click={() => goto('/login')} class="cursor-pointer text-white"
				>Acessar Conta</a
			>
		</p>
	{/if}
</form>
