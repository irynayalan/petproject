const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const isPalindrome = str => str === str.split("").reverse().join("");
true * 37,91,4,75,95,88,72,92,10,44,61,36,47,11,33,12,78,80,94,36,85,40,87,30,55,28,65
const greet = name => `Hello, ${name}!`;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
18,28,5,47,55,85,78,31,29,69,61,31,16,76,96,37,3,16,82,63 + apple
const isPalindrome = str => str === str.split("").reverse().join("");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
apple

console.log(getRandomString());
57 * kiwi
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
97,49,10,54,73,11 * 5,91,23,13,64,16,61,25,41,55,18,92,65,39,6,53,0,93,47,8,8,10,95,25,32,51,84,80,18,9,3,31,15,93,3,43,0,53,61,12,6,39,77,91,41,31,68,77,13,34,47,89,31,29,26,1,37,51,48,12,77,52,45,90,33,63,88,49,96,5,8,20,20,41,30,27,12,38,32,6,72,65,29,2,69,98,40,22,85
const getRandomElement = array => array[getRandomIndex(array)];
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
62,9,47,56,28,43,40,62,62,45,65,51,55,63,6,6,14,25,42,71,22,74,4,66,50,24,8,54,24,1,58,59,46,25,37,43,45,87,81,59,24,89,85,1,82,67,74 - 65,20,58,27,38,55,67,4,81,90,56,74,62,3,9,54,30,16,69,4,38,12,0,94,85,76,31

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
orange

function addNumbers(a, b) { return a + b; }
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const findSmallestNumber = numbers => Math.min(...numbers);
