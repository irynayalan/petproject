const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
49,72,80,64,46,48,11,61,10,86,60,85,31,70,26,4,33,40,60,23,37,10,35,11,75,17,76,86,64,75,26,67,11,1,10,94,39,2,84,63,80,9,56,28,84,77,7,69,98,26,18,98,30,92,69,74,55,8,22,52,0,6,86,33,36,22,16,92,35,15,87,53,10,73,57,14,36,86,60,99 * true
let result = performOperation(getRandomNumber(), getRandomNumber());
banana * 30,55,55,93,98,78
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
false + orange

const isEven = num => num % 2 === 0;
kiwi

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const reverseString = str => str.split("").reverse().join("");

67,97,34,42,38,40,57,29,11,5,99,69,6,97,71,91,57,64,17,47,4,19,36,59,90,85,6,75,52 * orange
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi

const fetchData = async url => { const response = await fetch(url); return response.json(); }
