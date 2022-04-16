# logical


[![Coverage Status](https://img.shields.io/coveralls/github/cheesebit/logical?style=flat-square)](https://coveralls.io/github/cheesebit/logical)
[![npm package](https://img.shields.io/npm/v/@cheesebit/logical?style=flat-square)](https://www.npmjs.com/package/@cheesebit/logical)

I have always been fascinated by the simplicity of logical operations and how you can express complex logical structures using it.

That's why I wrote this library, to provides a toolset to perform and chain logical operations.

It follows Javascript's default [_truthy_](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [_falsy_](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) definitions.

## Instalation

You can add this hook as a dependency by running `npm install @cheesebit/logical` or `yarn add @cheesebit/logical`.

## Supported operations

### AND

* Accepts multiple parameters. Evaluation occurs from left to right.

```js
  import { and } from '@cheesebit/logical';
  
  and(true, true, true); // true
  and(true, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `true`   |
| `true`  | `false` | `false`  |
| `false` | `true`  | `false`  |
| `false` | `false` | `false`  |

### OR


* Accepts multiple parameters. Evaluation occurs from left to right.

```js
  import { or } from '@cheesebit/logical';
  
  or(false, false, true); // true
  or(false, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `true`   |
| `true`  | `false` | `true`   |
| `false` | `true`  | `true`   |
| `false` | `false` | `false`  |


### XOR

* Accepts two parameters.

```js
  import { xor } from '@cheesebit/logical';
  
  xor(true, false); // true
  xor(false, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `false`  |
| `true`  | `false` | `true`   |
| `false` | `true`  | `true`   |
| `false` | `false` | `false`  |


### NOT

* Accepts one parameter.

```js
  import { not } from '@cheesebit/logical';
  
  xor(true, false); // true
  xor(false, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `true`   |
| `true`  | `false` | `true`   |
| `false` | `true`  | `true`   |
| `false` | `false` | `false`  |

### NAND


* Accepts multiple parameters. Evaluation occurs from left to right.

```js
  import { nand } from '@cheesebit/logical';
  
  nand(true, true, true); // true
  nand(true, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `false`  |
| `true`  | `false` | `true`   |
| `false` | `true`  | `true`   |
| `false` | `false` | `true`   |

### NOR


* Accepts multiple parameters. Evaluation occurs from left to right.

```js
  import { nor } from '@cheesebit/logical';
  
  nor(true, true, true); // true
  nor(true, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `false`  |
| `true`  | `false` | `false`  |
| `false` | `true`  | `false`  |
| `false` | `false` | `true`   |


### XNOR


* Accepts two parameters.

```js
  import { xnor } from '@cheesebit/logical';
  
  xnor(true, false); // true
  xnor(false, false); // false
```

| A       | B       | Output   |
| ------- |:-------:| --------:|
| `true`  | `true`  | `true`   |
| `true`  | `false` | `false`  |
| `false` | `true`  | `false`  |
| `false` | `false` | `true`   |

## Usage guide

You can also chain operations using default export `logical`.

First you need to call it with the appropriate initial value (which will depend on the operations you will perform).

When you are done chaining operations, you can call `value()` to get the result.


```js
  import logical from '@cheesebit/logical';
  
  console.log(logical(true).value()); // true
  console.log(logical(false).value()) // false
  
  console.log(logical(true).xor(false).value()) // true
  
```
