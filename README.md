# Parse plain text lines in CEDICT format.

+ `CedictLineParser` provides static functions for processing CEDICT-formatted data
+ Works with projects like [CC-CEDICT][cedict] or [Pinyinbase][pb]
+ This is the JavaScript version.
+ Used in [pbjkit][pbjkit].

# Functions

## `parse` 

**parse** is a static function that reads a single CEDICT-formatted line as input, validates it, and returns JSON data.

### Valid Input

If the CEDICT line is valid, the entry is processed:
```javascript
const CedictLineParser = require('cedict-line-parser-js');

// valid CEDICT line
const str = '木衛三 木卫三 [mu4 wei4 san1] /Ganymede [moo2]/';

// Returns JSON object
const json = CedictLineParser.parse(str);
/*
{
  input: '木衛三 木卫三 [mu4 wei4 san1] /Ganymede [moo2]/',
  isValid: true,
  entry: {
    t: '木衛三',
    s: '木卫三',
    p: 'mu4 wei4 san1',
    d:
      [ 'Ganymede [moo2]' ]
  }
}
*/
```


### Invalid Input

If the CEDICT line is not valid, then the function returns **false** along with the input. 

The entry is not processed:
```javascript

// invalid CEDICT line, missing brackets around pinyin
const str = '木衛三 木卫三 mu4 wei4 san1 /Ganymede [moo2]/';

// Returns JSON object
const json = CedictLineParser.parse(str);
/*
{
  input: '木衛三 木卫三 mu4 wei4 san1 /Ganymede [moo2]/',
  isValid: false,
  entry: {}
}
*/
```


# Licenses
  + MIT License: https://opensource.org/licenses/MIT
  
[pbjkit]: https://github.com/pffy/pbjkit
[cedict]: https://www.mdbg.net/chinese/dictionary?page=cc-cedict
[pb]: https://github.com/pffy/pinyinbase
