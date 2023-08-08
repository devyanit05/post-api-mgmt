async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const userData = [];
const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch data only once
async function getData() {
  const data = await fetchData(url);
  userData.push(...data);
}

getData();

console.log(userData);
