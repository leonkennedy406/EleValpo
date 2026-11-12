import { LIFTS, SOURCES, REFERENCE_DATE } from './data.js';
import { EXTRAS, LIFT_DESCRIPTIONS } from './translations-extra.js';
import { PHOTO_FILES, PHOTO_ARCHIVE_LINKS, photoFilePage, photoImage } from './photos.js';
import { FORM_ENDPOINT, SUPPORT_EMAIL } from './config.js';

const VALHALLA_URL = 'https://valhalla1.openstreetmap.de/route';
const VALHALLA_CLIENT_ID = 'ascensores-valparaiso-educational';

const TRANSLATIONS = {
  es: {
    eyebrow:'PATRIMONIO · CULTURA · MOVILIDAD', heroTitle:'Descubre los ascensores de Valparaíso', heroSubtitle:'Explora sus cerros, conoce su historia y encuentra rutas a pie sin líneas rectas.', explore:'Explorar ascensores',
    statusNoticeTitle:'Estados de referencia, no en vivo', statusNotice:'Los servicios pueden cambiar sin aviso. Antes de viajar confirma su disponibilidad. Polanco aparece cerrado según Ascenval pese a reportes contradictorios.',
    catalogEyebrow:'EXPLORA LA CIUDAD',catalogTitle:'Ascensores históricos',viewMap:'Ver mapa',searchPlaceholder:'Buscar ascensor o cerro...',
    filterAll:'Todos',filterOpen:'Operativos',filterClosed:'Cerrados',filterHistorical:'Históricos',filterRestricted:'Restringidos',
    mapEyebrow:'UBICACIONES',mapTitle:'Mapa interactivo',locate:'Mi ubicación',mapCaveat:'Los puntos indican estaciones o referencias documentadas. Los ascensores sin ubicación verificada no se muestran en el mapa.',
    favsEyebrow:'TU SELECCIÓN',favsTitle:'Mis favoritos',helpEyebrow:'ESTAMOS PARA ORIENTARTE',helpTitle:'Ayuda y comentarios',
    howTitle:'¿Cómo se utiliza?',howDescription:'Elige un ascensor, abre su ficha y pulsa «Calcular ruta». Con ubicación habilitada puedes obtener una ruta peatonal real; si falla el servicio, abre Google Maps.',
    photoDescription:'Las fotografías se consultan en Wikipedia y Wikimedia Commons. Si no existe una fotografía identificable, se muestra un marcador sin imagen.',
    contactTitle:'Contactar por un ascensor',contactDescription:'Para consultas sobre conservación o estado de ascensores puedes escribir a Ascenval, una agrupación ciudadana independiente. No es el soporte de esta aplicación.',contactWebsite:'Página de Ascenval',
    feedbackTitle:'Preparar un comentario',feedbackNote:'Puedes redactar y copiar tu comentario. Para enviarlo al desarrollador de esta aplicación debes configurar un correo de soporte real en app.js.',
    feedbackTypeLabel:'Motivo',feedbackBug:'Error de la aplicación',feedbackLocation:'Ubicación incorrecta',feedbackPhoto:'Fotografía incorrecta',feedbackOther:'Sugerencia',feedbackLiftLabel:'Ascensor (opcional)',feedbackMessageLabel:'Tu comentario',feedbackPrepare:'Preparar comentario',feedbackCopy:'Copiar texto',feedbackPlaceholder:'Cuéntanos qué pasó...',
    navExplore:'Explorar',navMap:'Mapa',navFavs:'Favoritos',navHelp:'Ayuda',
    count:(n)=>`${n} ascensores en el catálogo histórico`,year:'Año',reference:'Estado referencial',access:'Acceso / sector',geo:'Ubicación',geoDocumented:'Punto documentado',geoUnknown:'Sin coordenadas verificadas',
    detail:'Ver detalles',route:'Calcular ruta a pie',google:'Abrir ruta en Google Maps',viewPlace:'Ver ubicación',photoSource:'Foto: Wikipedia / Wikimedia Commons (ver origen y licencia)',photoMissing:'Sin fotografía verificada',
    noResults:'No encontramos ascensores con esos filtros.',noFavs:'Aún no hay favoritos. Toca el corazón de un ascensor para guardarlo.',
    operational:'Operativo (referencial)',closed:'Fuera de servicio',historical:'Histórico / sin servicio',restricted:'Acceso restringido',
    referential:'Consultado: 02/11/2026',coordsWarning:'Este punto corresponde a una estación o referencia geográfica publicada. Confirma el acceso exacto en terreno.',
    cantRoute:'Este ascensor no tiene coordenadas suficientemente verificadas para ofrecer navegación.',serviceWarning:'Este ascensor no figura como servicio público operativo. Puedes visitar el sector, pero no asumir que se puede subir.',
    calculating:'Solicitando tu ubicación y calculando ruta peatonal...',gpsError:'No se pudo acceder a tu ubicación. Autoriza la ubicación en el navegador o usa Google Maps.',routeError:'No fue posible calcular la ruta peatonal. No dibujaremos una línea recta: abre Google Maps para navegar.',routeFar:'Estás lejos de Valparaíso. Puedes usar Google Maps para planificar tu trayecto.',
    distance:'Distancia',duration:'Tiempo estimado',minutes:(n)=>`${n} min a pie`,pathInfo:'Ruta peatonal aproximada: revisa cruces, escaleras y señalización en terreno.',routeReady:'Ruta peatonal calculada',noSteps:'La ruta fue calculada; sigue la línea del mapa.',routeMap:'Ruta desde tu ubicación',
    locationOutside:'Tu posición está fuera del área habitual del mapa; centraremos la vista en tu ubicación.',geoUnavailable:'La geolocalización requiere HTTPS o localhost y permisos.',
    feedbackNoEmail:'El texto está listo. No se configuró un correo para la app: cópialo y envíalo al desarrollador por tu canal habitual.',feedbackCopied:'Comentario copiado al portapapeles.',feedbackCopyError:'No se pudo copiar automáticamente; selecciona el texto manualmente.',feedbackValidation:'Escribe al menos ocho caracteres.',feedbackNoLift:'Sin ascensor específico',selectLift:'Seleccionar ascensor…',contactStatus:'Consulta de estado a Ascenval',openSource:'Fuente sobre el ascensor',photoWiki:'Ver fotografía / artículo',mapUnavailable:'No se pudo cargar el mapa. Comprueba la conexión a Internet.',
    nearby:'Lugares cercanos',nearbySearch:'Buscar panoramas cercanos',historicCaveat:'Este registro es histórico; no presupone que la estructura permanezca en pie.',routeInMap:'La ruta aparece en el mapa. Puedes abrir Google Maps si necesitas navegación guiada.'
  },
  en: {
    eyebrow:'HERITAGE · CULTURE · MOBILITY',heroTitle:'Discover Valparaíso’s historic lifts',heroSubtitle:'Explore the hills, learn their stories and find walking routes that follow real streets.',explore:'Explore the lifts',
    statusNoticeTitle:'Reference status, not live data',statusNotice:'Services can change without notice. Confirm availability before visiting. Ascenval still lists Polanco as closed despite conflicting reports.',
    catalogEyebrow:'EXPLORE THE CITY',catalogTitle:'Historic lifts',viewMap:'View map',searchPlaceholder:'Search lift or hill...',filterAll:'All',filterOpen:'Operating',filterClosed:'Closed',filterHistorical:'Historic',filterRestricted:'Restricted',
    mapEyebrow:'LOCATIONS',mapTitle:'Interactive map',locate:'My location',mapCaveat:'Pins show published station or reference coordinates. Lifts without verified coordinates are not placed on the map.',
    favsEyebrow:'YOUR PICKS',favsTitle:'My favorites',helpEyebrow:'HOW CAN WE HELP?',helpTitle:'Help & feedback',howTitle:'How does it work?',howDescription:'Choose a lift, open its details and tap “Calculate walking route”. Enable location to request a walking route. If routing fails, open Google Maps.',photoDescription:'Photos are fetched from Wikipedia and Wikimedia Commons. When no matching photo can be found, no fabricated image is shown.',
    contactTitle:'Ask about a lift',contactDescription:'For questions about the lifts’ preservation or operating status, contact Ascenval, an independent citizens’ association. It does not support this app.',contactWebsite:'Ascenval website',
    feedbackTitle:'Prepare feedback',feedbackNote:'Write and copy your feedback. To send it to the app developer, a real support email must be configured in app.js.',feedbackTypeLabel:'Topic',feedbackBug:'App bug',feedbackLocation:'Incorrect location',feedbackPhoto:'Incorrect photo',feedbackOther:'Suggestion',feedbackLiftLabel:'Lift (optional)',feedbackMessageLabel:'Your message',feedbackPrepare:'Prepare message',feedbackCopy:'Copy message',feedbackPlaceholder:'Tell us what happened...',navExplore:'Explore',navMap:'Map',navFavs:'Saved',navHelp:'Help',
    count:(n)=>`${n} lifts in the heritage catalog`,year:'Year',reference:'Reference status',access:'Access / area',geo:'Location',geoDocumented:'Published location',geoUnknown:'No verified coordinates',detail:'View details',route:'Calculate walking route',google:'Open in Google Maps',viewPlace:'View location',photoSource:'Photo: Wikipedia / Wikimedia Commons (source and license)',photoMissing:'No verified photo',noResults:'No lifts match these filters.',noFavs:'No favorites yet. Tap a heart to save a lift.',
    operational:'Operating (reference)',closed:'Out of service',historical:'Historic / not operating',restricted:'Restricted access',referential:'Checked: Nov 2, 2026',coordsWarning:'This point is based on published station or location data. Verify the exact entrance on site.',cantRoute:'Verified coordinates are not available for navigation to this historic lift.',serviceWarning:'This lift is not listed as an operating public service. You may visit the area, but not necessarily ride the lift.',
    calculating:'Getting location and requesting pedestrian directions...',gpsError:'Your location is unavailable. Enable location permissions or use Google Maps.',routeError:'The pedestrian route could not be calculated. We will not draw a straight line; open Google Maps instead.',routeFar:'You are far from Valparaíso. Use Google Maps to plan your journey.',distance:'Distance',duration:'Estimated time',minutes:(n)=>`${n} min walking`,pathInfo:'Approximate walking route: check crossings, steps and signs on site.',routeReady:'Walking route calculated',noSteps:'Route found. Follow the mapped line.',routeMap:'Route from your location',locationOutside:'You appear to be outside the map area; the map will center on you.',geoUnavailable:'Location requires HTTPS or localhost and permission.',
    feedbackNoEmail:'Your message is ready. No app-support email has been configured: copy it and send it to the developer.',feedbackCopied:'Message copied.',feedbackCopyError:'Automatic copy failed. Please select and copy the message.',feedbackValidation:'Enter at least eight characters.',feedbackNoLift:'No specific lift',selectLift:'Choose a lift…',contactStatus:'Ask Ascenval about its status',openSource:'Lift source',photoWiki:'See photo / article',mapUnavailable:'Could not load the map. Check your Internet connection.',nearby:'Nearby attractions',nearbySearch:'Find things to do nearby',historicCaveat:'This is a historic record; the original structure may no longer exist.',routeInMap:'The route is shown on the map. Open Google Maps for guided navigation.'
  },
  pt: {
    eyebrow:'PATRIMÔNIO · CULTURA · MOBILIDADE',heroTitle:'Descubra os elevadores de Valparaíso',heroSubtitle:'Explore os morros, conheça sua história e encontre rotas a pé pelas ruas reais.',explore:'Explorar elevadores',
    statusNoticeTitle:'Estado de referência, não em tempo real',statusNotice:'O serviço pode mudar sem aviso. Confira antes de visitar. A Ascenval ainda informa que Polanco está fechado, apesar de notícias conflitantes.',catalogEyebrow:'EXPLORE A CIDADE',catalogTitle:'Elevadores históricos',viewMap:'Ver mapa',searchPlaceholder:'Buscar elevador ou morro...',filterAll:'Todos',filterOpen:'Em operação',filterClosed:'Fechados',filterHistorical:'Históricos',filterRestricted:'Restritos',
    mapEyebrow:'LOCALIZAÇÃO',mapTitle:'Mapa interativo',locate:'Minha localização',mapCaveat:'Os pontos mostram estações ou coordenadas publicadas. Elevadores sem coordenadas verificadas não aparecem no mapa.',favsEyebrow:'SUA SELEÇÃO',favsTitle:'Meus favoritos',helpEyebrow:'COMO PODEMOS AJUDAR?',helpTitle:'Ajuda e comentários',
    howTitle:'Como funciona?',howDescription:'Escolha um elevador, abra os detalhes e toque em “Calcular rota a pé”. Ative a localização para solicitar uma rota real. Se falhar, abra o Google Maps.',photoDescription:'As fotos vêm da Wikipédia e Wikimedia Commons. Sem foto identificável, não mostramos uma imagem inventada.',contactTitle:'Dúvidas sobre um elevador',contactDescription:'Para dúvidas sobre conservação ou estado dos elevadores, escreva à Ascenval, associação cidadã independente. Ela não presta suporte a este aplicativo.',contactWebsite:'Site da Ascenval',feedbackTitle:'Preparar comentário',feedbackNote:'Escreva e copie sua mensagem. Para enviá-la ao desenvolvedor, configure um e-mail real em app.js.',feedbackTypeLabel:'Assunto',feedbackBug:'Erro do aplicativo',feedbackLocation:'Localização incorreta',feedbackPhoto:'Foto incorreta',feedbackOther:'Sugestão',feedbackLiftLabel:'Elevador (opcional)',feedbackMessageLabel:'Sua mensagem',feedbackPrepare:'Preparar mensagem',feedbackCopy:'Copiar texto',feedbackPlaceholder:'Conte o que aconteceu...',navExplore:'Explorar',navMap:'Mapa',navFavs:'Favoritos',navHelp:'Ajuda',
    count:(n)=>`${n} elevadores no catálogo histórico`,year:'Ano',reference:'Estado de referência',access:'Acesso / região',geo:'Localização',geoDocumented:'Ponto documentado',geoUnknown:'Sem coordenadas verificadas',detail:'Ver detalhes',route:'Calcular rota a pé',google:'Abrir no Google Maps',viewPlace:'Ver localização',photoSource:'Foto: Wikipédia / Wikimedia Commons (origem e licença)',photoMissing:'Sem foto verificada',noResults:'Nenhum elevador com esses filtros.',noFavs:'Ainda não há favoritos. Toque no coração para salvar.',operational:'Em operação (referência)',closed:'Fora de serviço',historical:'Histórico / sem serviço',restricted:'Acesso restrito',referential:'Consultado em: 02/11/2026',coordsWarning:'O ponto representa uma estação ou referência publicada. Confirme a entrada exata no local.',cantRoute:'Não há coordenadas verificadas para navegar até este elevador.',serviceWarning:'Este elevador não consta como serviço público ativo. Você pode visitar a região, mas não presumir que ele funcione.',calculating:'Obtendo localização e calculando rota a pé...',gpsError:'Não foi possível obter sua localização. Ative a permissão ou use o Google Maps.',routeError:'Não foi possível calcular a rota a pé. Não desenharemos uma linha reta; abra o Google Maps.',routeFar:'Você está longe de Valparaíso. Use o Google Maps para planejar a viagem.',distance:'Distância',duration:'Tempo estimado',minutes:(n)=>`${n} min a pé`,pathInfo:'Rota aproximada a pé: confira cruzamentos, escadas e placas no local.',routeReady:'Rota a pé calculada',noSteps:'Rota encontrada. Siga a linha no mapa.',routeMap:'Rota da sua localização',locationOutside:'Você parece estar fora da região do mapa; vamos centralizar sua posição.',geoUnavailable:'A localização exige HTTPS ou localhost e permissão.',feedbackNoEmail:'Sua mensagem está pronta. Nenhum e-mail de suporte foi configurado: copie e envie ao desenvolvedor.',feedbackCopied:'Texto copiado.',feedbackCopyError:'Não foi possível copiar automaticamente. Selecione e copie o texto.',feedbackValidation:'Digite pelo menos oito caracteres.',feedbackNoLift:'Nenhum elevador específico',selectLift:'Selecionar elevador…',contactStatus:'Consultar o estado com a Ascenval',openSource:'Fonte do elevador',photoWiki:'Ver foto / artigo',mapUnavailable:'Não foi possível carregar o mapa. Verifique a conexão.',nearby:'Locais próximos',nearbySearch:'Buscar passeios próximos',historicCaveat:'Este é um registro histórico; a estrutura original pode não existir mais.',routeInMap:'A rota está no mapa. Use o Google Maps para navegação guiada.'
  }
};

