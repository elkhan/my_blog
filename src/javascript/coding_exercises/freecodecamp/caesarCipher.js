/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-caesars-cipher
*/

function rot13(str) {
  // LBH QVQ VG!
  return str
    .split('')
    .map((el) => {
      const x = el.charCodeAt(0)
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x) // Return un-converted character
      }
      if (x < 78) {
        return String.fromCharCode(x + 13)
      }
      return String.fromCharCode(x - 13)
    })
    .join('')
}
expect(rot13('SERR PBQR PNZC')).to.eq('FREE CODE CAMP')

/*
2
Solution with Regular expression and Array of ASCII character codes
 */

function rot13And2(str) {
  const rotCharArray = []
  const regEx = /[A-Z]/
  // eslint-disable-next-line no-param-reassign
  str = str.split('')
  // eslint-disable-next-line no-restricted-syntax
  for (const x in str) {
    // noinspection JSUnfilteredForInLoop
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      // noinspection JSUnfilteredForInLoop
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65)
    } else {
      // noinspection JSUnfilteredForInLoop
      rotCharArray.push(str[x].charCodeAt())
    }
  }
  // eslint-disable-next-line no-param-reassign,prefer-spread
  str = String.fromCharCode.apply(String, rotCharArray)
  return str
}
expect(rot13And2('SERR PBQR PNZC')).to.eq('FREE CODE CAMP')

/*
3
String.prototype.replace function lets you transform a String based on some pattern match (defined by a regular expression),
and the transformation function (which is applied to each of the pattern matches).
Arrow function syntax is used to write the function parameter to replace().
L represents a single unit, from every pattern match with /[A-Z]/g - which is every uppercase letter in the alphabet, from A to Z, present in the string.
The arrow function applies the rot13 transform on every uppercase letter from English alphabet present in the given string.
 */

function rot13And3(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) => String.fromCharCode((L.charCodeAt(0) % 26) + 65))
}
expect(rot13And3('SERR PBQR PNZC')).to.eq('FREE CODE CAMP')

/*
[A]  65 % 26 ⇔ 13 + 65 =  78 [N]
[B]  66 % 26 ⇔ 14 + 65 =  79 [O]
[C]  67 % 26 ⇔ 15 + 65 =  80 [P]
[D]  68 % 26 ⇔ 16 + 65 =  81 [Q]
[E]  69 % 26 ⇔ 17 + 65 =  82 [R]
[F]  70 % 26 ⇔ 18 + 65 =  83 [S]
[G]  71 % 26 ⇔ 19 + 65 =  84 [T]
[H]  72 % 26 ⇔ 20 + 65 =  85 [U]
[I]  73 % 26 ⇔ 21 + 65 =  86 [V]
[J]  74 % 26 ⇔ 22 + 65 =  87 [W]
[K]  75 % 26 ⇔ 23 + 65 =  88 [X]
[L]  76 % 26 ⇔ 24 + 65 =  89 [Y]
[M]  77 % 26 ⇔ 25 + 65 =  90 [Z]
[N]  78 % 26 ⇔  0 + 65 =  65 [A]
[O]  79 % 26 ⇔  1 + 65 =  66 [B]
[P]  80 % 26 ⇔  2 + 65 =  67 [C]
[Q]  81 % 26 ⇔  3 + 65 =  68 [D]
[R]  82 % 26 ⇔  4 + 65 =  69 [E]
[S]  83 % 26 ⇔  5 + 65 =  70 [F]
[T]  84 % 26 ⇔  6 + 65 =  71 [G]
[U]  85 % 26 ⇔  7 + 65 =  72 [H]
[V]  86 % 26 ⇔  8 + 65 =  73 [I]
[W]  87 % 26 ⇔  9 + 65 =  74 [J]
[X]  88 % 26 ⇔ 10 + 65 =  75 [K]
[Y]  89 % 26 ⇔ 11 + 65 =  76 [L]
[Z]  90 % 26 ⇔ 12 + 65 =  77 [M]
 */
