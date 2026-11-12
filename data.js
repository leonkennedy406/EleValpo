// Catálogo patrimonial de 30 ascensores documentados en Valparaíso.
// Estado: referencia consultada hasta 2026-11-02. NO es telemetría en tiempo real.
// Coordenadas: solo se muestran las que tienen referencia geográfica publicada.
// En algunos casos son estaciones/puntos del conjunto, NO puertas de acceso verificadas en terreno.

export const SOURCES = {
  ascenval: 'https://www.ascenval.cl/ascensores',
  polanco: 'https://www.ascenval.cl/ascensores/polanco',
  historic: 'https://repositorio.usm.cl/bitstreams/2fd4eabd-0497-4220-9270-50bfd02eca8c/download',
  map: 'https://es.wikivoyage.org/wiki/Ascensores_de_Valpara%C3%ADso',
  museum: 'https://www.mhnv.gob.cl/noticias/el-latido-de-los-cerros-un-viaje-al-corazon-de-los-ascensores-de-valparaiso',
  ascenvalContact: 'https://www.ascenval.cl/ascenval'
};

const lift = (id, name, sector, status, lat = null, lng = null, data = {}) => ({
  id, name, sector, status, lat, lng,
  statusDate: '2026-11-02',
  reference: data.reference || SOURCES.ascenval,
  wiki: data.wiki || `Ascensor_${name.replaceAll(' ', '_')}`,
  description: data.description || {
    es: `Ascensor histórico relacionado con el sector ${sector} de Valparaíso. Consulta las fuentes antes de planificar tu visita.`,
    en: `Historic lift associated with the ${sector} area of Valparaíso. Check the sources before planning a visit.`,
    pt: `Elevador histórico ligado à região de ${sector}, em Valparaíso. Confira as fontes antes de visitar.`
  },
  ...data
});