// Elementos incorporados tras revisar el video: pantalla Rutas y valoración.
Object.assign(TRANSLATIONS, EXTRAS);
Object.assign(TRANSLATIONS.es, {
  navExplore:'Ascensores', navHelp:'Más', navRoutes:'Rutas',
  routesEyebrow:'TU RECORRIDO', routesTitle:'Planificar una ruta',
  routeFormTitle:'¿A qué ascensor quieres ir?', routeFormDescription:'Elige un destino y calcula una ruta desde tu ubicación GPS siguiendo calles y caminos peatonales.',routeDestination:'Destino',routeStart:'Calcular ruta peatonal',
  feedbackRatingLabel:'Valoración (opcional)',polancoWarn:'Según Ascenval, Polanco está cerrado desde el 05/09/2024; un reportaje de 2026 lo clasificó como operativo. Se recomienda confirmar antes de visitar.'
});
Object.assign(TRANSLATIONS.en, {
  navExplore:'Lifts', navHelp:'More', navRoutes:'Routes',
  routesEyebrow:'YOUR JOURNEY',routesTitle:'Plan a route',routeFormTitle:'Which lift would you like to visit?',routeFormDescription:'Choose a destination and calculate a walking route from your GPS location using the pedestrian street network.',routeDestination:'Destination',routeStart:'Calculate walking route',
  feedbackRatingLabel:'Rating (optional)',polancoWarn:'Ascenval lists Polanco as closed since Sep 5, 2024, although a 2026 report called it operational. Verify locally before visiting.'
});
Object.assign(TRANSLATIONS.pt, {
  navExplore:'Elevadores',navHelp:'Mais',navRoutes:'Rotas',
  routesEyebrow:'SEU TRAJETO',routesTitle:'Planejar rota',routeFormTitle:'Qual elevador você quer visitar?',routeFormDescription:'Escolha o destino e calcule uma rota a pé desde seu GPS, seguindo ruas e caminhos.',routeDestination:'Destino',routeStart:'Calcular rota a pé',
  feedbackRatingLabel:'Avaliação (opcional)',polancoWarn:'Segundo a Ascenval, Polanco está fechado desde 05/09/2024; uma notícia de 2026 o considerou ativo. Confirme antes da visita.'
});

