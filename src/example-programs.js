const filename = 'control-flow.lox'
const data = require('../examples/'+filename)
fetch(data)
  .then(r => r.text())
  .then(text => {
    console.log(text);
  });
export const examplePrograms = [
  {
    name: 'Hello world',
    source: `print "hello world";
`,
  },
  {
    name: 'Class',
    source: `print "=== Example 1 ===";
    class Bacon {
      eat() {
        print "Crunch crunch crunch!";
      }
    }
    Bacon().eat();
    
    print "=== Example 2 ===";
    class Cake {
      taste() {
        var adjective = "delicious";
        print "The " + this.flavor + " cake is " + adjective + "!";
      }
    }
    var cake = Cake();
    cake.flavor = "German chocolate";
    cake.taste();
    
    print "=== Example 3 ===";
    class Thing {
      getCallback() {
        fun localFunction() {
          print this;
        }
    
        return localFunction;
      }
    }
    var callback = Thing().getCallback();
    callback();
    
    print "=== Example 4 ===";
    class Breakfast {
      init() {
        this.name = "cake";
        this.number = 2;
        print "Cakes ready!";
      }
    
      eat() {
        if (this.number > 0) {
          print "Eating " + this.name + "...";
          this.number = this.number - 1;
        } else {
          print "Nothing to eat.";
        }
      }
    }
    var breakfast = Breakfast();
    var quickEat = breakfast.eat;
    quickEat();
    breakfast.eat();
    quickEat();
    `,
  },
  {
    name: 'function',
    source: `print "=== Function 1: sayHi ===";
    fun sayHi(first, last) {
      print "Hi, " + first + " " + last + "!";
    }
    sayHi("Dear", "Reader");
    
    print "=== Function 2: fib ===";
    fun fib(n) {
      if (n <= 1) return n;
      return fib(n - 2) + fib(n - 1);
    }
    for (var i = 0; i < 20; i = i + 1) {
      print fib(i);
    }
    
    print "=== Function 3: closure ===";
    fun makeCounter() {
      var i = 0;
      fun count() {
        i = i + 1;
        print i;
      }
    
      return count;
    }
    var counter = makeCounter();
    for (var j = 0; j < 10; j = j + 1) {
      counter();
    }
    
`,
  },
  {
    name: 'Control flow',
    source: `print "=== If ===";
    var a = -10;
    var condition = a > 3;
    if (condition) {
      print "Running true...";
    } else {
      print "Running false...";
    }
    
    print "=== While loop ===";
    var i = 1;
    while (i < 8) {
      print i;
      i = i + 1;
    }
    
    print "=== For loop ===";
    var a = 0;
    var temp;
    for (var b = 1; a < 100; b = temp + b) {
      print a;
      temp = a;
      a = b;
    }
    
`,
  },
  {
    name: 'Inheritance',
    source: `class Doughnut {
      cook() {
        print "Fry until golden brown.";
      }
    }
    
    class BostonCream < Doughnut {
      cook() {
        super.cook();
        print "Pipe full of custard and coat with chocolate.";
      }
    }
    
    BostonCream().cook();    
`,
  },{
    name: 'Block Scope',
    source: `var a = "global a";
    var b = "global b";
    var c = "global c";
    {
      var a = "outer a";
      var b = "outer b";
      {
        var a = "inner a";
        print a;
        print b;
        print c;
      }
      print a;
      print b;
      print c;
    }
    print a;
    print b;
    print c;
    
`,
  },
];
