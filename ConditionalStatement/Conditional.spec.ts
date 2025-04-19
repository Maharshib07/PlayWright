
import { test, expect, Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test('Learn variables', async () => {
    let country: string = "India";
    let age: number = 30;
    let isMajor: boolean = false;
    console.log("country name is :" + country);
    console.log("my age is" + age);
    console.log("stud is major:" + isMajor);
});
test('Through index', async () => {

    let city: string = "Vijayawada";
    console.log(city.indexOf('y'));  //y position
    console.log(city.charAt(6)); //7th char
    console.log(city.substring(0, 7)); //1-8 chars subtracted
    console.log(city.replace('w', 'v')); //Replace w with v
    console.log(city.toUpperCase()); //Uppercase
    var sentence = "Vijayawada is a city in Andhra Pradesh";
    let arrWords: string[] = sentence.split(' '); //Split by space
    console.log(arrWords);
    console.log("Length is :" + arrWords.length);
    console.log(arrWords.sort()); //Sort the array
});

test('if else statement', async () => {
    let age: number = 25;
    if (age > 18) {
        console.log('stud is major');
    }

    else {
        console.log('student is minor');
    }
});
test('if elseif statement', async () => {
    let age: number = 20;
    if (age < 18) {
        console.log('stud is minor');
    }

    else if (age > 18 && age < 25) {
        console.log('student is young');
    }
    else {
        console.log('student is major');
    }
});

test('switch case', async () => {
    const age: number = 25;
    switch (age) {
        case 25: {
            //statements;
            console.log("Age is 25");
            break;
        }
        case 30: {
            //statements;
            console.log("Age is 30");
            break;
        }
        default: {
            console.log("unknown age");
            //statements; 
            break;
        }
    }
});
test('For Loop', async () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
});
test('For loop string', async () => {
    const names: string[] = ['Rajesh', 'Raju', 'Rakesh'];
    for (let i = 0; i < names.length; i++) {
        console.log('Name is :' + names[i]);
    }
});
test('For loop with break', async () => {
    for (let i = 0; i < 6; i++) {
        if (i == 5) {
            break;
        }
        console.log(i);
    }
});
test('For loop with continue', async () => {
    for (let i = 0; i < 6; i++) {
        if (i == 3) {
            continue;
        }
        console.log(i);
    }
});
test('while loop number', async () => {
    let i: number = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
});
test('while loop string', async () => {
    let i: number = 0;
    const names: string[] = ['Rajesh', 'Raju', 'Rakesh', 'Ravi'];
    while (i < names.length) {
        console.log('name is :' + names[i]);
        i++;
    }
});
test('do while loop', async () => {
    let i: number = 0;
    do {
        console.log(i);
        i++;
    } while (i <= 8);
});
test('Foreach loop string ', async () => {
  let names: string[] = ['Rajesh', 'Raju', 'Rakesh', 'Ravi'];
  names.forEach((name) => {
    console.log('name is :'+ name);
  })
});
test('if else String Statement', async () => {
    const name: string = "Rajesh";
    // let name:string = "Raju";
    // var NaMe = "Rakesh";
    if (name == "Rajesh")
         {
        console.log('Name is same as ' + name);
    }
    else 
    {
        console.log('Name is different');
    }
});
test('string array', async () => {
    let fruits: string[] = ['Apple', 'Orange', 'Banana'];
    console.log(fruits[0]);
    console.log(fruits.length);
    console.log(fruits[5]);
});

test('integer array', async () => {
    let evenNums: number[] = [25, 46, 62, 87, 101, 85, 24];
    evenNums.push(500);
    console.log(evenNums[0]);
    console.log("length is :" + evenNums.length);
    evenNums.sort();
    console.log("smallest :" + evenNums[0]); //smallest number
});

test('for Arrays', async () => {
    let Name: string[] = ["Rajesh", "Raju", "Rakesh"];
    for (let i = 0; i < Name.length; i++) {
        console.log(Name[i]);
    }
});