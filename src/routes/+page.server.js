import { createId } from '@paralleldrive/cuid2';

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load() {
	const uniqueId = createId();

	return {
		props: {
			uniqueId
		}
	};
}
