// can import as a module
const t = require("./index.js")
    // or import specific functions
const { T, F, HASHELPER, HAS, COUNTHELPER, COUNT, ATLEASTHELPER, ATLEAST, DOESNOTHAVEHELPER, DOESNOTHAVE, ISTYPEOF, ENDSWITHHELPER, ENDSWITH, STARTSWITHHELPER, STARTSWITH, TRUNCATE, WRAPHTML } = require("./index.js")

// module.exports + { STARTSWITH, ENDSWITH, ISTYPEOF, DOESNOTHAVE, ATLEAST, COUNTHELPER, HAS, T, F }
describe("develop simple way of testing elements of divs in strings", () => {
    it('the problem is that i want to see if there were at least 9 instances passed in', () => {
        t.COUNT("div div div", "div", 9)
        COUNT("hello hellodi", "div", 2)
        F(COUNTHELPER("div div div", "div", 9))
        F(COUNTHELPER("hello hellodi", "div", 2))
        F(COUNTHELPER("div div div", "div", 9)) // false
        F(COUNTHELPER("hello hellodi", "div", 2)) // false
        T(COUNTHELPER("hello hellodi", "hello", 2)) // true 
        T(COUNTHELPER("divdiv<div>{{<div>", "div", 4)) // true

        COUNT("div div div", "div", 9) // false
        COUNT("hello hellodi", "div", 2) // false
        COUNT("hello hellodi", "hello", 2) // true 
        COUNT("divdiv<div>{{<div>", "div", 4) // true
    });

    it('the problem is that the syntax is annoying', () => {
        T(HASHELPER("div div", "div")) // true 
        F(HASHELPER("DIV", "div")) // false
        F(HASHELPER("dispaiv", "div")) // false
        T(HASHELPER("div div div", "div")) // 
        HAS("div div", "div") // true 
        HAS("DIV", "div") // false
        HAS("dispaiv", "div") // false
        HAS("div div div", "div") // 
    });
    it("has at least number of instances, i guess", () => {
        T(ATLEASTHELPER("div div", "div", 1)) //true 
        T(ATLEASTHELPER("div div", "div", 2)) //true 
        F(ATLEASTHELPER("div div", "div", 3)) //false 
        ATLEAST("div div", "div", 1) //true 
        ATLEAST("div div", "div", 2) //true 
        ATLEAST("div div", "div", 3) //false 
    })
    it('you know you have to make things A LOT simpler to test. you can create a set of functions that see if a string includes another set of strings, really, thats about it lol ', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // false (matches the full instance)
        DOESNOTHAVE("{{>", ">") // false (matches the full instance)
        DOESNOTHAVE("{{>", "asdf")
    });
    it('you know you have to make things A LOT simpler to test. you can create a set of functions that see if a string includes another set of strings, really, thats about it lol ', () => {
        ISTYPEOF({ "hello": "whatsup" }, "object")
        ISTYPEOF("imaball", "string")
        ISTYPEOF(["asdf"], "array")
        ISTYPEOF(false, "boolean")
    });

    it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
        STARTSWITH("hello", "h")
        STARTSWITH("hello", "b")
    })
    it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
        ENDSWITH("HELLO", "o")
        ENDSWITH("<div></div>", "</div>")
    })
})