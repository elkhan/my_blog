// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stringObject = String('hello world')
let stringValue = 'hi world'
// console.log(stringValue.length);
// console.log(stringValue.charAt(1));
// console.log(stringValue.charCodeAt(1));

let result = stringValue.concat('!')
// console.log(result);
// console.log(stringValue);
const result1 = stringValue.concat('!', '!', '!')
// console.log(result1);
// console.log(stringValue);

// + is preferred over concat() method

// *******************

// “ECMAScript provides three methods for creating string values from a substring: slice(), substr(), and substring(). All three methods return a substring of the string they act on, and all accept either one or two arguments.”

// “The first argument is the position where capture of the substring begins; the second argument, if used, indicates where the operation should stop. For slice() and substring(), this second argument is the position before which capture is stopped (all characters up to this point are included except the character at that point). For substr(), the second argument is the number of characters to return. If the second argument is omitted in any case, it is assumed that the ending position is the length of the string.”

const anotherStringValue = 'Hello World'
// console.log(anotherStringValue.slice(3)); // lo World
// console.log(anotherStringValue.substring(3)); // lo World
// console.log(anotherStringValue.substr(3)); // lo World
// console.log(anotherStringValue.slice(3, 7)); // lo W
// console.log(anotherStringValue.substring(3, 7)); // lo W
// console.log(anotherStringValue.substr(3, 7)); // lo Worl

// console.log(anotherStringValue.slice(-3)); // rld
// console.log(anotherStringValue.substring(-3)); // Hello World
// console.log(anotherStringValue.substr(-3)); // rld
// console.log(anotherStringValue.slice(3, -4)); // lo W
// console.log(anotherStringValue.substring(3, -4)); // Hel
// console.log(anotherStringValue.substr(3, -4)); // (empty string)

// ********************

// String location methods
// “There are two methods for locating substrings within another string: indexOf() and lastIndexOf().”

// “indexOf() method begins looking for the substring at the beginning of the string, whereas the lastIndexOf() method begins looking from the end of the string.”

// console.log(anotherStringValue.indexOf("o")); // 4 - o in Hello
// console.log(anotherStringValue.lastIndexOf("o")); // 7 - o in World

// console.log(anotherStringValue.indexOf("o", 6)); // 7 - starts at 6 and goes forward
// console.log(anotherStringValue.lastIndexOf("o", 6)); // 4 - starts at 6 and goes backward

stringValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
const positions = []
let pos = stringValue.indexOf('e')

while (pos > -1) {
  positions.push(pos)
  pos = stringValue.indexOf('e', pos + 1)
}

// console.log(positions); // [ 3, 24, 32, 35, 52 ]

// trim() method creates a copy of the string removing all leading and trailing white space

// ********************

// String case methods
// “Four methods perform case conversion: toLowerCase(), toLocaleLowerCase(), toUpperCase(), and toLocaleUpperCase().”

// ***************

// String Pattern-Matching Methods
// match()

const text = 'cat, bat, sat, fat'
const pattern = /.at/

// the same as pattern.exec(text)
const matches = text.match(pattern)
// console.log(matches.index); // 0
// console.log(matches[0]); // "cat"
// console.log(pattern.lastIndex); // 0

// search()
pos = text.search(/at/)
// console.log(pos); // 1

// replace()
result = text.replace('at', 'ond')
// console.log(result); // "cond, bat, sat, fat"

result = text.replace(/at/g, 'ond')
// console.log(result); // “cond, bond, sond, fond”

// “Here, each word ending with "at" is replaced with "word" followed in parentheses by what it replaces by using the $1 sequence.”
result = text.replace(/(.at)/g, 'word ($1)')
// console.log(result);

// “The second argument of replace() may also be a function. When there is a single match, the function gets passed three arguments: the string match, the position of the match within the string, and the whole string.”

// eslint-disable-next-line no-shadow
function htmlEscape(text) {
  // eslint-disable-next-line consistent-return,no-shadow
  return text.replace(/[<>"&]/g, (match, pos, originalText) => {
    // eslint-disable-next-line default-case
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
    }
  })
}

// console.log(htmlEscape("<p class=\"greeting\">Hello World!</p>"));
// &lt;p class=&quot;greeting&quot;&gt;Hello World!&lt;/p&gt;

// *****************

// split() method separates the string into an array of substrings based on separator
const colorText = 'red, blue, green, yellow'
const colors1 = colorText.split(',')
// console.log(colors1); // ["red", "blue", "green", "yellow"]
const colors2 = colorText.split(',', 2)
// console.log(colors2); // ["red", "blue"]
const colors3 = colorText.split(/[^,]+/)
// console.log(colors3); // ["", ",", ",", ",", ""]

// *****************

// localeCompare() compares one string to another and returns one of three values: -1, 0, 1 (depending on an implementation)
stringValue = 'yellow'
// console.log(stringValue.localeCompare("brick")); // 1
// console.log(stringValue.localeCompare("yellow")); // 0
// console.log(stringValue.localeCompare("zoo")); // -1 - "zoo" comes after "yellow"

function determineOrder(value) {
  // eslint-disable-next-line no-shadow
  const result = stringValue.localeCompare(value)
  if (result < 0) {
    console.log(`The string 'yellow' comes before the string '${value}'.`)
  } else if (result > 0) {
    console.log(`The string 'yellow' comes after the string '${value}'.`)
  } else {
    console.log(`The string 'yellow' is equal to the string '${value}'.`)
  }
}

determineOrder('brick')
determineOrder('yellow')
determineOrder('zoo')