export const LIFTS = [
  // Los siete servicios listados como operativos por Ascenval en 2026.
  lift('concepcion', 'Concepción', 'Cerro Concepción', 'operativo', -33.04094, -71.62650, {
    year: 1883, access: 'Calle Prat / Paseo Gervasoni',
    description: {es:'El ascensor más antiguo de Valparaíso. Comunica el plan con el Paseo Gervasoni del cerro Concepción.', en:'Valparaíso’s oldest lift. It links the lower city with Paseo Gervasoni on Cerro Concepción.', pt:'O elevador mais antigo de Valparaíso. Liga a parte baixa ao Paseo Gervasoni, no Cerro Concepción.'}
  }),
  lift('el-peral', 'El Peral', 'Cerro Alegre', 'operativo', -33.04015, -71.62916, {
    year: 1901, access: 'Plaza de Justicia / Paseo Yugoslavo',
    description: {es:'Conecta Plaza de Justicia, cerca de Plaza Sotomayor, con el Paseo Yugoslavo y el Palacio Baburizza.', en:'Connects Plaza de Justicia near Plaza Sotomayor with Paseo Yugoslavo and the Baburizza Palace.', pt:'Liga a Plaza de Justicia ao Paseo Yugoslavo e ao Palácio Baburizza.'}
  }),
  lift('reina-victoria', 'Reina Victoria', 'Cerro Alegre', 'operativo', -33.04384, -71.62659, {
    year: 1902, access: 'Calle Elías / Paseo Dimalow',
    wiki: 'Ascensor_Reina_Victoria',
    description: {es:'Une el sector de la calle Elías con el Paseo Dimalow. Es uno de los ascensores emblemáticos del circuito turístico.', en:'Links Elías Street with Paseo Dimalow. An iconic lift in Valparaíso’s historic tourist area.', pt:'Liga a rua Elías ao Paseo Dimalow. Um dos elevadores emblemáticos da área turística.'}
  }),
  lift('cordillera', 'Cordillera', 'Cerro Cordillera', 'operativo', -33.03801, -71.63057, {
    year: 1886, access: 'Calle Serrano / Cerro Cordillera',
    description: {es:'Un ascensor patrimonial que conecta la calle Serrano con el cerro Cordillera.', en:'A heritage funicular connecting Serrano Street and Cerro Cordillera.', pt:'Um funicular patrimonial que liga a rua Serrano ao Cerro Cordillera.'}
  }),
  lift('espiritu-santo', 'Espíritu Santo', 'Cerro Bellavista', 'operativo', -33.04737, -71.62116, {
    year: 1911, access: 'Calle Aldunate / Cerro Bellavista',
    description: {es:'Comunica el plan con el cerro Bellavista, cerca del Museo a Cielo Abierto.', en:'Connects downtown with Cerro Bellavista, near the Open-Air Museum.', pt:'Liga a parte baixa ao Cerro Bellavista, próximo ao Museu a Céu Aberto.'}
  }),
  lift('san-agustin', 'San Agustín', 'Cerro Cordillera', 'operativo', -33.04040, -71.63235, {
    year: 1913, access: 'Barrio Puerto / Cerro Cordillera',
    description: {es:'Vincula el Barrio Puerto con el cerro Cordillera; complementa la conexión del ascensor Cordillera.', en:'Links Barrio Puerto and Cerro Cordillera, complementing the nearby Cordillera lift.', pt:'Liga o Bairro Puerto ao Cerro Cordillera, complementando o outro funicular da região.'}
  }),
  lift('baron', 'Barón', 'Cerro Barón', 'operativo', -33.04316, -71.60414, {
    year: 1909, access: 'Avenida España / Avenida Diego Portales',
    wiki: 'Ascensor_Barón',
    description: {es:'Ascensor eléctrico histórico del cerro Barón. Comunica el sector de avenida España con la parte alta.', en:'Historic electric funicular on Cerro Barón, connecting Avenida España to the hillside.', pt:'Funicular elétrico histórico do Cerro Barón, ligando a Avenida España à parte alta.'}
  }),

  // Su fuente de referencia indica cierre, reparación o falta de servicio.
  lift('polanco', 'Polanco', 'Cerro Polanco', 'cerrado', -33.050611, -71.599056, {
    year: 1916, access: 'Calle Almirante Simpson', reference: SOURCES.polanco,
    warning: 'Cerrado desde 05-09-2024 según Ascenval; otra nota de prensa en 2026 lo clasifica como operativo. Confirmar en terreno.',
    description: {es:'A diferencia de los funiculares inclinados, es un ascensor vertical con acceso por túnel. Ascenval lo registra fuera de servicio.', en:'Unlike the inclined funiculars, this is a vertical elevator accessed through a tunnel. Ascenval lists it as closed.', pt:'Diferentemente dos funiculares inclinados, é um elevador vertical com acesso por túnel. A Ascenval o indica como fechado.'}
  }),
  lift('artilleria', 'Artillería', 'Cerro Artillería', 'cerrado', -33.03333333, -71.63027778, {year: 1892, access:'Paseo 21 de Mayo / sector Aduana', reference:'https://www.ascenval.cl/ascensores/artilleria'}),
  lift('villaseca', 'Villaseca', 'Playa Ancha', 'cerrado', -33.03076, -71.630673, {year:1913}),
  lift('mariposas', 'Mariposas', 'Cerro Mariposas', 'cerrado', -33.05083333, -71.61805556, {year:1903}),
  lift('florida', 'Florida', 'Cerro Florida', 'cerrado', -33.05001111, -71.62029444, {year:1906}),
  lift('lecheros', 'Los Lecheros', 'Cerro Lecheros', 'cerrado', -33.044606, -71.603304, {year:1908, wiki:'Ascensor_Lecheros'}),
  lift('larrain', 'Larraín', 'Cerro Larraín', 'cerrado', -33.04653056, -71.60248889, {year:1909, wiki:'Ascensor_Larraín'}),
  lift('monjas', 'Monjas', 'Cerro Monjas', 'cerrado', -33.05222222, -71.61444444, {year:1912}),
  lift('la-cruz', 'La Cruz', 'Cerro La Cruz', 'cerrado', null, null, {year:1908, reference:SOURCES.museum}),
  // Histórico de uso institucional: no disponible como servicio público turístico.
  lift('van-buren', 'Hospital Van Buren', 'Hospital Carlos Van Buren', 'restringido', -33.05194444, -71.61055556, {
    year:1929, access:'Recinto hospitalario, acceso restringido', wiki:'Ascensor_del_Hospital_Van_Buren',
    description: {es:'Ascensor de uso institucional del Hospital Carlos Van Buren; no forma parte del circuito público de ascensores.', en:'An institutional elevator at Carlos Van Buren Hospital; it is not part of the public lift network.', pt:'Elevador de uso institucional do Hospital Carlos Van Buren; não faz parte da rede pública.'}
  }),

  // Antiguos ascensores documentados en el registro histórico USM. No inventar lat/lng.
  lift('san-juan', 'Hospital San Juan de Dios', 'Antiguo hospital', 'historico', null, null, {year:1898, wiki:null, reference:SOURCES.historic, historicNote:'Destruido en el terremoto de 1906.'}),
  lift('bellavista', 'Bellavista', 'Cerro Bellavista', 'historico', null, null, {year:1899, reference:SOURCES.historic}),
  lift('panteon', 'Panteón', 'Cerro Panteón', 'historico', null, null, {year:1901, reference:SOURCES.historic}),
  lift('ferroviario', 'Ferroviario', 'Sector ferroviario', 'historico', null, null, {year:1902, reference:SOURCES.historic}),
  lift('esmeralda', 'Esmeralda', 'Cerro Concepción', 'historico', null, null, {year:1905, reference:SOURCES.historic}),
  lift('arrayan', 'Arrayán', 'Cerro Arrayán', 'historico', null, null, {year:1907, reference:SOURCES.historic, historicNote:'Desaparecido; registros citan 1974.'}),
  lift('santo-domingo', 'Santo Domingo', 'Cerro Santo Domingo', 'historico', null, null, {year:1910, reference:SOURCES.historic, historicNote:'Desaparecido; registros citan 1977.'}),
  lift('placeres', 'Placeres', 'Cerro Los Placeres', 'historico', null, null, {year:1913, reference:SOURCES.historic}),
  lift('merced', 'Merced', 'Cerro La Merced', 'historico', null, null, {year:1914, reference:SOURCES.historic}),
  lift('ramaditas', 'Ramaditas', 'Cerro Ramaditas', 'historico', null, null, {year:1914, reference:SOURCES.historic}),
  lift('delicias', 'Delicias', 'Sector Delicias', 'historico', null, null, {year:1921, reference:SOURCES.historic}),
  lift('las-canas', 'Las Cañas', 'Cerro Las Cañas', 'historico', null, null, {year:1925, reference:SOURCES.historic, historicNote:'Fuera de servicio desde aproximadamente 1980; existencia física por verificar.'}),
  lift('perdices', 'Perdices', 'Cerro Las Perdices', 'historico', null, null, {year:1931, reference:SOURCES.historic})
];

export const REFERENCE_DATE = '2026-11-02';
