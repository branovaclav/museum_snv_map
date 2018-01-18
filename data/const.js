module.exports = {
	maps: {
		all: {
			title: { sk: 'Východzia mapa', en: 'Default Map' },
			type: { sk: 'Fyzicko-geografická mapa', en: 'Physical-Topographical Map' }
		},
		geology: {
			title: { sk: 'Zem', en: 'Earth' },
			type: { sk: 'Geologická mapa', en: 'Geological Map' }
		},
		waters: {
			title: { sk: 'Vodstvo', en: 'Waters' },
			type: { sk: 'Vodstvo a minerálne pramene', en: 'Water and Mineral Springs' }
		},
		fauna: {
			title: { sk: 'Fauna', en: 'Fauna' },
			type: { sk: 'Fyzicko-geografická mapa', en: 'Physical-Topographical Map' }
		},
		flora: {
			title: { sk: 'Flóra', en: 'Flora' },
			type: { sk: 'Fyzicko-geografická mapa', en: 'Physical-Topographical Map' }
		},
		reserves: {
			title: { sk: 'Chránené územia', en: 'Natural Reserves' },
			type: { sk: 'Mapa chránených území a biotopov', en: 'Map of Natural Reserves and Habitats' }
		}
	},

	regions: {
		all: {
			title: { sk: 'Všetky oblasti', en: 'All Regions' },
			position: { top: 0, left: -189, width: 1254, height: 1000 }
		},
		pieniny: {
			title: { sk: 'Pieniny', en: 'Pieniny' },
			position: { top: -52.4, left: 343.5, width: 299.6, height: 238.9 },
			label: { top: 60, left: 532 }
		},
		spisska_magura: {
			title: { sk: 'Spišská Magura', en: 'Spišská Magura' },
			position: { top: -90, left: 74.2, width: 557.7, height: 444.7 },
			label: { top: 108, left: 315 }
		},
		tatry: {
			title: { sk: 'Tatry', en: 'Tatras' },
			position: { top: 170.6, left: 20.3, width: 239.2, height: 190.75 },
			label: { top: 248, left: 105 }
		},
		kralovoholske_tatry: {
			title: { sk: 'Kráľovohoľské Tatry', en: 'Kráľova Hoľa Tatras' },
			position: { top: 539.6, left: 38.4, width: 176.5, height: 140.75 },
			label: { top: 600, left: 58 }
		},
		podtatranska_kotlina: {
			title: { sk: 'Podtatranská kotlina', en: 'Under-Tatra Basin' },
			position: { top: 169.6, left: 17.6, width: 473.6, height: 377.7 },
			label: { top: 385, left: 155 }
		},
		hornadska_kotlina: {
			title: { sk: 'Hornádska kotlina', en: 'Hornád Basin' },
			position: { top: 305.7, left: 54.4, width: 736.5, height: 587.3 },
			label: { top: 582, left: 430 }
		},
		levocske_vrchy: {
			title: { sk: 'Levočské vrchy', en: 'Levoča Mountains' },
			position: { top: 172, left: 254.2, width: 483.4, height: 385.5 },
			label: { top: 368, left: 400 }
		},
		kozie_chrbty: {
			title: { sk: 'Kozie chrbty', en: 'Kozie Chrbty' },
			position: { top: 399.8, left: 4.5, width: 280.4, height: 223.6 },
			label: { top: 496, left: 70 }
		},
		slovensky_raj: {
			title: { sk: 'Slovenský raj', en: 'Slovak Paradise' },
			position: { top: 531.8, left: 122.7, width: 299.8, height: 239.1 },
			label: { top: 645, left: 212 }
		},
		volovske_vrchy: {
			title: { sk: 'Volovské vrchy', en: 'Volovec Mountains' },
			position: { top: 551.8, left: 255.4, width: 618.3, height: 493.1 },
			label: { top: 790, left: 520 }
		},
		cierna_hora: {
			title: { sk: 'Čierna hora', en: 'Black Mountain' },
			position: { top: 623.9, left: 729.8, width: 148.4, height: 118.3 },
			label: { top: 673, left: 768 }
		},
		branisko: {
			title: { sk: 'Branisko', en: 'Branisko' },
			position: { top: 464.3, left: 598.1, width: 227.1, height: 181.1 },
			label: { top: 540, left: 674 }
		}
	},

	legend: {
		'all, fauna, flora': [
			{ code: '#EFF2D8', label: { sk: 'Tráva', en: '' }},
			{ code: '#D9D491', label: { sk: 'Lúka', en: '' }},
			{ code: '#C6B891', label: { sk: 'Orná pôda', en: '' }},
			{ code: '#96A65B', label: { sk: 'Les', en: '' }},
			{ code: '#93938F', label: { sk: 'Neúrodná pôda', en: '' }},
			{ code: 'water', label: { sk: 'Vodné toky', en: '' }},
			{ code: '#196FDF', label: { sk: 'Vodné plochy', en: '' }},
		],
		geology: [
			{ code: 'boundary_found', label: { sk: 'Geologické hranice', en: '' }},
			{ code: 'fault_found', label: { sk: 'Zlomy zistené', en: '' }},
			{ code: 'fault_assumed', label: { sk: 'Zlomy predpokladané', en: '' }},
			{ code: 'line_found', label: { sk: 'Príkrovové línie zistené', en: '' }},
			{ code: 'line_assumed', label: { sk: 'Príkrovové línie predpokladané', en: '' }},
			{ code: '#CA855F', label: { sk: 'Paleogén', en: '' }},
			{ code: '#77994F', label: { sk: 'Krieda', en: '' }},
			{ code: '#488199', label: { sk: 'Jura', en: '' }},
			{ code: '#6C3051', label: { sk: 'Trias', en: '' }},
			{ code: '#D75945', label: { sk: 'Perm', en: '' }},
			{ code: '#81A9A7', label: { sk: 'Karbón', en: '' }},
			{ code: '#A6784B', label: { sk: 'Devón', en: '' }},
			{ code: '#3D7D6C', label: { sk: 'Ordovík', en: '' }},
			{ code: '#788B61', label: { sk: 'Kambrium', en: '' }},
			{ code: '#86A08B', label: { sk: 'Paleozoikum', en: '' }},
			{ code: '#D34B74', label: { sk: 'Proterozoikum', en: '' }},
		],
		waters: [
			{ code: 'water', label: { sk: 'Vodné toky', en: '' }},
			{ code: '#196FDF', label: { sk: 'Vodné plochy', en: '' }},
		],
		reserves: [
			{ code: '#688D1E', label: { sk: 'Chránené územia', en: '' }},
			{ code: '#707037', label: { sk: 'Chránené vtáčie územia', en: '' }},
			{ code: '#869B89', label: { sk: 'Ochranné pásma', en: '' }},
		]
	},

	about: {
		title: { sk: 'Príroda Spiša v kocke', en: 'Nature of Spiš' },
		content: [
			{
				label: { sk: 'Autori textov', en: 'Authors of Text' },
				value: 'Ing. Zuzana Krempaská, RNDr. Marta Nižnanská, RNDr. Pavol Chromý, Mgr. Denis Kuzl'
			},
			{
				label: { sk: 'Korektúra', en: 'Revisioning' },
				value: 'RNDr. Marta Nižnanská, Mgr. Erika Gibalová, RNDr. Pavol Chromý'
			},
			{
				label: { sk: 'Administrátor textov a obrázkov', en: 'Text and Image Administration' },
				value: 'Mgr. Denis Kuzl'
			},
			{
				label: { sk: 'Digitálne spracovanie máp', en: 'Digital Map Processing' },
				value: 'Ing. Vladimír Krempaský, Ing. Marek Leskovjanský'
			},
			{
				label: { sk: 'Digitálna databáza (zdroj)', en: 'Digital Database (Sources)' },
				value: 'Regionálne geomorfologické členenie Slovenska, 1 : 50 000 © 2009 Geografický ústav SAV, Bratislava\nDigitálny model reliéfu (DMR-3.5) © Geodetický a kartografický ústav, Bratislava\nGIS údaje – prvky a hranice prvkov ochrany prírody na území Spiša © Štátna ochrana prírody SR, Banská Bystrica, Správa Národného parku Slovenský raj, Spišská Nová Ves'
			},
			{
				label: { sk: 'Autori fotografií', en: 'Authors of Photographs' },
				value: 'Mgr. Peter Olekšák, RNDr. Zuzana Kyseľová, PhD., Miloš Greisel, Juraj Ksiažek, Pavol Tajboš, RNDr. Daniel Dítě, PhD., Mgr. Miloslav Galvánek, PhD., Ing. Martin Ceľuch, PhD., RNDr. Pavol Chromý, Ing. Zuzana Krempaská, RNDr. Marta Nižnanská, Mgr. Milan Barlog, Mgr. Iwona Wróbel, RNDr. Miroslav Fulín, CSc., František Divok, doc. RNDr. Ľubomír Panigaj, CSc., RNDr. Andrej Mock, PhD., doc. RNDr. Ľubomír Kováč, CSc., RNDr. Peter Ľuptáčik, PhD., Mgr. Ing. Blažena Sedláková, RNDr. Rudolf Šoltés, CSc., Mgr. Jozef Kormančík, Miroslav Lehocký, FotoNet, SOS/BirdLife Slovenska'
			},
			{
				label: { sk: 'Užívateľské rozhranie a implementácia', en: 'User Interface and Implementation' },
				value: 'Mgr. Branislav Václav'
			},
			{
				label: { sk: 'Výtvarný a grafický návrh a realizácia', en: 'Art Design and Execution' },
				value: 'Mgr. art . Peter Masár, Mgr. art. Dušan Veverka'
			}
		],
		footer: {
			sk: 'Projekt podporil z verejných zdrojov Fond na podporu umenia.',
			en: 'The project was supported by the Public Fund for the Promotion of Art.'
		}
	},
	
	settings: {
		hiDPI: false, // false: FullHD maps, true: 4K maps
		photoHeight: 743,
		thumbnailHeight: 116
	}
};
