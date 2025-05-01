import {expect, Page, Browser, test} from '@playwright/test';
import { readFile, utils, read as _read } from 'xlsx';

const xlsx = require('xlsx');
const path="C:\Users\Lenovo\Downloads\Xpath_TutorialsTeacher.xlsx";
const workbook = xlsx.read(path);
const worksheet = workbook.Sheets['Sheet1'];
const data = xlsx.utils.sheet_to_json(worksheet);
console.log(data);

test('Read Excel', async()=>{
   console.log(data);
});