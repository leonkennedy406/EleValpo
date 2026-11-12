// Fotografías auténticas identificadas en Wikimedia Commons o en archivos públicos consultables.
// No son imágenes generadas. Para cada foto se conserva el enlace a su fuente.
// Los elementos string siguen apuntando a Wikimedia Commons.
// Los elementos objeto usan una copia local incluida en el proyecto y un enlace a la fuente pública.
export const PHOTO_FILES = {
  'concepcion': [
    'Ascensor Concepción en 2026.jpg',
    'J28 241 Ascensor Concepción.jpg',
    'Letrero Ascensor Concepción, Cerro Concepción, Valparaíso 20201102 151.jpg',
    'Ascensorconcepcion1.JPG'
  ],
  'el-peral': [
    'Ascensor El Peral, Valparaíso 20230902 02.jpg',
    'Ascensor El Peral, Valparaíso 20230902 01.jpg',
    'Ascensor El Peral-Entrada Principal 01.JPG',
    'Ascensor El Peral Valparaíso.JPG'
  ],
  'reina-victoria': [
    'Subiendo en el Ascensor Reina Victoria, Valparaíso (2026).jpg',
    'Ascensor Reina Victoria, Valparaíso 20230902.jpg',
    'Ascensor Reina Victoria-Vista desde Cumming.JPG',
    'Entrada Ascensor Reina Victoria.JPG'
  ],
  'cordillera': [
    'Ascensor Cordillera, Valparaíso 20230902.jpg',
    'Ascensor Cordillera vc.jpg',
    'Ascensor cordillera y escala cienfuegos.jpg',
    'Ascensor Cordillera-Escala Lateral.JPG'
  ],
  'espiritu-santo': [
    'Ascensor Espíritu Santo 1.jpg',
    'Ascensor Espíritu Santo 2.jpg',
    'Ascensor Espiritu Santo Entrada Superior I.JPG',
    'Ascensor Espíritu Santo January 2008 01.jpg'
  ],
  'san-agustin': [
    'Ascensor San Agustín, Valparaíso 20230902 01.jpg',
    'Ascensor San Agustín, Valparaíso 20230902 02.jpg',
    'J28 249 Ascensor San Agustín.jpg',
    'Ascensor San Agustín-Entrada Tomas Ramos.JPG'
  ],
  'baron': [
    'Ascensor Barón, Valparaíso 20230901.jpg',
    'Ascensor Barón 01.JPG',
    'Ascensor Barón Vista inferior.JPG',
    'Ascensor Barón-Acceso Superior.JPG'
  ],
  'polanco': [
    'Ascensor Polanco, Valparaíso 20230903.jpg',
    'Ascensor Polanco bridge vc.jpg',
    'Ascensor Polanco Superior.jpg',
    'Interior Ascensor Polanco Valparaíso.JPG'
  ],
  'artilleria': [
    'Ascensor Artillería, Valparaíso 20240309.jpg',
    'Ascensor Artillería y barrio Puerto.jpg',
    'Ascensor Artillería vc.jpg',
    'Ascensor Artilleria upper station vc.jpg'
  ],
  'villaseca': [
    'Ascensor Villaseca, Valparaíso 20240309.jpg',
    'Ascensor Villaseca-Valparaíso.JPG',
    'Ascensor Villaseca vc.jpg',
    'J28 102 Ascensor Villaseca.jpg'
  ],
  'mariposas': [
    'Ascensor mariposas.jpg',
    'Ascensor Mariposa Valparaiso.jpg',
    'Ascensor Cerro Mariposa-Entrada Calle Marin.JPG',
    'J28 263 Ascensor Mariposas.jpg'
  ],
  'florida': [
    'Ascensor Florida, Valparaíso Chile.jpg',
    'Ascensor Florida-Entrada Calle Carrera.JPG',
    'Ascensor Florida-Visto desde Abajo.JPG',
    'Ascensor Florida.JPG'
  ],
  'lecheros': [
    'Ascensor Lecheros abandonado.jpg',
    'Ascensor Lecheros, Valparaíso 20230903 01.jpg',
    'Ascensor Lecheros.JPG',
    'Ascensor Lecheros Valparaiso.JPG'
  ],
  'larrain': [
    'Ascensor Larraín abandonado.jpg',
    'Ascensor Larraín, Valparaíso 20230903 01.jpg',
    'Ascensor Larraín 01.JPG',
    'Ascensor Larraín vc.jpg'
  ],
  'monjas': [
    'Ascensor Monjas, Valparaíso 2024.jpg',
    'Ascensor Monjas Valpo.jpg',
    'Ascensor Monjas.JPG',
    'J28 259 Ascensor Monjas.jpg'
  ],
  'la-cruz': [
    {src:'media/photos/la-cruz.png', page:'https://ascensoresvalparaiso.org/content/carro-ascensor-la-cruz'}
  ],
  'van-buren': [
    {src:'media/photos/van-buren.png', page:'https://commons.wikimedia.org/wiki/File:Ascensor_del_Hospital_Van_Buren_2013-09-28_21-52-56.jpg'}
  ],
  'san-juan': [
    {src:'media/photos/san-juan.png', page:'https://commons.wikimedia.org/wiki/File:Ascensor_Hospital_o_San_Juan_de_Dios,_ya_desaparecido..jpg'}
  ],
  'panteon': [
    {src:'media/photos/panteon.png', page:'https://commons.wikimedia.org/wiki/File:Ascensor_Panteon.jpg'}
  ],
  'ferroviario': [
    {src:'media/photos/ferroviario.png', page:'https://ascensoresvalparaiso.org/content/ascensor-ferroviario'}
  ],
  'esmeralda': [
    {src:'media/photos/esmeralda.png', page:'https://commons.wikimedia.org/wiki/File:Ascensor_Esmeralda.jpg'}
  ],
  'placeres': [
    {src:'media/photos/placeres.png', page:'https://ascensoresvalparaiso.org/content/antiguo-ascensor-los-placeres'}
  ],
  'las-canas': [
    {src:'media/photos/las-canas.png', page:'https://ascensoresvalparaiso.org/content/ascensor-las-canas-18'}
  ],
  'perdices': [
    {src:'media/photos/perdices.png', page:'https://ascensoresvalparaiso.org/content/los-restos-del-antiguo-ascensor-perdices'}
  ],
  'santo-domingo': [
    {src:'media/photos/no-disponible.png'}
  ],
  'ramaditas': [
    {src:'media/photos/no-disponible.png'}
  ],
  'delicias': [
    {src:'media/photos/no-disponible.png'}
  ]
};

const isExternalObject = (file) => typeof file === 'object' && file !== null;
export const commonsFilePage = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`;
export const commonsImage = (file, width = 900) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replaceAll(' ', '_'))}?width=${width}`;
export const photoFilePage = (file) => isExternalObject(file) ? (file.page || '') : commonsFilePage(file);
export const photoImage = (file, width = 900) => isExternalObject(file) ? file.src : commonsImage(file, width);

// Fuentes visuales verificadas, para ascensores cuyas fotos aún no están
// disponibles como archivos reutilizables. No las contamos como fotos de la galería.
export const PHOTO_ARCHIVE_LINKS = {};

