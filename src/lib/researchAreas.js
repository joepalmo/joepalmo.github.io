import { getPublicationsByIds } from './publications.js';

export const researchAreas = [
	{
		slug: 'satellite-retrievals',
		title: 'Satellite retrievals of atmospheric composition',
		tagline: 'Developing remote sensing methods for the retrieval of trace gases',
		image: '/img/AMF_schematic.png',
		publicationIds: ['smoke-retrievals'],
		abstract: [
			'Satellite observations of the Earth provide a global view of atmospheric composition, and can be used to study gas phase pollution from transient events such as wildfires. However, quantifying the abundances of trace gases using ultraviolet (UV) remote sensing is challenging in smoky environments due to the presence of aerosol. We are developing an explicit correction to improve the accuracy of these retrievals under extreme conditions.'
		]
	},
	{
		slug: 'satellite-emissions',
		title: 'Using remote sensing to infer emissions',
		tagline: 'Estimating emissions from point sources',
		image: '/img/rockets_fig.png',
		publicationIds: ['rocket-nox-grl'],
		abstract: ['Geostationary satellites observe the same region throughout the day, making them well suited for capturing short-lived emission events that polar-orbiting instruments can miss. Rocket launches are one example: they inject nitrogen oxides (NOx) into the upper troposphere and lower stratosphere on timescales of hours. I use geostationary satellite observations to detect and quantify these emissions, and derive a robust relationship between launch mass and NOx emissions.']
	},
	{
		slug: 'wildfire-ozone',
		title: 'Wildfire smoke and tropospheric ozone',
		tagline: 'Observing and modeling ozone formation in smoke plumes',
		image: '/img/fig_09a.png',
		publicationIds: ['smoke-ozone-framework', 'fire-ozone-acp'],
		abstract: [
			'Ozone harms human health and warms the atmosphere. As wildfires grow in frequency and intensity, their contribution to tropospheric ozone remains uncertain. Quantifying that impact requires understanding how ozone forms as smoke plumes age and how well global models capture that chemistry. My work in this area combines aircraft observations, global atmospheric chemistry modeling, and satellite remote sensing. I use in-situ measurements to characterize ozone production across the lifetime of smoke plumes, evaluate model representation of fire-ozone chemistry, and develop space-based frameworks to extend these constraints globally.'
		]
	},
];

export function getAreaBySlug(slug) {
	return researchAreas.find((area) => area.slug === slug);
}

export function getAreaPublications(area) {
	return getPublicationsByIds(area.publicationIds);
}
