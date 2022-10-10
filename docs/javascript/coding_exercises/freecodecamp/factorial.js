/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-factorialize-a-number/16013

// Hint - StackOverflow
// let fac = n => n < 1 ? 1 : n * fac(n - 1);
*/

function factorialize(num) {
  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1)
}

factorialize(5)

/*
During the first execution of the function:

[num = 5]

Is 5 equal to 1 or 0? No ---> Oki doki, let's continue...

Returns:

(5 (second execution_: 4 (third execution_: 3 (fourth execution_: 2 _fifth execution: 1))))

What it returns can be viewed as (5*(4*(3*(2*1)))) or just 5 * 4 * 3 * 2 * 1, and the function will return the result of that operation: 120. Now, let's check what the rest of the executions do:

During the rest of the executions:

Second Execution: num = 5-1 = 4 -> is num 0 or 1? No

--> return the multiplication between 4 and the next result when num is now 4-1.

Third Execution: num = 4 - 1 = 3 -> is num 0 or 1? No

--> return the multiplication between 3 and the next result when num is now 3-1.

Fourth Execution: num = 3-1 = 2 -> is num 0 or 1? No

--> return the multiplication between 2 and the next result when num is now 2-1.

Fifth Execution: num = 2-1 = 1 -> is num 0 or 1? Yep

--> return 1. And this is where the recursion stops because there are no more executions.
*/
