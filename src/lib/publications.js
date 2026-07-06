export const publications = [
	{
		id: 'smoke-retrievals',
		status: 'in-progress',
		year: 2026,
		authors:
			'Palmo, J. O., A. M. Fiore, C. Nowlan, G. Gonzalez-Abad, J. L. Tirpitz, H. Zhang, S. Kondragunta, A. Huff, et al.',
		boldName: 'Palmo, J. O.',
		title: 'Aerosol Corrected NO2 Retrievals over Biomass Burning Regions',
		note: 'in preparation'
	},
	{
		id: 'smoke-ozone-framework',
		status: 'in-progress',
		year: 2026,
		authors:
			'Palmo, J. O., Fiore A. M., Zhu, Q., Laughner, J. L., Wang, S., Jin, X., Heald, C. L., et al.',
		boldName: 'Palmo, J. O.',
		title: 'A Space-Based Framework for Characterizing Ozone Formation Chemistry in Wildfire Smoke Plumes',
		note: 'in preparation'
	},
	{
		id: 'rocket-nox-grl',
		status: 'in-progress',
		year: 2026,
		authors:
			'Palmo, J. O., McDonald, H., Nowlan, C. R., González Abad, G., McDowell, J., Fiore, A. M., Barker, C. R., Marais, E. A., and Eastham, S. D.',
		boldName: 'Palmo, J. O.',
		title: 'Quantifying Rocket NOx Emissions Using Geostationary Satellite Observations',
		journal: 'Geophysical Research Letters',
		note: 'submitted'
	},
	{
		id: 'fire-ozone-acp',
		status: 'peer-reviewed',
		year: 2025,
		authors:
			'Palmo, J. O., C.L. Heald, D.R. Blake, I. Bourgeois, M. Coggon, J. Collett, F. Flocke, A. Fried, G. Gkatzelis, S. Hall, L. Hu, J.L. Jimenez, P. Campuzano-Jost, I-T. Ku, B. Nault, B. Palm, J. Peischl, I. Pollack, A. Sullivan, J. Thornton, C. Warneke, A. Wisthaler, and L. Xu',
		boldName: 'Palmo, J. O.',
		title: 'Investigating fire-induced ozone production from local to global scales',
		journal: 'Atmos. Chem. Phys',
		volumePages: '25, 17107-17124',
		link: 'https://doi.org/10.5194/acp-25-17107-2025'
	},
	{
		id: 'caspr',
		status: 'peer-reviewed',
		year: 2023,
		authors:
			'Betti, S. K., K. B. Follette, K. Ward-Duong, A. E. Peck, Y. Aoyama, J. Bary, B. Dacus, S. Edwards, G.-D. Marleau, K. Mohamed, J. Palmo, C. Plunkett, C. Robinson, and H. Wang',
		boldName: 'J. Palmo',
		title: 'The Comprehensive Archive of Substellar and Planetary Accretion Rates',
		journal: 'Astron. J.',
		volumePages: '166, 262',
		link: 'https://doi.org/10.3847/1538-3881/ad06b8'
	},
	{
		id: 'gaplanets-campaign',
		status: 'peer-reviewed',
		year: 2023,
		authors:
			'Follette, K. B., L. M. Close, J. R. Males, K. Ward-Duong, W. O. Balmer, J. Adams Redai, J. Morales, C. Sarosi, B. Dacus, R. J. De Rosa, F. Garcia Toro, C. Leonard, B. Macintosh, K. M. Morzinski, W. Mullen, J. Palmo, R. N. Saitoti, E. Spiro, H. Treiber, K. Wagner, J. Wang, D. Wang, A. Watson, and A. J. Weinberger',
		boldName: 'J. Palmo',
		title:
			'The Giant Accreting Protoplanet Survey (GAPlanetS)—Results from a 6 yr Campaign to Image Accreting Protoplanets',
		journal: 'Astron. J.',
		volumePages: '165, 225',
		link: 'https://doi.org/10.3847/1538-3881/acc183'
	},
	{
		id: 'gaplanets-detection',
		status: 'peer-reviewed',
		year: 2023,
		authors:
			'Adams Redai, J. I., K. B. Follette, J. Wang, C. Leonard, W. Balmer, L. M. Close, B. Dacus, J. R. Males, K. M. Morzinski, J. Palmo, L. Pueyo, E. Spiro, H. Treiber, K. Ward-Duong, and A. Watson',
		boldName: 'J. Palmo',
		title:
			'The Giant Accreting Protoplanet Survey (GAPlanetS): Optimization Techniques for Robust Detections of Protoplanets',
		journal: 'Astron. J.',
		volumePages: '165, 57',
		link: 'https://doi.org/10.3847/1538-3881/aca60d'
	}
];

export function getPublicationsByIds(ids) {
	return ids
		.map((id) => {
			const pub = publications.find((p) => p.id === id);
			if (!pub) {
				console.warn(`Publication not found: ${id}`);
			}
			return pub;
		})
		.filter(Boolean);
}

export function highlightAuthor(authors, name) {
	if (!name) return authors;
	return authors.replace(name, `<span class="author-name">${name}</span>`);
}

export function citationDetails(pub) {
	const parts = [pub.journal, pub.volumePages, pub.note].filter(Boolean);
	return parts.length ? `, ${parts.join(', ')}` : '';
}
