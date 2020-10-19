#!/usr/bin/node
export.match_techs_back = function (list){
const java = new RegExp('([Jj]ava)');
const cSharp = new RegExp('[Cc]#');
// const c = new RegExp('[Cc] ([Pp]rogramming [Ll]anguage)?'); // NO FUNCIONA
const cPlus = new RegExp('[Cc]\+');
const golang = new RegExp('[Gg]o[Ll]ang');
// const r = new RegExp('[\.,\s:][Rr]'); TAMPOCO FUNCIONA XD
const php = new RegExp('[Pp][Hh][Pp]');
const kotlin = new RegExp('[Kk][Oo][Tt][Ll][Ii][Nn]');
const matlab = new RegExp('[Mm][Aa][Tt][Ll][Aa][Bb]');
const python = new RegExp('[Pp]y(thon)?');

const btl = [];
let check = false;
let backTech = false;

// Checks Java
check = java.test('hola, c#, adios, java, camisa');
if (check === true) {
  btl.push('Java');
  backTech = true;
}
// Checks C#
check = cSharp.test('hola, c#, adios, Java, camisa');
if (check === true) {
  btl.push('C#');
  backTech = true;
}
// Checks C
/* check = c.test('hola, c#, adios, Java, camisa, c');
if (check === true) {
  btl.push('C');
  backTech = true;
} */
// Checks C++
check = cPlus.test('hola, c#, adios, Java, C, c++, camisa');
if (check === true) {
  btl.push('C++');
  backTech = true;
}
// Checks GoLang
check = golang.test('hola, c#, adios, Java, C, c++, GoLang');
if (check === true) {
  btl.push('GoLang');
  backTech = true;
}
// Checks R
/* check = r.test('hola, c#, adios, Java, C, c++, GoLang, R');
if (check === true) {
  btl.push('R');
  backTech = true;
} */
// Checks PHP
check = php.test('hola, c#, adios, Java, C, c++, GoLang, R, PHP');
if (check === true) {
  btl.push('PHP');
  backTech = true;
}
// Checks kotlin
check = kotlin.test('hola, c#, adios, Java, C, c++, GoLang, Kotlin');
if (check === true) {
  btl.push('Kotlin');
  backTech = true;
}
// Checks Matlab
check = matlab.test('hola, c#, adios, Java, C, c++, GoLang, Matlab');
if (check === true) {
  btl.push('Matlab');
  backTech = true;
}
// Checks Python
check = python.test('hola, c#, adios, Java, C, c++, GoLang, py');
if (check === true) {
  btl.push('Python');
  backTech = true;
}
console.log(btl);

};
