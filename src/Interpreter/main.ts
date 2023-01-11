import { Runner } from "./runner";
import * as readline from "readline";
import * as fs from 'fs';

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

export function run(source: string) {
    logs = [];
    const result = runner.run(source);
    logs.push({ type: LogTypes.Return, content: result });
    return logs;
  }
  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question("Enter the path of the Lox file you want to compile ", function(filePath) {
    const file = fs.readFileSync(filePath,'utf8');
    const output = run(file);

    while(logs.length > 0) {
        const output = logs.shift();
        if(!output) {console.log("No output"); break;} 
        if(output.type === LogTypes.Stdout) {
            console.log("Output : "+output.content);
        }else if(output.type === LogTypes.Stderr) {
            console.error(output.content);
        }else if(output.type === LogTypes.Return) {
            console.log("Return : "+ output.content);
        }
    }

    rl.close();
  });