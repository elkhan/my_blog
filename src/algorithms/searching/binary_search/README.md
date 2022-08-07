# Binary search

So for binary search, you have to check log<sub>n</sub> elements in the worst case.

For a list of 8 elements, _log(8) = 3_, because _2<sup>3</sup> = 8_

- _log<sub>2</sub>(8) = 3_

So for a list of 8 numbers you would have to check 3 numbers at most.

For a list of 1024 elements _log(1024) = 10_, because _2<sup>10</sup> = 1024_

- _log<sub>2</sub>(1024) = 10_

So for a list of 1024 numbers, you'd have to check 10 numbers at most.

^ In the context of Big O notation, log always mean log<sub>2</sub>

More on [logarithms](../../logarithms/README.md)

## Links

[Flavio Copes blog](https://flaviocopes.com/binary-search-javascript/)

[Medium article](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)
