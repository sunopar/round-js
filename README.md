# round-js
Dealing with JavaScript's round problem

## why use round-js
when we want to round a number with float, something will go that doesn't what we expect if use `Number.toFixed`. Consider the situation below:

```
10.145.toFixed(2) --> 10.14
```
the equation will return 10.14, but what we expect is 10.15.

## how to use round-js

```
npm install --save so-round
```
in file

```
import round from 'so-round'
round(10.145,2) ---> 10.15
```

more detail can be inspect from `test/round.test.js`