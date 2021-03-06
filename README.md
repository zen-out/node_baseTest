# node_basetest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/node_basetest)
[Play with docs](https://zen-out.github.io/modules/node_basetest.html)
## Instructions: 

```js
npm install node_basetest
const node_basetest =  require('node_basetest')
```

## If utilizing in html...: 
```html
<script src="./node_modules/node_basetest/index.js"></script>
<script> 
$(()=> { 
     const output =  node_basetest.method(parameter)
 })
</script>
```


## Functions

<dl>
<dt><a href="#HASHELPER">HASHELPER(one, two)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#HAS">HAS(one, two)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#STARTSWITHHELPER">STARTSWITHHELPER(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#STARTSWITH">STARTSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ENDSWITHHELPER">ENDSWITHHELPER(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ENDSWITH">ENDSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#COUNTHELPER">COUNTHELPER(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#COUNT">COUNT(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ATLEASTHELPER">ATLEASTHELPER(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ATLEAST">ATLEAST(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISLESSHELPER">ISLESSHELPER(first, second, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISLESS">ISLESS(one, two, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#DOESNOTHAVEHELPER">DOESNOTHAVEHELPER(string, item)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#DOESNOTHAVE">DOESNOTHAVE(string, item)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#TRUNCATE">TRUNCATE(string, length, ending)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#WRAPHTML">WRAPHTML(string, div, options)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#T">T(value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#F">F(value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISTYPEOFHELPER">ISTYPEOFHELPER(data, type)</a> ⇒ <code>any</code></dt>
<dd><p>ISTYPEOFHELPER</p>
</dd>
<dt><a href="#ISTYPEOF">ISTYPEOF(data, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="HASHELPER"></a>

## HASHELPER(one, two) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 

**Example**  
```js
it('we need to test well', () => {
        T(HASHELPER("div div", "div")) // true 
        F(HASHELPER("DIV", "div")) // false
        F(HASHELPER("dispaiv", "div")) // false
        T(HASHELPER("div div div", "div")) // 
    });
```
<a name="HAS"></a>

## HAS(one, two) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 

**Example**  
```js
it('the problem is that the syntax is annoying', () => {\
        HAS("div div", "div") // true 
        HAS("DIV", "div") // false
        HAS("dispaiv", "div") // false
        HAS("div div div", "div") // 
    });
```
<a name="STARTSWITHHELPER"></a>

## STARTSWITHHELPER(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
```
<a name="STARTSWITH"></a>

## STARTSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("starts with", () => {
        STARTSWITH("hello", "h")
        STARTSWITH("hello", "b")
    })
```
<a name="ENDSWITHHELPER"></a>

## ENDSWITHHELPER(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
```
<a name="ENDSWITH"></a>

## ENDSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("ends with", () => {
        ENDSWITH("HELLO", "o")
        ENDSWITH("<div></div>", "</div>")
    })
```
<a name="COUNTHELPER"></a>

## COUNTHELPER(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
it('', () => {
            F(COUNTHELPER("hello hellodi", "div", 2)) // false
            T(COUNTHELPER("hello hellodi", "hello", 2)) // true 
        });
```
<a name="COUNT"></a>

## COUNT(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
it('', () => {
        t.COUNT("div div div", "div", 9)
        COUNT("div div div", "div", 9) // false
        COUNT("hello hellodi", "div", 2) // false
        COUNT("hello hellodi", "hello", 2) // true 
        COUNT("divdiv<div>{{<div>", "div", 4) // true
    });
```
<a name="ATLEASTHELPER"></a>

## ATLEASTHELPER(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
it("", () => {
        T(ATLEASTHELPER("div div", "div", 1)) //true 
        T(ATLEASTHELPER("div div", "div", 2)) //true 
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
```
<a name="ATLEAST"></a>

## ATLEAST(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
it("", () => {
        ATLEAST("div div", "div", 1) //true 
        ATLEAST("div div", "div", 2) //true 
        ATLEAST("div div", "div", 3) //false 
    })
```
<a name="ISLESSHELPER"></a>

## ISLESSHELPER(first, second, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param | Type |
| --- | --- |
| first | <code>any</code> | 
| second | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
T(ISLESSHELPER("a", "b", "string"))
        T(ISLESSHELPER(1, 2, "number"))
        T(ISLESSHELPER("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESSHELPER("b", "a", "string"))
        F(ISLESSHELPER(2, 1, "number"))
        F(ISLESSHELPER("Dec 11, 1996", "Dec 11, 1995", "date"))
```
<a name="ISLESS"></a>

## ISLESS(one, two, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
ISLESS("a", "b", "string")
        ISLESS(1, 2, "number")
        ISLESS("Dec 11, 1993", "Dec 11, 1994", "date")
        ISLESS("b", "a", "string")
        ISLESS(2, 1, "number")
        ISLESS("Dec 11, 1996", "Dec 11, 1995", "date")
```
<a name="DOESNOTHAVEHELPER"></a>

## DOESNOTHAVEHELPER(string, item) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| item | <code>any</code> | 

**Example**  
```js
it('', () => {
            F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
            T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
        });
```
<a name="DOESNOTHAVE"></a>

## DOESNOTHAVE(string, item) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| item | <code>any</code> | 

**Example**  
```js
it(' ', () => {
        DOESNOTHAVE("{{>", ">") // passes (matches the full instance)
        DOESNOTHAVE("{{>", "asdf") // passes
    });
```
<a name="TRUNCATE"></a>

## TRUNCATE(string, length, ending) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| length | <code>any</code> | 
| ending | <code>any</code> | 

**Example**  
```js
TRUNCATE("long test", 8, "...") // long tes...
```
<a name="WRAPHTML"></a>

## WRAPHTML(string, div, options) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| div | <code>any</code> | 
| options | <code>any</code> | 

**Example**  
```js
WRAPHTML("lezzles11","div",{
  "id": "content",
  "class": "left bullet"
})
<div id="content" class="left bullet">lezzles11</div>
```
<a name="T"></a>

## T(value) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

**Example**  
```js
it("my fav part of coding is making things", () => {
        T(STARTSWITHHELPER("hello", "h"))
    })
```
<a name="F"></a>

## F(value) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

**Example**  
```js
it("but in order to code well", () => {
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
```
<a name="ISTYPEOFHELPER"></a>

## ISTYPEOFHELPER(data, type) ⇒ <code>any</code>
ISTYPEOFHELPER

**Kind**: global function  
**Date**: 2022-03-01  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| type | <code>any</code> | 

<a name="ISTYPEOF"></a>

## ISTYPEOF(data, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
it('y ', () => {
        ISTYPEOF({ "hello": "whatsup" }, "object")
        ISTYPEOF("imaball", "string")
        ISTYPEOF(["asdf"], "array")
        ISTYPEOF(false, "boolean")
    });
```