// Traducciones de los nuevos controles de galería y contacto.
const PHOTO_CONTACT_I18N = {
  es:{galleryTitle:'Galería de fotografías reales',galleryCount:'fotografías',gallerySource:'Ver foto original, autor y licencia',galleryPrevious:'Fotografía anterior',galleryNext:'Fotografía siguiente',galleryUnavailable:'Esta fotografía no se pudo cargar. Puedes consultar el archivo original.',galleryNoPhotos:'Aún no existe una fotografía identificada para este ascensor.',quickRoute:'Cómo llegar',photoCount:'fotos',feedbackTitle:'Envíanos tu comentario',feedbackNote:'Envía una sugerencia, informa de un error o solicita ayuda. La entrega requiere activar Formspree en config.js.',feedbackPrepare:'Enviar comentario',feedbackName:'Tu nombre (opcional)',feedbackEmail:'Tu correo para responderte',feedbackPrivacy:'Usaremos el correo solo para responder a tu consulta. El formulario se procesa a través de Formspree.',feedbackSending:'Enviando comentario...',feedbackSent:'¡Comentario enviado correctamente! Revisa tu correo de notificaciones en Formspree.',feedbackFailed:'No se pudo enviar el formulario. Revisa tu conexión y la configuración de Formspree. También puedes copiar el texto.',feedbackNeedsSetup:'Para recibir comentarios automáticamente, activa el enlace de Formspree en config.js. Por ahora puedes copiar el mensaje.',feedbackMailOpened:'Se abrió tu correo. Debes pulsar Enviar allí.'},
  en:{galleryTitle:'Real photo gallery',galleryCount:'photos',gallerySource:'Original photo, author and license',galleryPrevious:'Previous photo',galleryNext:'Next photo',galleryUnavailable:'This photo could not be loaded. Check the original file.',galleryNoPhotos:'No verified photo is available for this lift.',quickRoute:'Directions',photoCount:'photos',feedbackTitle:'Send us feedback',feedbackNote:'Report an issue or ask for help. Configure Formspree in config.js to enable sending.',feedbackPrepare:'Send feedback',feedbackName:'Your name (optional)',feedbackEmail:'Email for our reply',feedbackPrivacy:'We only use your email to reply. Formspree processes submissions.',feedbackSending:'Sending...',feedbackSent:'Message sent successfully!',feedbackFailed:'Submission failed. Check your connection and Formspree settings or copy the text.',feedbackNeedsSetup:'Please configure Formspree in config.js to enable sending. You can copy your feedback for now.',feedbackMailOpened:'Your email app opened. Please tap Send there.'},
  pt:{galleryTitle:'Galeria de fotos reais',galleryCount:'fotos',gallerySource:'Foto original, autor e licença',galleryPrevious:'Foto anterior',galleryNext:'Próxima foto',galleryUnavailable:'Não foi possível carregar a foto. Consulte o arquivo original.',galleryNoPhotos:'Não há foto identificada deste elevador.',quickRoute:'Como chegar',photoCount:'fotos',feedbackTitle:'Envie seu comentário',feedbackNote:'Envie sugestão ou relate um problema. Configure Formspree em config.js.',feedbackPrepare:'Enviar comentário',feedbackName:'Seu nome (opcional)',feedbackEmail:'Seu e-mail',feedbackPrivacy:'Usamos seu e-mail apenas para responder. Formspree processa os dados.',feedbackSending:'Enviando...',feedbackSent:'Comentário enviado!',feedbackFailed:'Falha no envio. Verifique conexão e Formspree.',feedbackNeedsSetup:'Configure o Formspree em config.js. Por enquanto copie o comentário.',feedbackMailOpened:'Seu aplicativo de e-mail foi aberto. Envie a mensagem.'},
  de:{galleryTitle:'Galerie echter Fotos',galleryCount:'Fotos',gallerySource:'Originalfoto, Autor und Lizenz',galleryPrevious:'Vorheriges Foto',galleryNext:'Nächstes Foto',galleryUnavailable:'Foto konnte nicht geladen werden. Siehe Originaldatei.',galleryNoPhotos:'Kein zugeordnetes Foto verfügbar.',quickRoute:'Anfahrt',photoCount:'Fotos',feedbackTitle:'Feedback senden',feedbackNote:'Melde Fehler oder Fragen. Formspree muss in config.js eingerichtet werden.',feedbackPrepare:'Feedback senden',feedbackName:'Name (optional)',feedbackEmail:'E-Mail für Antwort',feedbackPrivacy:'Die E-Mail wird nur für die Antwort genutzt. Verarbeitung durch Formspree.',feedbackSending:'Wird gesendet...',feedbackSent:'Nachricht gesendet!',feedbackFailed:'Senden fehlgeschlagen. Bitte Formspree und Verbindung prüfen.',feedbackNeedsSetup:'Formspree in config.js einrichten. Du kannst die Nachricht vorerst kopieren.',feedbackMailOpened:'E-Mail-Anwendung geöffnet. Bitte dort senden.'},
  it:{galleryTitle:'Galleria di foto reali',galleryCount:'foto',gallerySource:'Foto originale, autore e licenza',galleryPrevious:'Foto precedente',galleryNext:'Foto successiva',galleryUnavailable:'Foto non caricata. Consulta il file originale.',galleryNoPhotos:'Nessuna foto identificata per questo ascensore.',quickRoute:'Indicazioni',photoCount:'foto',feedbackTitle:'Invia un commento',feedbackNote:'Segnala un problema o chiedi aiuto. Configura Formspree in config.js.',feedbackPrepare:'Invia commento',feedbackName:'Nome (facoltativo)',feedbackEmail:'Email per risposta',feedbackPrivacy:'Usiamo la tua email solo per rispondere. Invio tramite Formspree.',feedbackSending:'Invio in corso...',feedbackSent:'Messaggio inviato!',feedbackFailed:'Invio non riuscito. Controlla rete e Formspree.',feedbackNeedsSetup:'Configura Formspree in config.js. Per ora puoi copiare il commento.',feedbackMailOpened:'È stata aperta l’app email. Premi Invia.'}
};
for (const [lang, strings] of Object.entries(PHOTO_CONTACT_I18N)) Object.assign(TRANSLATIONS[lang], strings);

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const byId = Object.fromEntries(LIFTS.map(x=>[x.id,x]));
const readLocal = (key, fallback) => { try { const v=localStorage.getItem(key);return v === null ? fallback : JSON.parse(v); } catch {return fallback;} };
const writeLocal = (key, val) => { try {localStorage.setItem(key, JSON.stringify(val));}catch{} };
let language = ['es','en','pt','de','it'].includes(readLocal('av-lang','es')) ? readLocal('av-lang','es') : 'es';
let dark = !!readLocal('av-dark',false);
let favorites = new Set((readLocal('av-favs',[])||[]).filter(id=>byId[id]));
let filter='all';
let map, markerLayer, userMarker, routeLayer, toastTimer;
let userCoords=null, activeLift=null;
const photos = new Map();
// Evita solicitar 30 fotografías a Wikipedia al mismo tiempo: se descargan al entrar en pantalla.
const photoObserver = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries, observer) => {
      entries.filter(entry => entry.isIntersecting).forEach(entry => {
        observer.unobserve(entry.target);
        const lift = byId[entry.target.dataset.photo];
        if (lift) loadPhoto(lift, entry.target);
      });
    }, {rootMargin:'220px'})
  : null;

