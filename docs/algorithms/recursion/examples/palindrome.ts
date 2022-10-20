export const isPalindrome = (str: string): boolean | string => {
  const strFixed = str.toLowerCase().replace(' ', '')

  if (strFixed.length === 0 || strFixed.length === 1) return true

  if (strFixed.charAt(0) === strFixed.charAt(strFixed.length - 1)) {
    return isPalindrome(strFixed.substring(1, strFixed.length - 1))
  }

  return false
}

// console.log(isPalindrome('eye'))
console.log(isPalindrome('Never Odd Or Even'))
console.log(isPalindrome('Never Odd Nor Even'))
