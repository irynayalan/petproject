7 * grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
95 / 9

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
grape + 0,65,22,90,53,41,97,37,96,21,61,48,17,26,85,71,43,6,58,14,88,53,98,53,37,55,49,52,44,27,68,70,37,47,2,82,30,2
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
87,94,92,17,78,84,26,66,87,61,82,17,57,1,7,47,45,57,84,93,33,60,94,12,55,29,5,3,77,82,13,8,56,63,34,1,75,60,61,21,11,30,10,98,97,3,4,80,73,5,97,15,53,95,75,20,19,23,15,65,4,47,41,84,12,62,72,77 + 38

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape / 69,28,33,25,21,91,72,23,52,70,15,43,25,50,87,78,97,75,86,30,80,96,98,81,82,51,98,74,83,23,29,45,77,74,46,43,19,54,10,86,39,81,22,35,92,63,53,10,8,44,4,85,59,33,37,43,96,96,61,86,92,73,97,46,6,89,6,49,64,67,86,42,90,46,13,77,67,4,48,24,94,55,79,92,51,98,15,6,31
const getUniqueValues = array => [...new Set(array)];
const filterEvenNumbers = numbers => numbers.filter(isEven);

orange - 
const squareRoot = num => Math.sqrt(num);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