function t(key,...args){const v=TRANSLATIONS[language][key] ?? TRANSLATIONS.es[key] ?? key;return typeof v==='function'?v(...args):v;}
function escapeHTML(s){return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
const knownCoords=(lift)=>Number.isFinite(lift.lat)&&Number.isFinite(lift.lng);
const statusLabel=(s)=>t({operativo:'operational',cerrado:'closed',historico:'historical',restringido:'restricted'}[s]);
const descriptionFor=(lift)=>lift.description[language] || LIFT_DESCRIPTIONS[language]?.[lift.id] || (language==='de' ? `Historischer Aufzug im Bereich ${lift.sector} von Valparaíso. Prüfe die Quellen vor deinem Besuch.` : language==='it' ? `Ascensore storico nell'area ${lift.sector} di Valparaíso. Consulta le fonti prima della visita.` : lift.description.es);
const wikiUrl=(lift)=>`https://es.wikipedia.org/wiki/${encodeURIComponent(lift.wiki || `Ascensor_${lift.name.replaceAll(' ','_')}`)}`;
const gmapsUrl=(lift, origin=null)=>{
  const query=knownCoords(lift)?`${lift.lat},${lift.lng}`:`Ascensor ${lift.name}, Valparaíso, Chile`;
  const params=new URLSearchParams({api:'1',destination:query,travelmode:'walking'});
  if(origin)params.set('origin',`${origin.lat},${origin.lng}`);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
};
const nearbyUrl=(lift)=>`https://www.google.com/maps/search/?${new URLSearchParams({api:'1',query:`miradores y lugares de interés cerca de Ascensor ${lift.name} Valparaíso`})}`;

function toast(message){const el=$('#toast');el.textContent=message;el.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add('hidden'),4800);}
function updateTexts(){
  document.documentElement.lang=language;
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=t(key);});
  $('#search').placeholder=t('searchPlaceholder');$('#feedbackMessage').placeholder=t('feedbackPlaceholder');
  $('#language').value=language;
  $('#themeToggle').textContent=dark?'☀':'☾';
  $('#counter').textContent=t('count',LIFTS.length);
  renderFeedbackLifts();renderRouteChoices();renderCards();renderFavorites();
  if(map){renderMarkers();}
  if(activeLift && $('#detailDialog').open)renderDetail(activeLift);
  $('#mapInfo').textContent=t('mapCaveat');
}
function setTheme(on){dark=on;document.body.classList.toggle('dark',dark);writeLocal('av-dark',dark);$('#themeToggle').textContent=dark?'☀':'☾';}
function buildCard(lift){
  const saved=favorites.has(lift.id);
  const element=document.createElement('article');element.className='lift-card';
  element.innerHTML=`<div class="photo-wrap" data-photo="${escapeHTML(lift.id)}"><div class="photo-empty" aria-label="${escapeHTML(t('photoMissing'))}">▧</div><span class="status-pill ${lift.status}">${escapeHTML(statusLabel(lift.status))}</span><button class="heart ${saved?'active':''}" aria-label="${saved?'Quitar de favoritos':'Guardar favorito'}" data-favorite="${lift.id}">${saved?'♥':'♡'}</button></div>
  <div class="card-body"><h3>Ascensor ${escapeHTML(lift.name)}</h3><p class="card-sub">📍 ${escapeHTML(lift.sector)}${lift.year?' · '+lift.year:''}</p><p class="card-description">${escapeHTML(descriptionFor(lift))}</p><div class="card-foot"><span class="muted mini">${PHOTO_FILES[lift.id]?.length ? '📸 '+PHOTO_FILES[lift.id].length+' '+escapeHTML(t('photoCount')) : (PHOTO_ARCHIVE_LINKS[lift.id]?.length?'📚 Archivo histórico':(knownCoords(lift)?'✓ '+escapeHTML(t('geoDocumented')):'⚠ '+escapeHTML(t('geoUnknown'))))}</span><button class="text-button" data-detail="${lift.id}">${escapeHTML(t('detail'))} →</button></div><div class="card-actionbar"><button class="card-info-btn" data-detail="${lift.id}">${escapeHTML(t('detail'))}</button>${knownCoords(lift)?`<button class="card-route-btn" data-walk="${lift.id}">↗ ${escapeHTML(t('quickRoute'))}</button>`:''}</div></div>`;
  if (photoObserver) photoObserver.observe(element.querySelector('.photo-wrap'));
  else loadPhoto(lift,element.querySelector('.photo-wrap'));
  return element;
}
function renderCards(){
  const search=$('#search').value.trim().toLocaleLowerCase();
  const items=LIFTS.filter(lift=>filter==='all'||lift.status===filter).filter(lift=>(`${lift.name} ${lift.sector} ${lift.description.es}`).toLocaleLowerCase().includes(search));
  const grid=$('#liftGrid');grid.replaceChildren();
  if(!items.length){const msg=document.createElement('div');msg.className='no-results';msg.textContent=t('noResults');grid.append(msg);return;}
  items.forEach(lift=>grid.append(buildCard(lift)));
}
function renderFavorites(){
  const grid=$('#favsGrid');grid.replaceChildren();const list=LIFTS.filter(l=>favorites.has(l.id));
  if(!list.length){const el=document.createElement('div');el.className='no-results';el.textContent=t('noFavs');grid.append(el);}else list.forEach(l=>grid.append(buildCard(l)));
}
function toggleFavorite(id){
  if(favorites.has(id))favorites.delete(id);else favorites.add(id);
  writeLocal('av-favs',[...favorites]);renderCards();renderFavorites();
  if(activeLift && activeLift.id===id && $('#detailDialog').open)renderDetail(activeLift);
}
function showView(id){
  $$('.view').forEach(v=>v.classList.toggle('hidden',v.id!==id));
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  $('#hero').classList.toggle('hidden',id!=='catalog');
  $('.notice').classList.toggle('hidden',id!=='catalog');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='mapView'){
    if(!map)initMap();
    else setTimeout(()=>map.invalidateSize(),50);
  }
}

