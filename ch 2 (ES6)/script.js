$(document).ready(function() {
console.log("hello");

// destructuring
const options = {
  name: "romail",
  age: 69,
  birth: "2-02-2015",
};
const { name, age } = options;
console.log(name);

const array = [1, 2, 3, 4, 5];

const [fiestElement, secondElement] = array;
console.log(fiestElement, secondElement);

// template literals
console.log(`My name is ${name} and my age is ${age}`);

// ternary operator
console.log(age > 90 ? "dead" : "alive");

// defualt parameters and spread and rest operators

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
  return num1 * num2;
}
console.log(mulOfTwoNumbers(2, 2));

console.log([...array, ...array]);

function getInfo(...arr) {
  console.log(arr);
  return "romail";
}

console.log(getInfo(1, 2, 3, 4, 5));

// fetch Data using async await and fetch

const api = "https://dummyjson.com/products";

function renderProducts(jsonData) {
  console.log(jsonData);
  jsonData.map((item , index) =>{
      $('body').append(`<p>${index}. ${item.title}</p>`)
  })
}

async function fetchProducts() {
  try {
    const apiFetch = await fetch(api, {
      method: "GET",
    });

    const jsonData = await apiFetch.json();
    if (jsonData?.products?.length > 0) {
      renderProducts(jsonData?.products);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
})