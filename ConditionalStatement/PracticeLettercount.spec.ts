import { test } from "@Playwright/test";

test('check occurances of char',async()=>{
  const str0 : string = "mahArshi";
const str1: string = str0.toLowerCase()
let count:any=0;
let counts: Record<string, number> = {};

 
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char in counts) {
    console.log(`${char} : displayed ${counts[char]} times`);
  }
});