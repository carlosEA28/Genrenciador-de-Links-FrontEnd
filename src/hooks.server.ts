import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('authToken');

	if (!sessionId && event.url.pathname.startsWith('/MeusLinks')) {
		throw redirect(303, '/login');
	}

	const response = await resolve(event);

	return response;
};
