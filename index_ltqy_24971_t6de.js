37,0,24,8,90,82,99,94,31,53,36,10,97,61,32,12,6,8,89,61,70,96,97,85,25,79,55,33,49,52,41,83,68,17,86,31,85,26,50,21,70,59,73,46,29,15,60,31,59,2,19,51,20,71,88,27 * 63

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
true - grape
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
orange

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const multiply = (a, b) => a * b;
class MyClass { constructor() { this.property = getRandomString(); } }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const deepClone = obj => JSON.parse(JSON.stringify(obj));

53,12,17,51,1,97,19,70,89,68,55,31,0,93,51,59,50,53,91,89,36,16,45,49,2,29,35,5,35,8,83,40,47,28,47,20 / 53,68,68,9,92,83,6,5,42,78,51,91,91,11,7,92,40,52,32,96,18,57,15,21,36,1,80,41,79,85,4,52,6,11,13,65,66,66,1,59
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange

const deepClone = obj => JSON.parse(JSON.stringify(obj));

13 - 77,7,22,83,84,70,13,92,81,34,35,97,64,80,69,98,26,15,54,88,27,62,14,47,23,92,24,66,4,36,95,2,85,24,36,65,49,57,79,47,26,0,33,51,45,87,86,32,30,76,66,46,95,99
let array = getRandomArray(); array.forEach(item => console.log(item));
grape

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const filterEvenNumbers = numbers => numbers.filter(isEven);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
25,83,7,85,72,65,29,85,8,12 * true
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
orange

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
58 * true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
29,42,14,90,54,55,17,41,47,6,71,23,46,63,80,57,94,47,86,94,56,1,13,8,46,64,82,49,7,80,55,45,97,11,95,78,97,50,93,91,42,83,3,9,3,0,70,60,41,26,76,95,86,98,40,22,83,48,31,86,82,99,99,37,19,86,83,88,63,27,84,19,76,83,12,35,60,14,10,89,29,72,32,94,29,61,71,7,93,69 * 61

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
apple

const reverseString = str => str.split("").reverse().join("");
56,84,48,63,59,65,97,19,54,46,23,51,80,5,47,89,65,29,90,95,38,25 / false

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
29,72,69,54,36,2,40,30,81,26,42,71,52,41,57,76,29,42,61,78,52,41,53,25,92,90,64,81,85,70,1,13,50,6,64,35,59,39,42,78,26,88,33,40,88,77,83,36 * 34

const getRandomElement = array => array[getRandomIndex(array)];
grape


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const greet = name => `Hello, ${name}!`;

39,4,96,75,46,53,88,56,35,92,80,60,86,85,6,72,43,3,99,32,21,70,90,72,45,76,36,45,13,21,72,43,15,80,19,37,13,19,78,30,0,30,3 - apple
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

