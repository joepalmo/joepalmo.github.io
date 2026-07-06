import { error } from '@sveltejs/kit';
import { getAreaBySlug, getAreaPublications, researchAreas } from '$lib/researchAreas.js';

export function entries() {
	return researchAreas.map((area) => ({ slug: area.slug }));
}

export function load({ params }) {
	const area = getAreaBySlug(params.slug);
	if (!area) throw error(404, 'Not found');

	return {
		area,
		relatedPublications: getAreaPublications(area)
	};
}
