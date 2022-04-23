#!/usr/bin/env node
"use strict";
/*
 * name     : test1.js
 * job      : test for the CedictLineParser object
 * git      : https://github.com/pffy/cedict-line-parser-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */


const CedictLineParser = require('../obj');

// valid CEDICT line, one definition
console.time('speed1');
const str1 = '木衛三 木卫三 [mu4 wei4 san1] /Ganymede [moo2]/'; console.log(str1);
console.log(CedictLineParser.parse(str1));
console.timeEnd('speed1');
console.log('...');
console.log('...');
console.log('...');

// invalid CEDICT line
console.time('speed2');
const str2 = '木衛三 木卫三 mu4 wei4 san1 /Ganymede [moo2]/';
console.log(str2);
console.log(CedictLineParser.parse(str2));
console.timeEnd('speed2');
console.log('...');
console.log('...');
console.log('...');

// valid CEDICT line, multiple definitions
console.time('speed3');
const str3 = '木衛三 木卫三 [mu4 wei4 san1] /Ganymede [moo2]/Ganymede [moo2]/Ganymede [moo2]/';
console.log(str3);
console.log(CedictLineParser.parse(str3));
console.timeEnd('speed3');
console.log('...');
console.log('...');
console.log('...');
