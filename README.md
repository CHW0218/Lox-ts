# Lox-ts

An interpreter of the [Lox](https://github.com/munificent/craftinginterpreters) scripting language, implemented in TypeScript.

Lox is a tiny scripting language described in [Bob Nystrom](https://stuffwithstuff.com/)'s book [Crafting Interpreters](https://craftinginterpreters.com/). By following [Part II](https://craftinginterpreters.com/a-tree-walk-interpreter.html) of the book, I complete a [TypeScript](https://www.typescriptlang.org/) version of the tree-walk interpreter of Lox , as a writing-an-interpreter-from-scratch exercise.

### Syntax & feature
The syntax and feature of the lox is state in the book chapter [The Lox Language](https://craftinginterpreters.com/the-lox-language.html)
## Usage
****
### Try it online
A playground designed by [React](https://reactjs.org/) is being depolyed online [Click me](https://lox-ts-sp77f.ondigitalocean.app/) or the link below to try it out directly!

[https://lox-ts-sp77f.ondigitalocean.app/](https://lox-ts-sp77f.ondigitalocean.app/)

![alt text](https://github.com/CHW0218/lox-ts/blob/main/public/playground.png?raw=true)
****
### Run the interpreter locally

Clone this repository, install the dependency as:
```bash
$ npm install
```

To start the program, run:
```bash
$ npm run start
```


After start the program, the following message should be appear:

```
> start
> tsc && node dist/main.js

Enter the path of the Lox file you want to compile
```
Now, create a .lox code file as following and enter the path of the file into the program,
```
//Save as hello-world.lox
print "Hello, world!";
```
```
> start
> tsc && node dist/main.js

Enter the path of the Lox file you want to compile ./path of your .lox file
```
It should be compiled succefully and output the result!
```
Output : Hello, world!
Return : nil
```

Also, feel free to run examples in the `examples` directory:

```
> start
> tsc && node dist/main.js

Enter the path of the Lox file you want to compile examples\function.lox
Output : === Function 1: sayHi ===
Output : Hi, Dear Reader!
Output : === Function 2: fib ===
Output : 0
Output : 1
Output : 1
Output : 2
Output : 3
Output : 5
Output : 8
Output : 13
Output : 21
Output : 34
Output : 55
Output : 89
Output : 144
Output : 233
Output : 377
Output : 610
Output : 987
Output : 1597
Output : 2584
Output : 4181
Output : === Function 3: closure ===
Output : 1
Output : 2
Output : 3
Output : 4
Output : 5
Output : 6
Output : 7
Output : 8
Output : 9
Output : 10
Return : nil
```

## Resources

- Book: [Crafting Interpreters](https://craftinginterpreters.com/)
- Blog post: [Crafting "Crafting Interpreters"](http://journal.stuffwithstuff.com/2020/04/05/crafting-crafting-interpreters/)
- Wiki: [Lox implementations](https://github.com/munificent/craftinginterpreters/wiki/Lox-implementations)
