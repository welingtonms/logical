# logical

[![Coverage Status](https://img.shields.io/coveralls/github/welingtonms/logical?style=flat-square)](https://coveralls.io/github/welingtonms/logical)
[![npm package](https://img.shields.io/npm/v/@welingtonms/logical?style=flat-square)](https://www.npmjs.com/package/@welingtonms/logical)
[![Run tests](https://github.com/welingtonms/logical/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/welingtonms/logical/actions/workflows/test.yml)

I have always been fascinated by the simplicity of logical operations and how you can express complex logical structures using it.

That's why I wrote this library, to provides a toolset to perform and chain logical operations.

It follows Javascript's default [_truthy_](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [_falsy_](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) definitions.

## Instalation

You can add this hook as a dependency by running `npm install @welingtonms/logical` or `yarn add @welingtonms/logical`.

## Supported operations

### AND

-   Accepts multiple parameters. Evaluation occurs from left to right.

```js
import { and } from '@welingtonms/logical';

and( true, true, true ); // true
and( true, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  |  `true` |
| `true`  | `false` | `false` |
| `false` | `true`  | `false` |
| `false` | `false` | `false` |

### OR

-   Accepts multiple parameters. Evaluation occurs from left to right.

```js
import { or } from '@welingtonms/logical';

or( false, false, true ); // true
or( false, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  |  `true` |
| `true`  | `false` |  `true` |
| `false` | `true`  |  `true` |
| `false` | `false` | `false` |

### XOR

-   Accepts two parameters.

```js
import { xor } from '@welingtonms/logical';

xor( true, false ); // true
xor( false, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  | `false` |
| `true`  | `false` |  `true` |
| `false` | `true`  |  `true` |
| `false` | `false` | `false` |

### NOT

-   Accepts one parameter.

```js
import { not } from '@welingtonms/logical';

xor( true, false ); // true
xor( false, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  |  `true` |
| `true`  | `false` |  `true` |
| `false` | `true`  |  `true` |
| `false` | `false` | `false` |

### NAND

-   Accepts multiple parameters. Evaluation occurs from left to right.

```js
import { nand } from '@welingtonms/logical';

nand( true, true, true ); // true
nand( true, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  | `false` |
| `true`  | `false` |  `true` |
| `false` | `true`  |  `true` |
| `false` | `false` |  `true` |

### NOR

-   Accepts multiple parameters. Evaluation occurs from left to right.

```js
import { nor } from '@welingtonms/logical';

nor( true, true, true ); // true
nor( true, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  | `false` |
| `true`  | `false` | `false` |
| `false` | `true`  | `false` |
| `false` | `false` |  `true` |

### XNOR

-   Accepts two parameters.

```js
import { xnor } from '@welingtonms/logical';

xnor( true, false ); // true
xnor( false, false ); // false
```

| A       |    B    |  Output |
| ------- | :-----: | ------: |
| `true`  | `true`  |  `true` |
| `true`  | `false` | `false` |
| `false` | `true`  | `false` |
| `false` | `false` |  `true` |

## Usage guide

You can also chain operations using default export `logical`.

First you need to call it with the appropriate initial value (which will depend on the operations you will perform).

When you are done chaining operations, you can call `value()` to get the result.

```js
import logical from '@welingtonms/logical';

console.log( logical( true ).value() ); // true
console.log( logical( false ).value() ); // false

console.log( logical( true ).xor( false ).value() ); // true
```