function photoURL(lift){
  if (PHOTO_FILES[lift.id]?.length) return Promise.resolve(photoImage(PHOTO_FILES[lift.id][0], 820));
  if(photos.has(lift.id))return photos.get(lift.id);
  const promise=(async()=>{
    if(lift.id==='san-juan'||!lift.wiki)return null;
    const url=new URL('https://es.wikipedia.org/w/api.php');
    url.searchParams.set('action','query');url.searchParams.set('format','json');url.searchParams.set('redirects','1');url.searchParams.set('prop','pageimages');url.searchParams.set('pithumbsize','920');url.searchParams.set('titles',lift.wiki);url.searchParams.set('origin','*');
    try{
      const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),8000);
      const response=await fetch(url,{signal:controller.signal});clearTimeout(timeout);
      if(!response.ok)throw new Error('Wikipedia no disponible');
      const json=await response.json();
      const page=Object.values(json.query?.pages||{})[0];
      // Si el título buscado no existe o no tiene imagen, no se sustituye por una imagen falsa.
      return page?.thumbnail?.source?.startsWith('https://upload.wikimedia.org/')?page.thumbnail.source:null;
    }catch{return null;}
  })();
  photos.set(lift.id,promise);return promise;
}
function loadPhoto(lift,container){
  photoURL(lift).then(url=>{
    if(!url||!container.isConnected)return;
    const image=document.createElement('img');image.className='lift-photo';image.alt=`Ascensor ${lift.name} — imagen publicada en Wikipedia`;
    image.loading='lazy';image.decoding='async';image.referrerPolicy='no-referrer';
    image.onerror=()=>image.remove();
    image.src=url;
    const placeholder=container.querySelector('.photo-empty');
    if(placeholder){container.insertBefore(image,placeholder);image.onload=()=>placeholder.remove();}
  });
}

