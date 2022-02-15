const S = require("string")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert

/**********************************************
 * It's hard when you change the syntax... omg 
 * Don't change the syntax 
 * ==================================
 ***********************************************/

/**
 * @example
 * it("my fav part of coding is making things", () => {
        T(STARTSWITHHELPER("hello", "h"))
    })
 * @date 2022-02-10
 * @param {any} value
 * @returns {any}
 */
function T(value) {
    assert.isTrue(value)
}

/**
 * @example
 * it("but in order to code well", () => {
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
 * @date 2022-02-10
 * @param {any} value
 * @returns {any}
 */
function F(value) {
    assert.isFalse(value)
}

/**
 * @example 
 * it('we need to test well', () => {
        T(HASHELPER("div div", "div")) // true 
        F(HASHELPER("DIV", "div")) // false
        F(HASHELPER("dispaiv", "div")) // false
        T(HASHELPER("div div div", "div")) // 
    });
 * @date 2022-02-09
 * @param {any} one
 * @param {any} two
 * @returns {any}
 */
function HASHELPER(one, two) {
    var isArr = Array.isArray(one);
    let includes;
    if (isArr) {
        includes = one.includes(two)
    } else if (typeof one === "string") {
        includes = S(one).contains(two);
    } else if (typeof one === "object") {
        includes = Object.values(one)
    } else {
        throw new Error("Type is not string object or array")
    }
    return includes;

}
/**
 * @example
 * it('the problem is that the syntax is annoying', () => {\
        HAS("div div", "div") // true 
        HAS("DIV", "div") // false
        HAS("dispaiv", "div") // false
        HAS("div div div", "div") // 
    });
 * @date 2022-02-10
 * @param {any} one
 * @param {any} two
 * @returns {any}
 */
function HAS(one, two) {
    let getBoolean = HASHELPER(one, two)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}


/**
 * @example
 * it('', () => {
        F(COUNTHELPER("hello hellodi", "div", 2)) // false
        T(COUNTHELPER("hello hellodi", "hello", 2)) // true 
    });
 * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function COUNTHELPER(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        let finalCount = _.countBy(arr, (eachOne) => {
            eachOne === item
        });
        let getBoolean = finalCount === amount;
        counts = getBoolean
    } else if (typeof type === "string") {
        let getStringCount = S(type).count(item);
        let stringIncludes = getStringCount === amount;
        counts = stringIncludes
    }
    return counts;
}

/**
 * @example
 * it('', () => {
        t.COUNT("div div div", "div", 9)
        COUNT("div div div", "div", 9) // false
        COUNT("hello hellodi", "div", 2) // false
        COUNT("hello hellodi", "hello", 2) // true 
        COUNT("divdiv<div>{{<div>", "div", 4) // true
    });
 * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function COUNT(type, item, amount) {
    let getBoolean = COUNTHELPER(type, item, amount)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

/**
 * @example
 * it("", () => {
        T(ATLEASTHELPER("div div", "div", 1)) //true 
        T(ATLEASTHELPER("div div", "div", 2)) //true 
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
 * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function ATLEASTHELPER(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        counts = _.countBy(arr, (eachOne) => {
            eachOne === item
        });

    } else if (typeof type === "string") {
        counts = S(type).count(item);
    }
    if (counts >= amount) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 * it("", () => {
        ATLEAST("div div", "div", 1) //true 
        ATLEAST("div div", "div", 2) //true 
        ATLEAST("div div", "div", 3) //false 
    })
 * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function ATLEAST(type, item, amount) {
    let getBoolean = ATLEASTHELPER(type, item, amount)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

/**
 * @example
 * it('', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
    });
 * @date 2022-02-10
 * @param {any} string
 * @param {any} item
 * @returns {any}
 */
function DOESNOTHAVEHELPER(string, item) {
    let getItems = S(string).count(item)
    let getBoolean = getItems === 0
    return getBoolean;
}

/**
 * @example
 * it(' ', () => {
        DOESNOTHAVE("{{>", ">") // passes (matches the full instance)
        DOESNOTHAVE("{{>", "asdf") // passes
    });
 * @date 2022-02-10
 * @param {any} string
 * @param {any} item
 * @returns {any}
 */
function DOESNOTHAVE(string, item) {
    let getBoolean = DOESNOTHAVEHELPER(string, item)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

/**
 * @example
 * it('y ', () => {
        ISTYPEOF({ "hello": "whatsup" }, "object")
        ISTYPEOF("imaball", "string")
        ISTYPEOF(["asdf"], "array")
        ISTYPEOF(false, "boolean")
    });
 * @date 2022-02-10
 * @param {any} data
 * @param {any} type
 * @returns {any}
 */
function ISTYPEOF(data, type) {
    if (type === "object") {
        assert.isObject(data)
    } else if (type === "string") {
        assert.isString(data)
    } else if (type === "array") {
        assert.isArray(data)
    } else if (type === "number") {
        assert.isNumber(data)
    } else if (type === "boolean") {
        let doubleCheck = S(data).toBoolean()
        assert.isBoolean(data)
    } else {
        throw new Error("type does not pass ")
    }
}

/**
 * @example
 *  it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
 * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function ENDSWITHHELPER(string, substring) {
    let getBoolean = S(string).endsWith(substring)
    return getBoolean
}

/**
 * @example
 * it("ends with", () => {
        ENDSWITH("HELLO", "o")
        ENDSWITH("<div></div>", "</div>")
    })
 * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function ENDSWITH(string, substring) {
    let getBoolean = ENDSWITHHELPER(string, substring)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

/**
 * @example
 *  it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
 * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function STARTSWITHHELPER(string, substring) {
    let getBoolean = S(string).startsWith(substring)
    return getBoolean;
}

/**
 * @example
 * it("starts with", () => {
        STARTSWITH("hello", "h")
        STARTSWITH("hello", "b")
    })
 * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function STARTSWITH(string, substring) {
    let getBoolean = STARTSWITHHELPER(string, substring)
    if (getBoolean) {
        assert.isTrue(getBoolean, `${string} does start with ${substring}`)
    } else {
        assert.isFalse(getBoolean, `${string} does not start with ${substring}`)
    }
}

/**
 * @example
 * TRUNCATE("long test", 8, "...") // long tes...
 * @date 2022-02-09
 * @param {any} string
 * @param {any} length
 * @param {any} ending
 * @returns {any}
 */
function TRUNCATE(string, length, ending) {
    return S(string).truncate(length, ending).s
}

/**
 * @example
 * WRAPHTML("lezzles11","div",{
    "id": "content",
    "class": "left bullet"
})
 <div id="content" class="left bullet">lezzles11</div>
 * @date 2022-02-09
 * @param {any} string
 * @param {any} div
 * @param {any} options
 * @returns {any}
 */
function WRAPHTML(string, div, options) {
    return S(string).wrapHTML(div, options).s
}

module.exports = { T, F, HASHELPER, HAS, COUNTHELPER, COUNT, ATLEASTHELPER, ATLEAST, DOESNOTHAVEHELPER, DOESNOTHAVE, ISTYPEOF, ENDSWITHHELPER, ENDSWITH, STARTSWITHHELPER, STARTSWITH, TRUNCATE, WRAPHTML };