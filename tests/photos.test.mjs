import test from 'node:test';
import assert from 'node:assert/strict';
import { LIFTS } from '../data.js';
import { PHOTO_FILES, PHOTO_ARCHIVE_LINKS, photoFilePage, photoImage, commonsFilePage, commonsImage } from '../photos.js';

test('15 galerías originales mantienen al menos cuatro referencias fotográficas', () => {
  const curated=Object.entries(PHOTO_FILES).filter(([,files])=>files.length>=4);
  assert.ok(curated.length>=15);
  const known = new Set(LIFTS.map(x=>x.id));
  for (const [id, files] of Object.entries(PHOTO_FILES)) {
    assert.ok(known.has(id), `Ascensor desconocido: ${id}`);
    assert.ok(files.length>0, `No hay imágenes en ${id}`);
    for(const file of files){
      assert.ok(typeof file==='string' || (file?.src && file?.page), `Referencia inválida: ${id}`);
    }
  }
});

test('Tres ascensores nuevos cuentan con enlaces de archivo verificables',()=>{
  for(const id of ['santo-domingo','ramaditas','delicias']){
    assert.ok(PHOTO_ARCHIVE_LINKS[id].length>0);
    assert.ok(PHOTO_ARCHIVE_LINKS[id].every(x=>x.url.startsWith('https://')));
  }
  assert.equal(PHOTO_FILES['santo-domingo'].length,1);
  assert.ok(!PHOTO_FILES['ramaditas']);
  assert.ok(!PHOTO_FILES['delicias']);
});

test('Enlaces de Wikimedia Commons y fotos vinculadas preservan su fuente',()=>{
  const file='Ascensor Reina Victoria, Valparaíso 20230902.jpg';
  assert.ok(commonsFilePage(file).includes('Reina_Victoria%2C_Valpara%C3%ADso'));
  assert.ok(commonsImage(file,820).includes('width=820'));
  assert.equal(photoFilePage(PHOTO_FILES['santo-domingo'][0]),PHOTO_FILES['santo-domingo'][0].page);
  assert.equal(photoImage(PHOTO_FILES['santo-domingo'][0]),PHOTO_FILES['santo-domingo'][0].src);
});