function archiveLinksMarkup(lift){
  const references = PHOTO_ARCHIVE_LINKS[lift.id] || [];
  if (!references.length) return '';
  const intro = language==='en' ? 'Verified external historical records (some original images are no longer online)' :
    language==='pt' ? 'Registros históricos externos; algumas imagens originais não estão mais disponíveis' :
    language==='de' ? 'Externe historische Quellen; manche Originalbilder sind nicht mehr verfügbar' :
    language==='it' ? 'Archivi storici esterni; alcune immagini originali non sono più disponibili' :
    'Archivos históricos externos (algunas fotografías originales ya no están disponibles)';
  return `<div class="archive-links"><p class="mini muted">📚 ${escapeHTML(intro)}</p>${references.map(ref=>
    `<a href="${escapeHTML(ref.url)}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(ref.label)}</a>`
  ).join('')}</div>`;
}

function renderGallery(lift){
  const container=$('#detailPhoto');
  if(!container)return;
  const files=PHOTO_FILES[lift.id] || [];
  if (!files.length){
    container.innerHTML=`<div class="gallery-no-images"><span class="photo-empty">▧</span><p>${escapeHTML(t('galleryNoPhotos'))}</p></div>`;
    container.insertAdjacentHTML('beforeend', archiveLinksMarkup(lift));
    // Solo usar imagen automática de Wikipedia cuando NO hay un archivo histórico
    // específico: evita que se muestre otro ascensor como si fuera Ramaditas o Delicias.
    if (!(PHOTO_ARCHIVE_LINKS[lift.id]?.length)) loadPhoto(lift, container);
    return;
  }
  let selected=0;
  container.innerHTML=`<div class="gallery-stage">
     <img id="galleryMainImage" alt="" decoding="async" loading="eager">
     <button type="button" class="gallery-prev" aria-label="${escapeHTML(t('galleryPrevious'))}">‹</button>
     <button type="button" class="gallery-next" aria-label="${escapeHTML(t('galleryNext'))}">›</button>
     <div class="gallery-counter" id="galleryCounter"></div>
     <div class="gallery-load-error" id="galleryError" hidden>${escapeHTML(t('galleryUnavailable'))}</div>
    </div>
    <div class="gallery-thumbnails" id="galleryThumbnails"></div>
    <a id="galleryPhotoCredit" class="gallery-credit" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(t('gallerySource'))}</a>`;
  const main=$('#galleryMainImage');const thumbs=$('#galleryThumbnails');
  files.forEach((file,i)=>{
    const button=document.createElement('button');button.type='button';button.className='gallery-thumb';
    button.setAttribute('aria-label',`Foto ${i+1} de ${files.length}`);
    const img=document.createElement('img');img.src=photoImage(file, 220);img.alt=`Ascensor ${lift.name}: foto ${i+1}`;img.loading='lazy';
    button.append(img);button.addEventListener('click',()=>choose(i));thumbs.append(button);
  });
  function choose(i){
    selected=(i+files.length)%files.length;
    const file=files[selected];
    $('#galleryError').hidden=true;main.style.visibility='visible';
    main.alt=`Ascensor ${lift.name} - fotografía ${selected+1} de ${files.length}`;
    main.src=photoImage(file, 1100);
    main.onerror=()=>{main.style.visibility='hidden';$('#galleryError').hidden=false;};
    $('#galleryCounter').textContent=`${selected+1} / ${files.length}`;
    const creditHref = photoFilePage(file);
    const creditEl = $('#galleryPhotoCredit');
    if (creditHref) {
      creditEl.href = creditHref;
      creditEl.hidden = false;
    } else {
      creditEl.removeAttribute('href');
      creditEl.hidden = true;
    }
    $$('.gallery-thumb').forEach((b,k)=>b.classList.toggle('active',k===selected));
  }
  container.querySelector('.gallery-prev').addEventListener('click',()=>choose(selected-1));
  container.querySelector('.gallery-next').addEventListener('click',()=>choose(selected+1));
  choose(0);
}

function renderDetail(lift){
  activeLift=lift;
  const content=$('#detailContent');
  content.innerHTML=`<div class="detail-photo" id="detailPhoto"><div class="photo-empty">▧</div></div><div class="detail-body">
    <span class="status-pill ${lift.status}">${escapeHTML(statusLabel(lift.status))}</span>
    <h2 class="detail-title">Ascensor ${escapeHTML(lift.name)}</h2><p class="muted mini">📍 ${escapeHTML(lift.sector)}</p>
    <p class="detail-description">${escapeHTML(descriptionFor(lift))}</p>
    <div class="facts"><div class="fact"><span class="fact-label">${escapeHTML(t('year'))}</span><span class="fact-value">${escapeHTML(lift.year||'—')}</span></div><div class="fact"><span class="fact-label">${escapeHTML(t('geo'))}</span><span class="fact-value">${escapeHTML(knownCoords(lift)?t('geoDocumented'):t('geoUnknown'))}</span></div><div class="fact"><span class="fact-label">${escapeHTML(t('reference'))}</span><span class="fact-value">${escapeHTML(statusLabel(lift.status))}</span></div><div class="fact"><span class="fact-label">${escapeHTML(t('access'))}</span><span class="fact-value">${escapeHTML(lift.access||lift.sector)}</span></div></div>
    ${lift.status!=='operativo'?`<p class="mini">⚠ ${escapeHTML(lift.status==='historico'?t('historicCaveat'):t('serviceWarning'))}</p>`:''}
    ${lift.warning?`<p class="mini">⚠ ${escapeHTML(t('polancoWarn'))}</p>`:''}
    <p class="mini muted">${escapeHTML(knownCoords(lift)?t('coordsWarning'):t('cantRoute'))}</p>
    <div class="detail-actions">
      ${knownCoords(lift)?`<button class="primary-btn" data-walk="${lift.id}">${escapeHTML(t('route'))}</button>`:''}
      <a class="soft-btn" href="${escapeHTML(gmapsUrl(lift,userCoords))}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('google'))}</a>
      <button class="soft-btn" data-favorite="${lift.id}">${favorites.has(lift.id)?'♥':'♡'}</button>
    </div>
    <div class="detail-actions"><a class="soft-btn" href="${escapeHTML(nearbyUrl(lift))}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('nearbySearch'))}</a>
    <a class="soft-btn" href="mailto:contacto@ascenval.cl?subject=${encodeURIComponent(`Consulta sobre Ascensor ${lift.name} de Valparaíso`)}">${escapeHTML(t('contactStatus'))}</a></div>
    <p class="source-row">${escapeHTML(t('referential'))} · <a target="_blank" rel="noopener noreferrer" href="${escapeHTML(lift.reference)}">${escapeHTML(t('openSource'))}</a> · <a target="_blank" rel="noopener noreferrer" href="${escapeHTML(wikiUrl(lift))}">${escapeHTML(t('photoWiki'))}</a></p>
    <div id="routeDetails" class="details-routing hidden"></div>
  </div>`;
  renderGallery(lift);
}
function openDetail(id){const lift=byId[id];if(!lift)return;renderDetail(lift);const dialog=$('#detailDialog');if(!dialog.open)dialog.showModal();}
function closeDetail(){if($('#detailDialog').open)$('#detailDialog').close();activeLift=null;}

function initMap(){
  if(typeof window.L==='undefined'){ $('#mapInfo').textContent=t('mapUnavailable');return; }
  map=L.map('map',{zoomControl:true,scrollWheelZoom:false}).setView([-33.043,-71.620],13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',maxZoom:19
  }).addTo(map);
  markerLayer=L.layerGroup().addTo(map);
  renderMarkers();
  setTimeout(()=>map.invalidateSize(),160);
}
function renderMarkers(){
  if(!map)return;markerLayer.clearLayers();
  for(const lift of LIFTS){
    if(!knownCoords(lift))continue;
    const icon=L.divIcon({className:'',html:`<div class="lift-pin ${lift.status}">↗</div>`,iconSize:[34,34],iconAnchor:[17,17]});
    const marker=L.marker([lift.lat,lift.lng],{icon});
    marker.bindPopup(`<p class="popup-title">Ascensor ${escapeHTML(lift.name)}</p><p>${escapeHTML(statusLabel(lift.status))}</p><button class="popup-button" data-detail="${lift.id}">${escapeHTML(t('detail'))}</button>`);
    marker.addTo(markerLayer);
  }
}
function locate(){return new Promise((resolve,reject)=>{
  if(!navigator.geolocation){reject(new Error('No geolocation'));return;}
  navigator.geolocation.getCurrentPosition(p=>{
    const coords={lat:p.coords.latitude,lng:p.coords.longitude};userCoords=coords;resolve(coords);
  },reject,{enableHighAccuracy:true,timeout:16000,maximumAge:25000});
});}
async function locateOnMap(){
  try{
    const coords=await locate();
    if(!map){showView('mapView');if(!map)return;}
    if(userMarker)map.removeLayer(userMarker);
    userMarker=L.circleMarker([coords.lat,coords.lng],{radius:9,fillColor:'#3c87e9',fillOpacity:1,color:'#fff',weight:3}).addTo(map).bindPopup(t('locate'));
    map.setView([coords.lat,coords.lng],16);userMarker.openPopup();
    if(haversine(coords,{lat:-33.045,lng:-71.62})>50)toast(t('locationOutside'));
  }catch{toast(t('gpsError'));}
}
function haversine(a,b){
  const toRad=n=>n*Math.PI/180;const dLat=toRad(b.lat-a.lat),dLng=toRad(b.lng-a.lng);
  const q=Math.sin(dLat/2)**2+Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLng/2)**2;
  return 6371*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));
}

async function calculateWalkingRoute(lift){
  if(!knownCoords(lift)){toast(t('cantRoute'));return;}
  toast(t('calculating'));
  let from;
  try{from=await locate();}catch{toast(t('gpsError'));return;}
  if(haversine(from,{lat:lift.lat,lng:lift.lng})>35){toast(t('routeFar'));return;}
  const data={locations:[{lat:from.lat,lon:from.lng},{lat:lift.lat,lon:lift.lng}],costing:'pedestrian',format:'osrm',shape_format:'geojson',language:language==='pt'?'pt-BR':language==='en'?'en-US':'es-ES',units:'kilometers'};
  try{
    const url=`${VALHALLA_URL}?json=${encodeURIComponent(JSON.stringify(data))}`;
    const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),16000);
    const response=await fetch(url,{headers:{'X-Client-Id':VALHALLA_CLIENT_ID},signal:controller.signal});clearTimeout(timer);
    if(!response.ok)throw new Error('Routing HTTP '+response.status);
    const json=await response.json();
    const route=json.routes?.[0];const coords=route?.geometry?.coordinates;
    if(!Array.isArray(coords)||coords.length<2||!Number.isFinite(route.distance))throw new Error('Missing route geometry');
    closeDetail();showView('mapView');if(!map)throw new Error('Map unavailable');
    if(routeLayer)map.removeLayer(routeLayer);
    // Solo se dibuja la geometría peatonal devuelta por Valhalla, NUNCA el segmento origen-destino.
    routeLayer=L.polyline(coords.map(([lng,lat])=>[lat,lng]),{color:'#ed675b',weight:6,opacity:.9,lineCap:'round',lineJoin:'round'}).addTo(map);
    if(userMarker)map.removeLayer(userMarker);
    userMarker=L.circleMarker([from.lat,from.lng],{radius:8,color:'#fff',fillColor:'#347cdb',weight:3,fillOpacity:1}).addTo(map);
    map.fitBounds(routeLayer.getBounds(),{padding:[45,45],maxZoom:17});
    const meters=Math.round(route.distance),minutes=Math.max(1,Math.round(route.duration/60));
    // OSRM maneuvers if present; descriptions are returned in requested language by engine.
    const steps=(route.legs||[]).flatMap(leg=>(leg.steps||[]).map(step=>step.maneuver?.instruction||step.name).filter(Boolean));
    const info=$('#mapInfo');info.replaceChildren();
    const heading=document.createElement('strong');heading.textContent=`${t('routeReady')} — Ascensor ${lift.name}`;info.append(heading);
    const measure=document.createElement('p');measure.textContent=`${t('distance')}: ${meters} m · ${t('duration')}: ${t('minutes',minutes)}`;info.append(measure);
    const caveat=document.createElement('p');caveat.textContent=t('pathInfo');info.append(caveat);
    if(steps.length){const ol=document.createElement('ol');ol.className='directions-list';steps.slice(0,20).forEach(s=>{const li=document.createElement('li');li.textContent=s;ol.append(li);});info.append(ol);}
    const link=document.createElement('a');link.href=gmapsUrl(lift,from);link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('google');link.className='soft-btn';info.append(link);
    toast(t('routeInMap'));
  }catch(err){console.warn('Error al obtener ruta peatonal:',err);toast(t('routeError'));}
}

function renderRouteChoices(){
  const select=$('#routeSelect');
  if(!select)return;
  const previous=select.value;
  select.replaceChildren();
  for(const lift of LIFTS.filter(knownCoords)){
    const opt=document.createElement('option');
    opt.value=lift.id;opt.textContent=`Ascensor ${lift.name} — ${statusLabel(lift.status)}`;
    select.append(opt);
  }
  select.value=byId[previous]&&knownCoords(byId[previous])?previous:'concepcion';
  updateRouteChoice();
}
function updateRouteChoice(){
  const lift=byId[$('#routeSelect')?.value];if(!lift)return;
  $('#routeSelectInfo').textContent=lift.status==='operativo'?t('coordsWarning'):t('serviceWarning');
  $('#routeGoogle').href=gmapsUrl(lift,userCoords);
}

function renderFeedbackLifts(){
  const select=$('#feedbackLift');const prior=select.value;select.replaceChildren();
  const option=document.createElement('option');option.value='';option.textContent=t('selectLift');select.append(option);
  LIFTS.forEach(l=>{const opt=document.createElement('option');opt.value=l.id;opt.textContent=`Ascensor ${l.name}`;select.append(opt);});
  select.value=byId[prior]?prior:'';
}
function feedbackText(){
  const type=$('#feedbackType');const lift=byId[$('#feedbackLift').value];
  const text=$('#feedbackMessage').value.trim();
  const rating=$('#feedbackForm input[name="rating"]:checked')?.value || null;
  const sender=$('#feedbackName').value.trim();
  const senderEmail=$('#feedbackEmail').value.trim();
  return `Ascensores de Valparaíso · Comentario\nNombre: ${sender||'—'}\nCorreo: ${senderEmail}\nTipo: ${type.options[type.selectedIndex].text}\nAscensor: ${lift?lift.name:t('feedbackNoLift')}\nValoración: ${rating ? `${rating}/5` : '—'}\nIdioma: ${language}\nFecha: ${new Date().toISOString().slice(0,10)}\n\n${text}`;
}
function formspreeConfigured(){return /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+\/?$/.test(FORM_ENDPOINT.trim());}
async function copyFeedback(){
  const text=$('#feedbackMessage').value.trim();
  if(text.length<8){toast(t('feedbackValidation'));return;}
  const msg=feedbackText();
  try{await navigator.clipboard.writeText(msg);$('#feedbackResult').textContent=t('feedbackCopied');toast(t('feedbackCopied'));}
  catch{
    const ta=document.createElement('textarea');ta.value=msg;document.body.append(ta);ta.select();
    const copied=document.execCommand('copy');ta.remove();
    $('#feedbackResult').textContent=copied?t('feedbackCopied'):t('feedbackCopyError');
  }
}
async function handleFeedback(event){
  event.preventDefault();
  const message=$('#feedbackMessage').value.trim();if(message.length<8){toast(t('feedbackValidation'));return;}
  const output=$('#feedbackResult');const submit=$('#feedbackSubmit');
  if(formspreeConfigured()){
    const formData=new FormData();
    formData.append('nombre',$('#feedbackName').value.trim()||'No indicado');
    formData.append('email',$('#feedbackEmail').value.trim());
    formData.append('motivo',$('#feedbackType').selectedOptions[0].text);
    formData.append('ascensor',byId[$('#feedbackLift').value]?.name||t('feedbackNoLift'));
    formData.append('valoracion',$('#feedbackForm input[name="rating"]:checked')?.value||'Sin valorar');
    formData.append('idioma',language);
    formData.append('message',message);
    formData.append('_subject','Nuevo comentario - Ascensores de Valparaíso');
    submit.disabled=true;submit.textContent=t('feedbackSending');output.textContent=t('feedbackSending');
    try {
      const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),18000);
      let response;
      try { response=await fetch(FORM_ENDPOINT.trim(),{method:'POST',body:formData,headers:{Accept:'application/json'},signal:controller.signal}); }
      finally {clearTimeout(timer);}
      if (!response.ok) throw new Error(`Formspree respondió ${response.status}`);
      $('#feedbackForm').reset();output.textContent=t('feedbackSent');toast(t('feedbackSent'));
    }catch(error){console.warn('Formspree:',error);output.textContent=t('feedbackFailed');toast(t('feedbackFailed'));}
    finally{submit.disabled=false;submit.textContent=t('feedbackPrepare');}
  }else if (SUPPORT_EMAIL.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(SUPPORT_EMAIL.trim())){
    const params=new URLSearchParams({subject:'Comentario sobre Ascensores de Valparaíso',body:feedbackText()});
    window.location.href=`mailto:${SUPPORT_EMAIL.trim()}?${params.toString()}`;
    output.textContent=t('feedbackMailOpened');
  }else{
    output.textContent=t('feedbackNeedsSetup');toast(t('feedbackNeedsSetup'));
  }
}

$('#language').addEventListener('change',ev=>{language=ev.target.value;writeLocal('av-lang',language);updateTexts();});
$('#themeToggle').addEventListener('click',()=>setTheme(!dark));
$('#exploreButton').addEventListener('click',()=>$('#catalog').scrollIntoView({behavior:'smooth'}));
$('#showMapTop').addEventListener('click',()=>showView('mapView'));
$('#routeSelect').addEventListener('change',updateRouteChoice);
$('#routeStart').addEventListener('click',()=>{const lift=byId[$('#routeSelect').value];if(lift)calculateWalkingRoute(lift);});
$$('.nav-item').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$('#search').addEventListener('input',renderCards);
$('#filters').addEventListener('click',ev=>{
  const b=ev.target.closest('[data-filter]');if(!b)return;
  filter=b.dataset.filter;
  $$('.chip').forEach(chip=>chip.classList.toggle('selected',chip===b));renderCards();
});
document.addEventListener('click',ev=>{
  const fav=ev.target.closest('[data-favorite]');if(fav){toggleFavorite(fav.dataset.favorite);return;}
  const detail=ev.target.closest('[data-detail]');if(detail){openDetail(detail.dataset.detail);return;}
  const walk=ev.target.closest('[data-walk]');if(walk){const lift=byId[walk.dataset.walk];if(lift)calculateWalkingRoute(lift);}
});
$('#closeDetail').addEventListener('click',closeDetail);
$('#detailDialog').addEventListener('click',ev=>{if(ev.target===$('#detailDialog'))closeDetail();});
$('#locateButton').addEventListener('click',locateOnMap);
$('#feedbackForm').addEventListener('submit',handleFeedback);
$('#copyFeedback').addEventListener('click',copyFeedback);
setTheme(dark);updateTexts();
if('serviceWorker' in navigator&&location.protocol!=='file:'){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
