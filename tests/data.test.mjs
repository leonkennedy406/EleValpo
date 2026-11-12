import test from 'node:test';
import assert from 'node:assert/strict';
import {LIFTS} from '../data.js';
test('El catálogo incluye 30 ascensores históricos',()=>assert.equal(LIFTS.length,30));
test('Cada ascensor tiene un identificador único',()=>assert.equal(new Set(LIFTS.map(l=>l.id)).size,LIFTS.length));
test('Siete ascensores con servicio referencial y Polanco cerrado',()=>{
  assert.equal(LIFTS.filter(l=>l.status==='operativo').length,7);
  assert.equal(LIFTS.find(l=>l.id==='polanco').status,'cerrado');
});
test('No se inventan coordenadas para ascensores sin verificación',()=>{
  assert.equal(LIFTS.find(l=>l.id==='arrayan').lat,null);
  assert.ok(LIFTS.filter(l=>l.status==='operativo').every(l=>Number.isFinite(l.lat)&&Number.isFinite(l.lng)));
});
test('Los marcadores documentados están en la zona de Valparaíso',()=>{
  for(const l of LIFTS.filter(l=>Number.isFinite(l.lat))){
    assert.ok(l.lat>-33.12&&l.lat<-32.95,`${l.name} latitud`);
    assert.ok(l.lng>-71.72&&l.lng<-71.5,`${l.name} longitud`);
  }
});
