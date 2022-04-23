#!/usr/bin/env node
"use strict";
/*
 * name     : obj.js
 * job      : the CedictLineParser object, a node module
 * task     : parses and validates a CEDICT syntax line
 * git      : https://github.com/pffy/cedict-line-parser-js
 * author   : The Pffy Authors https://pffy.dev
 * license  : https://opensource.org/licenses/MIT
 */

class CedictLineParser {

  static parse(str) {

    // should be string
    str = '' + str;

    // only handles the first line, if multiline
    str = str.split(/\r\n|\r|\n/)[0];

    // match the CEDICT syntax
    const re = /^(\p{Script=Han}+)\s(\p{Script=Han}+)\s\[(.*)\]\s\/(.*)\/$/u;

    const arr = str.match(re);

    if (!arr) {
      return {
        input: str,
        isValid: false,
        entry: {}
      }
    }

    // hanzi

    // traditional characters
    const t = arr[1];

    // simplified characters
    const s = arr[2];

    // pinyin
    const p = arr[3];

    // definition
    const d = arr[4].indexOf('/') < 0 ? [arr[4]] : arr[4]
      .trim().split('/').filter(function (s) {
        return !!s.trim();
      });

    return {
      input: str,
      isValid: true,
      entry: {
        t: t,
        s: s,
        p: p,
        d: d
      }
    }
  }
}

module.exports = CedictLineParser;
