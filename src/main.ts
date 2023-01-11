import { Runner } from "./runner";
import * as readline from "readline";
import * as fs from 'fs';
// fs.readFileSync('foo.txt','utf8');

export const LogTypes = {
    Stdout: 'stdout',
    Stderr: 'stderr',
    Return: 'return',
  };
  

let logs: { type: string; content: string; }[] = [];

const runner = new Runner(
  {
    writeLn: (line) => {
      logs.push({ type: LogTypes.Stdout, content: line });
    },
  },
  {
    writeLn: (line) => {
      logs.push({ type: LogTypes.Stderr, content: line });
    },
  },
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question("Enter the relative path of the Lox file you want to compile ", function(filePath) {
    console.log("the file is", filePath);

    rl.close();
  });
// runner.run("print\"Hello, world!\";");

// console.log(logs);